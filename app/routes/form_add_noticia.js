module.exports = (app) => {

	app.get('/adicionar-noticia', (req, res) => {
		res.render('admin/form_add_noticia')
	})
	
}