import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Website Client',
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    maxlength: [100, 'Email cannot be more than 100 characters'],
  },
  phone: {
    type: String,
    maxlength: [50, 'Phone cannot be more than 50 characters'],
  },
  service: {
    type: String,
    maxlength: [50, 'Service cannot be more than 50 characters'],
  },
  location: {
    type: String,
    maxlength: [100, 'Location cannot be more than 100 characters'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
