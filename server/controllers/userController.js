const db = require ('../schemas/schemaSQL');

const userController = {};

userController.verifyUser = (req, res, next) => {
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

userController.createUser = (req, res, next) => {
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

userController.deleteUser = (req, res, next) => {
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

userController.updateUserPassword = (req, res, next) => {
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