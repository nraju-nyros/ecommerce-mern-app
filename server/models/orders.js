import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
 product_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
 user_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Users'}],
 cart_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Cart'}],
 Amount:{type:Number}


});

export default mongoose.model('Orders',ordersSchema);
