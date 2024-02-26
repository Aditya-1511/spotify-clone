/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const contstants = require("../../../constant");
const config = require("../../../config");

function loginMapping(params) {
  let userInfo = params.user;
  delete userInfo.password;
  var respObj = {
    message: "Successfully Login",
    accessToken: params.accessToken,
    mediaPath: config.cfg.s3.mediaPath,
    result: userInfo,
  };
  return respObj;
}

module.exports = {
  loginMapping,
};
