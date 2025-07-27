import mongoose, { Document, Schema } from 'mongoose';

export interface ICountry extends Document {
  name: string;
}

const countrySchema = new Schema<ICountry>({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model<ICountry>('Country', countrySchema);
