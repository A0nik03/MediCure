import mongoose from "mongoose";
import Medicine from "../models/medicines.js";
import medicines from "./dummy.medicines.js";
import raremedicines from "./dummy.rareinjections.js";


export const insertMedicines = async () => {
  try {
    await Medicine.insertMany(medicines);
    console.log("Medicines inserted successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting medicines:", err);
  }
};

export const insertRareMedicines = async () => {
  try {
    await Medicine.insertMany(raremedicines);
    console.log("Rare Medicines inserted successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting rare medicines:", err);
  }
};