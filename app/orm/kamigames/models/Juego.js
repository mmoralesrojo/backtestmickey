const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var detalleContenido = new Schema({
	nombre: String,
	cantidad: Number
});

var contenido = new Schema({
	nombre: String,
	cantidad: Number,
	detalle: [detalleContenido]
});

var dimension = new Schema({
	nombre: String,
	unidadMedida: String,
	valor: Number
});

module.exports = mongoose.model('juego', new Schema({
	productoId: String,
	nombre: String,
	descripcion: String,
	contenido: [contenido],
	numeroJugadores: {
		minimo: Number,
		maximo: Number
	},
	tiempoPromedioJuego: {
		unidadMedida: String,
		valor: Number
	},
	edadRecomendada: {
		minima: Number,
		maxima: Number
	},
	urlOficial: String,
	dimensiones: [dimension]
}, {collection: "juego"}));