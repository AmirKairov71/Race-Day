let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
var runnerAge = 30;
if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}
if(runnerAge > 18 && registeredEarly === true){ 
  console.log(`If you are early your race starts at 9:30 am & your race number is ${raceNumber}.`);
} else if(runnerAge > 18 && registeredEarly != true){
  console.log(`You are late your race is at 11:00 am and your race number is ${raceNumber}.`)
} else if(runnerAge < 18){
  console.log('Youth registrants run at 12:30 pm(regardless of registration).');
} else{
  console.log('Please go see front desk if you are 18.');
}
