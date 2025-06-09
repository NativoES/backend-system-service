import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    lenguaNativa: {
        type: String,
        required: true,
        trim: true
    },
    fotografia: {
        type: String,
        trim: true
    },
    createdAt: { type: Date, default: Date.now }
});

export const StudentModel = mongoose.model("Student", studentSchema);
