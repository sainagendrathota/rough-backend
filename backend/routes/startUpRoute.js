const express = require("express");
const asyncMiddleware = require('../middleware/catchAsyncErrors');
const {
createStartUp,
StartupLogin,
Startup_Dashboard,
StartupF_Dashboard,
StartupD_Dashboard,
StartupFeedback_upload,
StartupFeedback_Get
} = require("../controllers/startupController");


const router = express.Router();

// registration for StartUp
router.route("/startup-reg").post(asyncMiddleware(createStartUp)); 

//login for startup
router.route("/startup-login").post(asyncMiddleware(StartupLogin)); 

//DashBoard for Startup
router.route("/startup-dashboard").post(asyncMiddleware(Startup_Dashboard));

//dashboard for startup farmer
router.route("/startupf-dashboard").post(asyncMiddleware(StartupF_Dashboard)); 

//dashboard for startup doctor
router.route("/startupd-dashboard").post(asyncMiddleware(StartupD_Dashboard)); 

//dashboard for StartupFeedback post
router.route("/StartupFeedback-post").post(asyncMiddleware(StartupFeedback_upload));

//dashboard for StartupFeedback get
router.route("/StartupFeedback-get").post(asyncMiddleware(StartupFeedback_Get));


module.exports = router;