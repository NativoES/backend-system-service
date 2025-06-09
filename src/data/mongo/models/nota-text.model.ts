import mongoose from "mongoose";

const notaTextoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  texto: {
    type: String,
    required: true,
    trim: true,
  },
  claseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classes",
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
});

export const NotaTextoModel = mongoose.model("NotaTexto", notaTextoSchema);
