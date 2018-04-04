import obliqueStrategies from "./oblique_strategies";

export default {
  // Gets inspiration
  getInspiration: function() {
      console.log("getInspiration hit");
      return obliqueStrategies[Math.floor(Math.random() * obliqueStrategies.length)].strategy;
  }
};