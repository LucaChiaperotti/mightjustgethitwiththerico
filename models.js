import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  }
})

export const User = mongoose.model('user', userSchema);
