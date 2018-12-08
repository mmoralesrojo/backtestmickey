const app = module.exports = require('express')();
const action = require('../../actions/kamigames/index.js');

app.get('/', (req, res) => {
	res.status(200).send({msg: 'OK 0'});
});

app.get('/listaJuegos', async (req, res) => {
	console.log('Accediendo a kamigames - listaJuegos');
	let juegos = await action.listaJuegos(req, res);
	console.log(juegos);
	res.status(200).send(juegos);
});