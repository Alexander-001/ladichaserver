const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    priceShop: {
      type: Number,
      trim: true,
      required: true,
    },
    countShop:{
      type: Number,
      trim: true,
      required: true,
    },
    countStock:{
      type: Number,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    /* typeProduct: {
      type: ObjectId,
      ref: "TipoProducto",
    }, */
    typeProduct: {
      type: String
    },
    imageUrl: {
        type: String,
        trim: true,
        required: true,
        text: true,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Activo", "Inactivo"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Producto", productSchema);