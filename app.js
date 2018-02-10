const express = require('express'),
	path = require('path'),
	PORT = process.env.PORT || 3001 || 8080;
const forceSSL = function(){
  return function (req,res,next){
    if(req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));}
    next();}}
express()
	//.use(forceSSL())
	.use(express.static(path.join(__dirname + '/dist')))
	.get('/*',(req,res) => res.sendFile(path.join(__dirname + '/dist/index.html')))
	.set('port',PORT)
	.listen(PORT,() => console.log('listening on '+PORT));