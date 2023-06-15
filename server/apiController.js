const fetch = require('node-fetch');
const { query, json } = require('express');
// const location = require('./locationModel');
// const url = 'https://api.yelp.com/v3/businesses/search?term=';
const url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
const apiController = {};

apiController.getFoodLocations = (req, res, next) => {
  // get user input
  const choice = req.body;
  // fetch from api
  // return fetch(`${url}+${choice}+'&latitude=40.7477463&longitude=-73.9933782'`,{
  //   headers: { Authentication: 'Bearer {GSSY0KgKl1tPxqkRaL80wnKJ_v2V0RjbXphvef2GQpnUodWprKD8lbBDqFHUc8YvhLpYpuhq4IZoy6q41Gm3ijP6Gcd4wAgmOFWk0otXO14WqZm5i00BAmyi6tqJZHYx}'}}
  //   )
    return fetch(`${url}`)
    .then(data => data.json()) // parse data
    .then(data => {
      try {
        if (!data){
          throw new Error ('No recommendations');
        }
        res.locals.locations = data;
        console.log(res.locals.locations) // save location
        return next();
      } catch (err){
        next({
          log: 'apiController',
          message: {
            err: 'apiController.getFoodLocations: ERROR: Check server logs for details'
          }
        });
      }
    });
}


module.exports = apiController;
