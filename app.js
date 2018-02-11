require('./here');
const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	PORT = process.env.PORT || 3001 || 8080;
const forceSSL = function(){
  return function (req,res,next){
    if(req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));}
    next();}}
express()
	//.use(forceSSL())
	.use(bodyParser.urlencoded({extended:true}))
  	.use(bodyParser.json())
	.use(express.static(path.join(__dirname + '/dist')))
	.post('/scriptErrorCatcher',(req,res) => {here(req.body.scriptErrors);next()},res.json({status:'received'}))
	.get('/*',(req,res) => res.sendFile(path.join(__dirname + '/dist/index.html')))
	.set('port',PORT)
	.listen(PORT,() => console.log('listening on '+PORT));