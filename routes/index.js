const express = require('express');
var router = express.Router();
var AuthController = require('../src/controllers/auth/auth.controller');
var GroupController = require('../src/controllers/group/group.controller');

var RestaurantController = require('../src/controllers/restaurant/restaurant.controller')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

router.post('/signup', AuthController.auth);
router.post('/login', AuthController.login);
router.post(`/verify/:token`, AuthController.verify);

router.post(`/get-restaurant-list-api`, RestaurantController.getRestaurantListFromAPI);

// router.post(`/get-restaurant-list-api`, RestaurantController.getRestaurantList);

router.post('/createGroup', GroupController.createGroup); //custom group
router.post('/createRandomGroup', GroupController.createRandomGroup);
router.post('/joinGroup', GroupController.joinGroup);
router.post('/joinRandomGroup', GroupController.joinRandomGroup);
router.get('/getGroupList', GroupController.getGroupList);

module.exports = router;