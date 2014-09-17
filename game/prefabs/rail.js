'use strict';



var Rail = function(game, x, y) {
   
   this.speed = 10;

   Phaser.Sprite.call(this, game, x, y);
   this.image1 = this.game.add.sprite(0, -100, 'icons');
   this.image2 = this.game.add.sprite(0,   0 , 'icons');
   this.image3 = this.game.add.sprite(0,  100, 'icons');
   this.image1.frame = 2;
   this.image2.frame = 3;
   this.image3.frame = 4;
};

Rail.prototype = Object.create(Phaser.Sprite.prototype);
Rail.prototype.constructor = Rail;

Rail.prototype.update = function() {
  this.image1.y += this.speed ;
  this.image2.y += this.speed ;
  this.image3.y += this.speed ;    
};


module.exports = Rail;
