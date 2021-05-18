export = {};
const db = require ('../schemas/schemaSQL');

interface listingController {}
interface getListings extends listingController {}

const listingController = {};

// Archetype controller method
listingController.getListings = (req, res, next) => {
  // create an initialStateQuery
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