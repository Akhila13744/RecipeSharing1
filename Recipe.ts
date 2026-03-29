import mongoose, { Schema, Document } from 'mongoose';

export interface IRecipe extends Document {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  author: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema);