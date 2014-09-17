
  'use strict';

var Rail = require('../prefabs/rail');  

  function Play() {}
  Play.prototype = {
    create: function() {
      
       this.rail1 = new Rail(this.game, 100, 100);
       this.game.add.existing(this.rail1);

       this.rail2 = new Rail(this.game, 400, 100);
       this.game.add.existing(this.rail2);
    
    },
    update: function() {
    }
  };
  
  module.exports = Play;