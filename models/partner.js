const environment     = process.env.NODE_ENV || 'development';    // set environment
const configuration   = require('../../knexfile')[environment];   // pull in correct db with env configs
const database        = require('knex')(configuration);           // define database based on above
const crypto          = require('crypto')                         // built-in encryption node module

module.exports = (sequelize, DataTypes) => {
    const Partner = sequelize.define('Partner', {
      partner_name: DataTypes.STRING,
      partner_email: DataTypes.STRING,
      partner_contact: DataTypes.INTEGER,
      area_code: DataTypes.INTEGER,
      partner_website: DataTypes.STRING
    }, {});

    Partner.associate = function(models) {
      // associations can be defined here
    };
    return Partner;
  };