"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
// Load user service
var _ = require("lodash");
var Promise = require("bluebird");
var ip = require("ip");
var vCardsJS = require("vcards-js");
//========================== Load internal modules ====================

const usrService = require("./userService");
const userMapper = require("./userMapper");

const appUtils = require("../../../appUtils");
const redisSession = require("../../../redisClient/session");
const customException = require("../../../customException");
const emailService = require("../../../service/sendgrid_email");
const constant = require("../../../constant");
const config = require("../../../config");

//========================== Load Modules End ==============================================

function userLogin(params) {
  return usrService
    .isEmailExist(params)
    .bind({})
    .then(function (isExist) {
      this.isExist = isExist;

      if (isExist) {
        return usrService.login(params);
      } else {
        throw customException.userNotFound();
      }
    })
    .then(function (response) {
      if (response) {
        this.user = response;
        let tokenObj = _buildUserTokenGenObj(response);
        let userObj = {
          userId: response._id.toString(),
          userObj: tokenObj,
          ip: params.clientIp ? params.clientIp : ip.address(),
        };
        return redisSession.create(userObj);
      } else {
        throw customException.incorrectPass();
      }
    })
    .then(function (response) {
      return userMapper.loginMapping({
        user: this.user,
        accessToken: response.token,
      });
    });
}

function _buildUserTokenGenObj(user) {
  var userObj = {};
  userObj.deviceToken = user.deviceToken ? user.deviceToken : null;
  userObj.deviceTypeID = user.deviceTypeID ? user.deviceTypeID : null;
  userObj.deviceID = user.deviceID ? user.deviceID : null;
  userObj.userId = user._id.toString();
  userObj.userType = user.userType;
  userObj.status = user.status;
  return userObj;
}

//========================== Export Module Start ==============================

module.exports = {
  userLogin,
};

//========================== Export Module End ================================
