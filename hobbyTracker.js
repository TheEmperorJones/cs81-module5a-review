// The underpinning data for all the functions used is set up in this array.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function, totalTime, uses the array reduce method via an arrow function to sum the total minutes
// using a variable called session.
function totalTime(log) {
  // Starting with an initial value of 0, this will accumulate, taking the current value of the array
  // through and total the minutes of each entry until the array's last item is included in the sum.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This function, uniqueHobbies, uses the map method to catalog each unique hobby.
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  // The hobbies are then logged in a set of values logged to a new array.
  return [...new Set(names)];
}

// This function, longSessions, extracts via the filter method entries that exceed the minMinutes
// value (yet to be established at this point in the code).
function longSessions(log, minMinutes) {
  // Because there are multiple entries that meet this criterium, this returns an array.
  return log.filter(entry => entry.minutes > minMinutes);
}

// This function, countMood, uses the filter method to query a specifically (yet to be) named
// mood value.
function countMood(log, moodType) {
  // Because there is just one entry matching this criterium, this returns just a single value.
  return log.filter(entry => entry.mood === moodType).length;
}

// Here the functions are called:
// In this console log below, totalTime references the reduce function that effectively
// loops through and appends new values to arrive at the total minutes in the hobbyLog array.
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
// In this console log below, uniqueHobbies references the map function to list the array of unique values.
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
// In this console log below, longSessions checks against the value provided, 30, to establish a cutoff
// for the filter against the minMinutes argument.
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
// In this console log below, countMood is called wherein moodType is filtered to check for "relaxed".
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
