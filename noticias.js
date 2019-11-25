var http = require('http');

let server = http.createServer( (req, res)=>{

	var categoria = req.url;

	if (categoria == '/moda') {

		res.end('<html><body>Noticias de moda</html></body>');

	}else if(categoria == '/beleza'){

		res.end('<html><body>Noticias de beleza</html></body>');

	}else{

		res.end('<html><body>Home do portal</html></body>');

	}

});

server.listen(3000);	