const mongoose = require('mongoose');
// const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    cart:[{
        productId: {
            type:Schema.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number
        }
    }],
    timestamps : {
		type: Schema.Types.Date,
		default: Date.now,
		immutable: true,
		required: true,
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;