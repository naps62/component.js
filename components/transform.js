var Transform = function(owner, options) {
  this.owner = owner;
  this.enabled = true;
  this.x = options.x || 0;
  this.y = options.y || 0;
}

Transform.prototype.render = function() {
  console.log(this.owner.name + ': ' + this.x);
}

module.exports = Transform;
