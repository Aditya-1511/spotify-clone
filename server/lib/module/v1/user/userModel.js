// Importing mongoose
var mongoose = require("mongoose");
var constants = require("../../../constant");

var Schema = mongoose.Schema;
var User;

var UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      index: true,
    },
    password: {
      type: String,
    },
    userType: {
      type: Number,
      default: 1, //1-User, 3-Admin
    },
    gender: {
      type: Number,
      default: 0, //1 Male, 2 Female, 3 Others
      min: 0,
      max: 3,
    },
    dob: {
      type: String,
    },
    designation: {
      type: String,
    },
    companyName: {
      type: String,
    },
    aboutUs: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    profileImageData: {},
    workEmail: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    deviceToken: {
      type: String,
    },
    deviceID: {
      type: String,
    },
    deviceTypeId: {
      type: Number,
      default: 1, //1 iOS , 2 Android , 3 Web
      min: 1,
      max: 3,
    },
    status: {
      type: Number,
      default: 1,
    },
    isDelete: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

//Export user module
User = module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);
