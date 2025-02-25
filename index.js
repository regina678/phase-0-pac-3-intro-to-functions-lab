// Function to return string in uppercase
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function to return string in lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function to log string in uppercase
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function to log string in lowercase
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function to return specific responses based on input
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Export the functions so tests can access them
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate,
  };
  