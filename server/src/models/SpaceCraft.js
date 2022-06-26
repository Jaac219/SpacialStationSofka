const { DataTypes } = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('spaceCraft', {
    name: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    speed: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    },
    height: {
        type: DataTypes.INTEGER
    },
    fuelType: {
        type: DataTypes.STRING
    },
    potency: {
        type: DataTypes.INTEGER
    },
    propulsionSystem: {
        type: DataTypes.STRING
    },
    payloadWeight: {
        type: DataTypes.INTEGER
    },
    objective: {
        type: DataTypes.STRING
    },
    peopleCapacity: {
        type: DataTypes.INTEGER
    },
    distanceFromEarth: {
        type: DataTypes.INTEGER
    },
    studyObjective: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    thrust: {
        type: DataTypes.INTEGER
    }
  })
}