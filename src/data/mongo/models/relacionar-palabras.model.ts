import mongoose from "mongoose";

const relacionarPalabrasSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  palabras: [
    {
      es: { type: String, required: true },
      en: { type: String, required: true }
    }
  ],
  claseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classes",
    required: true
  },
  template: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now }
});

export const RelacionarPalabrasModel = mongoose.model("ClasificarPalabras", relacionarPalabrasSchema);
