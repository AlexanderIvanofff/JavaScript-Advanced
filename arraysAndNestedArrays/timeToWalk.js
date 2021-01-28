// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 
// 'hours:minutes:seconds'.



function solve(steps, meters, speed) {
    let distanceInMeters = meters * steps;
    let speedForMeterInSec = speed / 3.6;
    
    let rest = Math.floor(distanceInMeters / 500);
    let time = distanceInMeters / speedForMeterInSec  + rest * 60

    let timeInHours = Math.floor( time / 3600);
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.ceil(time % 60);
    
    console.log( `${timeInHours < 10 ? 0 : ""}${timeInHours}:${timeInMin < 10 ? 0: ""}${timeInMin}:${timeInSec < 10 ? 0 : ""}${timeInSec}`)
    

}

solve(2564, 0.70, 5.5)