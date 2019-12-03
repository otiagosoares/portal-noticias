module.exports = (app) => {

	app.get('/adicionar-noticia', (req, res) => {
		res.render('admin/form_add_noticia')
	})

	//salva formulario de noticias
	app.post('/noticias/salvar', (req, res) => {

		let noticia = req.body;
		res.send(noticia)
	})
	
}