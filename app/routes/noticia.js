module.exports = (app) =>{

	app.get('/noticia', function(req, res) {

		const connection = app.config.dbConnection()
		var noticiasModel = app.app.models.noticiasModel

		noticiasModel.getNoticia(connection, function(error, result){
			
			res.render('noticias/noticia', {noticia: result})

		})

	});



}
