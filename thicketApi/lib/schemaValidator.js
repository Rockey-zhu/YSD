const Joi= require("joi");
// const bunyan = require('bunyan'); 日志库
module.exports = function schemaValidator (schema, payload)  {
    return new Promise((resolve, reject) => {
        Joi.validate(payload, schema, (err, value) => {
        if (err) {
          if(err.details.length > 0) return resolve(err.details[0].message);
          else return resolve(null);
        }
        else return resolve(null);
  });
  });
  }



  // return Promise.resolve()
  //     .then(() => {
  //       const schema = Joi.object().options({ convert: false, allowUnknown: true }).keys({
  //         _appid: Joi.string().empty(''),
  //         _ip: Joi.string().empty(''),
  //         access_token: Joi.string().empty(''),
  //         token: Joi.string().empty(''),
  //         authorization: Joi.string().empty(''),
  //         auth: Joi.string().empty(''),
  //         phonetype: Joi.string().required(),
  //         phonemodel: Joi.number().min(1).max(2),
  //         itucode: Joi.string().valid("86", "00886", "00852", "00853").required(),
  //         phone: Joi.string().min(3).max(20).required(),
  //         register: Joi.string().required(),
  //         registertype: Joi.number().min(1).required(),
  //         code: Joi.string().min(1).max(5).required()
  //       });
  //       if (data.itucode == "886") data.itucode = "00886";
  //       if (data.itucode == "852") data.itucode = "00852";
  //       if (data.itucode == "853") data.itucode = "00853";
  //       return util.schemaValidator(schema, data).then((res) => {
  //         if (res) {
  //           log.fatal("fastlogin", data);
  //           return Promise.reject([4000, res, {}]);
  //         }
  //         else return res;
  //       });
  //     })