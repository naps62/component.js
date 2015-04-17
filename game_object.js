var GameObject = function(name) {
  this.name = name || "gameObject";
  this.components = [];
}

GameObject.prototype.update = function() {
  this.components.map(function(component) {
    if (component.enabled && !!component.update) {
      component.update();
    }
  });
}

GameObject.prototype.render = function() {
  this.components.map(function(component) {
    if (component.enabled && !!component.render) {
      component.render();
    }
  });
}

GameObject.prototype.onCollision = function(other) {
  this.components.map(function(component) {
    if (component.enabled && !!component.onCollision) {
      component.onCollision(other);
    }
  });
}

GameObject.prototype.getComponents = function(type) {
  if (type == null) {
    return this.components;
  }

  return this.components.filter(function(component) {
    return type == null || (component instanceof type);
  });
}

GameObject.prototype.getComponent = function(type) {
  return this.getComponents(type)[0];
}

GameObject.prototype.addComponent = function(type, options) {
  var component = new type(this, options);
  this.components.push(component);
}

module.exports = GameObject;
