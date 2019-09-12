const Nats = require('nats');

const nc = Nats.connect('nats://localhost:4222');

nc.subscribe('ping', {}, (msg, inbox) => {
  console.log(msg);
  if (inbox) {
    nc.publish(inbox, 'pong');
  }
});
