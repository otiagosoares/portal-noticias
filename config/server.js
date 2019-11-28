var express = require('express')

//'escaneia' rotas
var consign = require('consign')

var app = express()

app.set('view engine', 'ejs')

app.set('views', './app/views')

//autoload de modulos
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app)

module.exports = app