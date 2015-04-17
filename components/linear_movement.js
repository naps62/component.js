var Transform = require('./transform')

var LinearMovement = function(owner, options) {
  this.owner = owner;
  this.enabled = true;
  this.offX = options.offX || 0;
  this.offY = options.offY || 0;
}

LinearMovement.prototype.update = function() {
  var transform = this.owner.getComponent(Transform);
  transform.x += this.offX;
  transform.y += this.offY;
}

module.exports = LinearMovement;
