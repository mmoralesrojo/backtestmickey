const models = require('../../orm/kamigames/models/Models.js');

module.exports.listaJuegos = (req, res) => {
	let juegos;
	juegos = models.Juego.find({}, '');
	return juegos;
};