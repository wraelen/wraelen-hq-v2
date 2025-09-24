// lib/db.ts

import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const mongoURI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(mongoURI!);
  console.log('MongoDB connected');
};

// Interfaces for TS safety
interface IUser extends mongoose.Document {
  username: string;
  password: string;
  role: string;
  email?: string;
  comparePassword(candidate: string): Promise<boolean>;
}

interface ILead extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  zillowData: {
    address: string;
    price: string;
    beds: string;
    baths: string;
    sqFt: string;
    type: string;
    daysOnMarket: string;
    realtorName: string;
    realtorPhone: string;
    photo: string;
    url: string;
  };
}

// Add ICallLog similarly if needed

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  email: { type: String, unique: true, sparse: true }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (candidate: string) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);

// Lead and CallLog schemas - port from old server.js
const leadSchema = new mongoose.Schema<ILead>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  zillowData: { type: Object, required: true }
});
const Lead = mongoose.model<ILead>('Lead', leadSchema);

// Export CallLog similarly if needed

export { User, Lead /*, CallLog */ };