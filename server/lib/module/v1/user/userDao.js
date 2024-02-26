"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");

var _ = require("lodash");
//========================== Load internal modules ====================
const userModel = require("./userModel");

// init user dao
let BaseDao = require("../../../dao/baseDao");
const userDao = new BaseDao(userModel);

//========================== Load Modules End ==============================================

function createUser(params) {
  var user = new userModel(params);
  return userDao.save(user);
}

function getByKey(query) {
  return userDao.findOne(query);
}

function isEmailExist(params) {
  let query = {};
  if (params.userId) {
    query._id = { $ne: params.userId };
  }
  if (params.email) {
    query.email = params.email;

    return userDao.findOne(query).then(function (result) {
      if (result) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return _PromiseFunction;
  }
}

const _PromiseFunction = new Promise((resolve, reject) => {
  resolve(true);
});

//========================== Export Module Start ==============================

module.exports = {
  createUser,
  getByKey,
  isEmailExist,
};

//========================== Export Module End ===============================
