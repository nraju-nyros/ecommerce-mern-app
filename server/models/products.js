import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productsSchema = new Schema({

	
	name: { type: 'string'},
	description: { type: 'string'},
	price: { type:'string'},
	category_id: [{ type: Schema.Types.ObjectId, ref: 'Categories' }],
	image: { type:'string'}
	
});

export default mongoose.model('Products',productsSchema);