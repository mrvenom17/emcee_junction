import mongoose from 'mongoose';

const anchorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: String,
  specializations: [{
    type: String,
  }],
  experience: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: Number,
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  profileImage: String,
  pricing: {
    hourly: Number,
    fullDay: Number,
  },
}, { timestamps: true });

export default mongoose.model('Anchor', anchorSchema);