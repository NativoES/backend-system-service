import mongoose from "mongoose";

const completarTextoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  textoOriginal: {
    type: String,
    required: true
  },
  palabrasCorrectas: {
    type: [String],
    required: true
  },
  claseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classes",
    required: true
  },
  template: {
    type: String,
    required: true,
  },
});

export const completarTextoModel = mongoose.model("completarTexto", completarTextoSchema);
