var express = require('express')

//'escaneia' modulos
var consign = require('consign')

//body-parser - requisicao e resposta
var bodyParser = require('body-parser')

var app = express()

app.set('view engine', 'ejs')

app.set('views', './app/views')

app.use(bodyParser.urlencoded(
		{
			extended: true
		}
	)
)

//autoload de modulos
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app)

module.exports = app