export = {};
const userController = require('../controllers/userController');
const sessionController = require('./sessionController');
const userRouter = express.router();

userRouter.post('/createUser', sessionController.setCookie, userRouter.createUser, (req, res) => {

})

userRouter.delete('/deleteUser', userRouter.verifyUser, userRouter.deleteUser, (req, res) => {
  
})

userRouter.get('/verifyUser', sessionController.setCookie, sessionController.loggedIn, userRouter.verifyUser, sessionController.startSession, sessionController.setSSIDCookie,  (req, res) => {
  
})

userRouter.get('/updatePassword', sessionController.setCookie, userRouter.updateUserPassword, (req, res) => {
  
})

module.exports = userRouter;