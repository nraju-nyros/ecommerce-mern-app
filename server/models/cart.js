import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cartSchema = new Schema({
 product_id: [{type: Schema.Types.ObjectId, ref: 'Products'}],
});

export default mongoose.model('Cart',cartSchema);
