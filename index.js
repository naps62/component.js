var GameObject = require('./game_object'),
    Transform = require('./components/transform'),
    LinearMovement = require('./components/linear_movement'),
    Collider = require('./components/collider'),
    engine = require('./game_engine');

var justo = new GameObject("justo"),
    gabriel = new GameObject("gabriel");

justo.addComponent(Transform, { x: 20, y: 0 });
gabriel.addComponent(Transform, { x: 0, y: 0 });

justo.addComponent(LinearMovement, { offX: 1, offY: 0 });
gabriel.addComponent(LinearMovement, { offX: 2, offY: 0 });

gabriel.addComponent(Collider, {
  radius: 2,
  onCollision: function(other) {
    console.log(this.name + " got " + other.owner.name);
    engine.stop();
  }
});

justo.addComponent(Collider, {});

engine.setScene([gabriel, justo]);
engine.run();
