import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  _id: Number,
  customername: String,
  phonenumber: Number,
  address: String,
  loanAmount: Number,
  intrest: Number,
  loanTermYears: Number,
  loanType: String,
  description: String,
  date:Date,
  insertedDate:Date,
});
const loan = mongoose.model('loan', loanSchema);