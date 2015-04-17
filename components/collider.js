var GameEngine = require('../game_engine'),
    Transform = require('./transform');

var Collider = function(owner, options) {
  this.owner = owner;
  this.enabled = true;
  this.radius = options.radius || 1;
  this.onCollision = options.onCollision;
}


Collider.prototype.update = function() {
  GameEngine.objs.map(singleCollisionCheck.bind(this));
}

Collider.prototype.checkCollision = function(other) {
  var x1 = this.owner.getComponent(Transform).x;
  var x2 = other.owner.getComponent(Transform).x;
  return Math.abs(x1 - x2) < this.radius;
}

function singleCollisionCheck(o) {
  var other = o.getComponent(Collider);
  if (other && other != this && this.checkCollision(other) && this.onCollision) {
    this.onCollision.bind(this.owner)(other);
  }
}

module.exports = Collider;
