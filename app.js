// import functions and grab DOM elements
import { records } from './records-data.js';
import { simpleRender } from './utils.js';

// let state
for (let record of records) {
    const recordsDiv = document.getElementById('records');

    const recordDiv = simpleRender(record);
    recordsDiv.append(recordDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
