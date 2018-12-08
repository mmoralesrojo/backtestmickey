const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model('producto', new Schema({
	productoId: String,
	nombre: String,
	descripcionBreve: String,
	descripcionCompleta: String,
	consideraciones: [],
	precio: {
		divisa: {
			simbolo: String,
			descripcion: String
		},
		valor: {
			normal: Number,
			oferta: Number
		}
	},
	dimensiones: {
		unidadMedida: String,
		medidas: {
			largo: Number,
			ancho: Number,
			alto: Number
		}
	},
	peso: {
		unidadMedida: String,
		valor: Number
	},
	imagenes: [],
	calificacion: Number,
	categoriaProducto: {type: Schema.Types.ObjectId, ref: "CategoriaProducto"}
}, {collection: "producto"}));