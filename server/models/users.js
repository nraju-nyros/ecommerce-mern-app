import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  phone: { type: 'String', required: true },
  Address: { type: 'String', required: true },
 
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Users', usersSchema);
