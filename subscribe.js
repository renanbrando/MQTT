var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://iot.eclipse.org');

client.on('connect', function () {
  console.log('Oh Glorious Day! I have connected to eclipse broker. ')
  client.subscribe('fiapmob');
});

client.on('message', function (topic, message) {
  console.log(topic);
  console.log(message.toString());
  client.end();
});
