import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
	name:{type:'string',required:true},
	type:{type:'string',required:true}
});

export default mongoose.model('Categories',categoriesSchema);