import axios from "axios";
import Main from "./app.js";
import $ from "jquery";

// Al iniciar el programa se instancia la clase principal la cual es la encargada de la construccion de las naves 
const objSpaceCrafts = new Main();
let data = {};

//Se registra la nueva nave espacial en la base de datos y cuando se crea correctamente el servidor responde con 
//los datos con los cuales se realiza una nueva instancia de la clase correspondiente a su tipo
async function createSpaceCraft(){
    try {
        let dbSpaceCraft = await axios.post(process.env.BASE_URL || "https://app-softka-station.herokuapp.com/spaceCraft", data);
        objSpaceCrafts.setSpaceCraft(dbSpaceCraft.data);
        data = {};
    } catch (error) {
        console.log(error);
    }
}

//Cuando se inicializa la pagina se traen todas las naves registradas y se crea un objeto nuevo de cada una
//con los datos que trae
async function loadSpaceCrafts(){
    try {
        let dbSpaceCrafts = await axios.get(process.env.BASE_URL || "https://app-softka-station.herokuapp.com/spaceCraft");
        dbSpaceCrafts.data.forEach((data)=>{
            objSpaceCrafts.setSpaceCraft(data);
        })
    } catch (error) {
        console.log(error);
    }
}
// ---------------------------------------------------------------------------------------

// Funciones que controlan el dinamismo de de la pagina ocultando y mostrando contenedores
function initialState(){
    $(".groupButton").css("display", "flex");
    $(".hiden-input").hide();
    $("#btn-cancel").hide();
    $("#contain-detail").hide();
    $(`#inp-${data.type}`).css("display", "none");
    $(".groupForm").css("display", "none");
    $(".sectionTitle > h1").empty().append("Create a new <span>Space Craft</span>");
    $("#img_craft").attr("src","./public/img/craft.gif");
}
function showFormCreate(){
    $(".groupButton").hide();
    $(".hiden-input").hide();
    $("#btn-cancel").show();
    $(`#inp-${data.type}`).css("display", "flex");
    $(".groupForm").css("display", "flex");
    $(".sectionTitle > h1 > span").text(data.type);
    $("#img_craft").attr("src",`./public/img/${data.type}.png`);
}
function renderCards(){
    $("header > #contain-cards").empty();
    let spaceCrafts = objSpaceCrafts.spaceCrafts; //Devuelve un arreglo con todas las naves creadas
    let idSpaceCrafts = objSpaceCrafts.idSpaceCrafts; //Devuelve un arreglo con los ids de las naves que se deben mostrar
    spaceCrafts.forEach((val)=>{
        let rs = idSpaceCrafts.find((vl)=>vl==val.id) //Verifica si el id actual esta en la lista de los que se deben mostrar
        if (rs) {
            let elements = 
            `<div class="card-spacecraft">
                <div class="img-card">
                  <img src="./public/img/${val.type}.png" alt="">
                </div>
                <div class="name-card">
                  <span>${val.name}</span>
                </div>
            </div>`;
            $("header > #contain-cards").append($(elements).on("click", ()=>{
                showDetailSpaceCraft(val, true);
            }));
        }
    })
}
function showDetailSpaceCraft(obj, bl){
    $(".groupButton").hide();
    $(".groupForm").hide();
    $("#contain-detail").css("display", "flex");
    $("#btn-cancel").show();
    $(".sectionTitle > h1").empty().append(`Detail Space Craft <span>${obj.name}</span>`);
    $("#img_craft-detail").attr("src",`./public/img/${obj.type}.png`);
    $("#spaceCraft-detail > .info").empty();
    //No puedo saber que claves tiene el objeto por que son atributos privados, solo puedo acceder a ellos indicando la clave(debo saberla)
    //asi que cree un arreglo con todas las claves posibles asi todas las que tengan un valor me lo traigo y lo muestro
    let keys = ["id", "name", "country", "type", "speed", "weight", "height", "fuelType", "potency", "propulsionSystem", "payloadWeight", "objective", "peopleCapacity", "distanceFromEarth", "studyObjective", "state", "thrust"];
    keys.forEach((val)=>{
        if(obj[val]){
            $("#spaceCraft-detail > .info").append(`<span><b>${val}: </b>${obj[val]}</span><br>`);
        }
    })
    if(bl) addActions(obj);
}
//Se asigna un boton con una accion adicional segun el tipo de nave
function addActions(obj){
    $(".actions > .btns-actions").empty();
    $(".actions > .answers").empty();

    $(".actions > .btns-actions").append(`<button id="btnTakeOff">takeOff</button>`).on("click", "#btnTakeOff", ()=>{
        $(".answers").empty().append(`<span>${obj.takeOff()}</span>`);
    })
    $(".actions > .btns-actions").append(`<button id="btntoLand">toLand</button>`).on("click", "#btntoLand", ()=>{
        $(".answers").empty().append(`<span>${obj.toLand()}</span>`);
    })
    
    if (obj.type === "LaunchVehicle") {
        $(".actions > .btns-actions").append(`<button id="btnRafuel">Refuel</button>`).on("click", "#btnRafuel", ()=>{
            $(".answers").empty().append(`<span>${obj.refuel()}</span>`);
        })
    }
    if (obj.type === "Manned") {
        $(".actions > .btns-actions").append(`<button id="btnOpenParachute">Open parachute</button>`).on("click", "#btnOpenParachute", ()=>{
            $(".answers").empty().append(`<span>${obj.openParachute()}</span>`);
        })
    }
    if (obj.type === "NotManned") {
        $(".actions > .btns-actions").append(`<button id="btnChangeState">Change State</button>`).on("click", "#btnChangeState", ()=>{
            showDetailSpaceCraft(obj.changeState(), false);
        })
    }
}
// ----------------------------------------------------------------------------------------

// Event listeners 
$(window).on("load", async function(){
    await loadSpaceCrafts();
    let filter = {}
    renderCards();

    $("#btn-cancel").on("click", ()=>{
        initialState();
    })
    
    $(".btn-typeCraft").on("click", (e)=>{
        data.type = e.target.value;
        showFormCreate();
    })
    
    $("#frm-create").on("submit", async (e)=>{
        e.preventDefault();
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].value) data[e.target[i].name] = e.target[i].value; 
        }
        await createSpaceCraft();
        renderCards();
        initialState();
        $(".inp-create").val("");
    })

    $("#bntSearch").on("click", ()=>{
        if ($("#inpSearch").val()) {
            objSpaceCrafts.search($("#inpSearch").val());
            $("#inpSearch").val("");
            $("#selCountry, #selSpeed").val("");
            renderCards();
        }
    })

    $("#selCountry, #selSpeed").on("change", (e)=>{
        filter[e.target.name] = e.target.value;
        objSpaceCrafts.filter(filter);
        renderCards();
    })

    $("#restartCarts").on("click", ()=>{
        $("#inpSearch").val("");
        $("#selCountry, #selSpeed").val("");
        objSpaceCrafts.initViews();
        renderCards();
    })
})
// -----------------------------------------------------------------------------------------