export = {};
const userController = require('../controllers/userController');
const sessionController = require('./sessionController');
const userRouter = express.router();

// set cookie -> create user -> start session -> set SSID cookie
userRouter.post('/createUser', sessionController.setCookie, userRouter.createUser, sessionController.startSession, sessionController.setSSIDCookie, (req, res) => {

})

// set cookie -> check if logged In -> verify user (if not loggedin) -> start session (or renew session) - set (or renew) SSID cookie
userRouter.get('/verifyUser', sessionController.setCookie, sessionController.loggedIn, userRouter.verifyUser, sessionController.startSession, sessionController.setSSIDCookie,  (req, res) => {
  
})

// verify user -> update user password
userRouter.get('/updatePassword', userRouter.verifyUSer, userRouter.updateUserPassword, (req, res) => {
  
})

// verify user -> delete user
userRouter.delete('/deleteUser', userRouter.verifyUser, userRouter.deleteUser, (req, res) => {
  
})

module.exports = userRouter;