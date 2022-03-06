const router = require('express').Router();
const loginService = require('../controller/login/login_service');
const notificationService = require('../controller/notification/notification_service');

// Login Service Routes
router.get('/login', loginService.login);
router.post('/register', loginService.register);
router.get('/getMembership', loginService.getMembershipWithId);
router.post('/newMembership', loginService.newMembership);

// Notification Service Routes
router.get('/getAllNotifications', notificationService.getAll);
router.post('/addNotification', notificationService.addNotification);

module.exports = router;