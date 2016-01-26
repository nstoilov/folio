var quotesArray = [
  '“Today you are You, that is truer than true. There is no one alive who is Youer than You.”<b> ― Dr. Seuss</b>',
  '“Believe only half of what you see and nothing that you hear.”<b> ― Edgar Allan Poe</b>',
  '“Lord, what fools these mortals be!” <b> ― William Shakespeare</b>',
  '“You are a manipulator. \n I like to think of myself more as an outcome engineer.” <b> ― J.R. Ward</b>',
  '“The world is a tragedy to those who feel, but a comedy to those who think.” <b> ― Horace Walpole</b>',
  '"You know the world is going crazy when the best rapper is a white guy, the best golfer is a black guy, the tallest guy in the NBA is Chinese, the Swiss hold the America\'s Cup, France is accusing the U.S. of arrogance, Germany doesn\'t want to go to war, and the three most powerful men in America are named "Bush", "Dick", and "Colin." Need I say more?" <b> ― Chris Rock</b>'];

function generate() {
  var quote = quotesArray[Math.floor(Math.random()*quotesArray.length)];
  document.getElementById("paragraph").innerHTML = quote;

}
