const mongoose = require("mongoose");

// Category jasa
// 1 Graphic and Design
// 2 Programing and Tech
// 3 Video and Animation

const jasaSchema = new mongoose.Schema(
  {
    namaJasa: { type: String },
    descJasa: { type: String },
    catJasa: { type: Number },
    startingPrice: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Jasa", jasaSchema);
