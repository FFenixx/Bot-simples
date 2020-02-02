module.exports = async client => {
  console.log(`Servers [${client.guilds.size}] Users [${client.users.size}]`);


  client.user.setActivity('STATUS', {type: 'PLAYING'});
  console.log('Hello World!');

}
