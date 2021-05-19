export = {};
const db = require ('../schemas/schemaSQL');

const listingController = {
  getListings: {},
  getListingDetail: {},
  addListing: {},
  removeListing: {}
};

listingController.getListings = (req, res, next) => {
  const listingQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(listingQuery, (err, result) => {
      const {rows} = result;
      res.locals.userListings = rows;
      return next();
    });
  } catch (err) {next(err);}
};

listingController.getListingDetail = (req, res, next) => {
  const listingQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(listingQuery, (err, result) => {
      const {rows} = result;
      res.locals.userListings = rows;
      return next();
    });
  } catch (err) {next(err);}
};

listingController.addListing = (req, res, next) => {
  const listingQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(listingQuery, (err, result) => {
      const {rows} = result;
      res.locals.userListings = rows;
      return next();
    });
  } catch (err) {next(err);}
};

listingController.removeListing = (req, res, next) => {
  const listingQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(listingQuery, (err, result) => {
      const {rows} = result;
      res.locals.userListings = rows;
      return next();
    });
  } catch (err) {next(err);}
};

module.exports  = listingController;