export = {};
const db = require ('../schemas/schemaSQL');

interface userController {}
interface verifyUser extends userController {}

const userController = {};

// Archetype controller method
userController.verifyUser = (req, res, next) => {
  // create an initialStateQuery
  const userQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(userQuery, (err, result) => {
      const {rows} = result;
      res.locals.verifyUser = rows;
      return next();
    });
  } catch (err) {next(err);}
};

module.exports  = userController;