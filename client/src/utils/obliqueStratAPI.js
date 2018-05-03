import obliqueStrategies from "./oblique_strategies";

export default {
  // Gets inspiration
  getInspiration: function() {
      return obliqueStrategies[Math.floor(Math.random() * obliqueStrategies.length)].strategy;
  }
};