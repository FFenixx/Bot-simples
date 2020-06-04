module.exports = async client => {
  console.log(`Servers [${client.guilds.cache.size}] Users [${client.users.cache.size}]`);


  client.user.setActivity('STATUS', {type: 'PLAYING'});
  console.log('Hello World!');

}
