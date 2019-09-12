const Nats = require('nats');

const nc = Nats.connect('nats://localhost:4222');
const inbox = Nats.createInbox();

nc.subscribe(inbox, {}, (msg) => {
  console.log(msg);
});

setInterval(() => nc.publish('ping', 'ping', inbox), 2000);
