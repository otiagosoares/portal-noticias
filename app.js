var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/tecnologia', (req, res) => {
	res.render('secao/tecnologia')
})

app.get('/', (req, res) => {
	res.send('<p>Olá mundo</p>')
})

app.listen(3000, () => {
	console.log('Server running on port 3000')
})
