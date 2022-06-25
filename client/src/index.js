import Main from "./app.js";
import $ from "jquery";

// Al iniciar el programa se instancia la clase principal la cual es la encargada de la construccion de las naves 
const objSpaceCrafts = new Main();
let data = {};

function createSpaceCraft(){
    objSpaceCrafts.setSpaceCraft(data);
}

// Funciones que controlan el dinamismo de de la pagina ocultadon y mostrando contenedores
function initialState(){
    $(".groupButton").css("display", "flex");
    $(".hiden-input").hide();
    $("#btn-cancel").hide();
    $(`#inp-${data.type}`).css("display", "none");
    $(".groupForm").css("display", "none");
    $(".sectionTitle > h1 > span").text("Space Craft");
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
// ----------------------------------------------------------------------------------------

// Event listeners 
$(window).on("load", function(){
    $("#btn-cancel").on("click", ()=>{
        initialState();
    })
    
    $(".btn-typeCraft").on("click", (e)=>{
        data.type = e.target.value;
        showFormCreate();
    })
    
    $("#frm-create").on("submit", (e)=>{
        e.preventDefault();
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].value) data[e.target[i].name] = e.target[i].value; 
        }
        createSpaceCraft();
        console.log(objSpaceCrafts.spaceCrafts);
    })
})
// -----------------------------------------------------------------------------------------