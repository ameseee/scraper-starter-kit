const express = require('express');
const app = express();
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
//run npm start or nodemon (if you have nodemon installed globally)
// to run the app locally

//this sets the post at 3001 - go to localhost:3001 in your browser to see app
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Cody\'s Live Rides';

let codyRides;

// at localhost:3001/, you should see the text in this response
app.get('/', (request, response) => {
  response.send('Let it go, Elsa!');
});

// this is our scraper function. You can name it whatever you want!
function findCodyRides() {
  return nightmare
    .goto(/* URL you want to visit, in quotes*/)
    .wait(/* how long should the bot wait until starting to scrape?*/)
    .evaluate(function() {
      //give instructions about what to scrape
      // if you used querySelectorAll, convert to JS Array!!!

      //clean data

      // don't forget to RETURN final piece of data
    })
    .end()
    .then(function(rides) {
      //return value that came through then
    })
    .catch(function(error) {
      console.error('Search failed:', error);
    });
}

// the first argument in app.get is the URI, where you go in browser to get this response
app.get('/cody-rides', async (request, response) => {
  try {
    // the function called after wait should match scraper function name!
    var rides = await findCodyRides();
    return response.json(rides);
  } catch(err) {
    console.log(err);
  }
});

// This tells our app to listen to the port and the console log will appear in
//terminal. Any errors will appear there, too. So if something isn't working,
//checking that for errors is a great place to start.
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
