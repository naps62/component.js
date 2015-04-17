var GameEngine = function(objs) {
  this.objs = [];
}

GameEngine.prototype.setScene = function(objs) {
  this.objs = objs;
}

GameEngine.prototype.update = function() {
  this.objs.map(function(o) {
    o.update();
  });
}

GameEngine.prototype.render = function() {
  this.objs.map(function(o) {
    o.render();
  });
  console.log("");
}

GameEngine.prototype.run = function() {
  var self = this;
  this.updater = setInterval(function() { self.update(); }, 500);
  this.renderer = setInterval(function() { self.render(); }, 1000);
}

GameEngine.prototype.stop = function() {
  clearInterval(this.updater);
  clearInterval(this.renderer);
}

module.exports = new GameEngine();
