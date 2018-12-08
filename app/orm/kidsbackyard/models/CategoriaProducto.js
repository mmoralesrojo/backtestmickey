const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model('categoriaProducto', new Schema({
	categoriaProductoId: String,
	nombreCategoria: String,
	productos: [{type: Schema.Types.ObjectId, ref: "producto"}]
}, {collection: "categoria_producto"}));