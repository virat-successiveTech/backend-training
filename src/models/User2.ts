import { Schema, model, Document } from 'mongoose';

export interface IUser2 extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'manager';
}

const UserSchema2 = new Schema<IUser2>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin', 'manager'],
    default: 'user',
  },
});

const User2 = model<IUser2>('User2', UserSchema2);
export default User2;
