//CHUNKED OUT SOLUTIONS:

// goto:
//'https://members.onepeloton.com/schedule/cycling'

// wait:
// 6000

// evaluate:
// var classCards = document.querySelectorAll('li.sc-gneEKw.cuoYGB');
// var list = [].slice.call(classCards);

// var codyClasses = list.filter(function(cycleClass) {
//   var instructorText = cycleClass.firstChild.lastChild.lastChild.innerText;
//   var instructorName = instructorText.split("·")[0];
//
//   return instructorName === "CODY RIGSBY";
// });

// return codyClasses.map(function(codyClass) {
//   var description = codyClass.firstChild.lastChild.firstChild.innerText;
//   var time = codyClass.firstChild.firstChild.firstChild.innerText;
//   var day = codyClass.parentNode.parentNode.firstChild.innerText;
//
//   return {description, time, day}
// });

//then:
// return rides;


// COMPLETE SCRAPER FUNCTION:
// function findCodyRides() {
//   return nightmare
//     .goto('https://members.onepeloton.com/schedule/cycling')
//     .wait(6000)
//     .evaluate(function() {
//      // var codyClasses = list.filter(function(cycleClass) {
      //   var instructorText = cycleClass.firstChild.lastChild.lastChild.innerText;
      //   var instructorName = instructorText.split("·")[0];
      //
      //   return instructorName === "CODY RIGSBY";
      // });

      // return codyClasses.map(function(codyClass) {
      //   var description = codyClass.firstChild.lastChild.firstChild.innerText;
      //   var time = codyClass.firstChild.firstChild.firstChild.innerText;
      //   var day = codyClass.parentNode.parentNode.firstChild.innerText;
      //
      //   return {description, time, day}
      // });
//     })
//     .end()
//     .then(function(rides) {
        // return rides;
//     })
//     .catch(function(error) {
//       console.error('Search failed:', error);
//     });
// }
