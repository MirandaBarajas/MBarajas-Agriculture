// temperature, rainfall, july1 august2 september3, cost of watering, cost of pesticide, pests, price of crops, $100 per acre
// Goal: How much money did the farmer make?
let profit = 100000;
let cropPercentage = 100;
let julyTemp = 90;
let maxGrowingTemp = 95;
let augustTemp = 105;
let septemberTemp = 97;
let minimumRain = 5;
let julyRain = 3;
let augustRain = 25;
let septemberRain = 2;
let wateringTemperature = 98;

let heatDamage = 7;
let droughtDamage = 8;

if (julyTemp > maxGrowingTemp) {
    cropPercentage = cropPercentage - heatDamage;
} 
if (augustTemp > maxGrowingTemp) {
    cropPercentage = cropPercentage - heatDamage;
} 

if (septemberTemp > maxGrowingTemp) {
    cropPercentage = cropPercentage - heatDamage;
} 

if (julyRain < minimumRain) {
    cropPercentage = cropPercentage - droughtDamage;
} 

if (augustRain < minimumRain) {
    cropPercentage = cropPercentage - droughtDamage;
} 

if (septemberRain < minimumRain) {
    cropPercentage = cropPercentage - droughtDamage;
} 


let monthWater = 1000; //dollars

if (julyTemp > wateringTemperature) {
    profit = profit - monthWater;
}

if (augustTemp > wateringTemperature) {
    profit = profit - monthWater;
}
if (septemberTemp > wateringTemperature) {
    profit = profit - monthWater;
}

let costOfPesticide = 1700; //per month
let pestProblem = 5;
let julyPests = 6;
let augustPests = 2;
let septemberPests = 7;

if (julyPests > pestProblem) {
    profit = profit - costOfPesticide;
}

if (augustPests > pestProblem) {
    profit = profit - costOfPesticide;
}

if (septemberPests > pestProblem) {
    profit = profit - costOfPesticide;
}


let aprilRain = 35;
let maximumRain = 15;
let rainDamage = 3;

if (aprilRain > maximumRain) {
     cropPercentage = cropPercentage - rainDamage;
}

if (septemberRain > maximumRain) {
    cropPercentage = cropPercentage - rainDamage;
}

if (julyRain > maximumRain){
    cropPercentage = cropPercentage - rainDamage;
}

if (augustRain > maximumRain) {
    cropPercentage = cropPercentage - rainDamage;
}

//crop percentage = 64

let cropsLost = 36;
let completeSuccess = 0; //crops lost
let cropPrice = 1000;

if (cropsLost > completeSuccess) {
    profit = profit - cropsLost * cropPrice;
}

console.log(profit);