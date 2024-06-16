import mongoose from 'mongoose';
const MONGO_URI="mongodb://127.0.0.1:27017/AI"
const connectDB = (MONGO_URI) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(MONGO_URI)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
