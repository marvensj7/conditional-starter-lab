// Your Task:
// Create a program that tracks plant growth given a specific area.

// Establish Variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

// Plants Vars
const minSpacePerPlant = 0.8;
const startingPlants = 20;

// AREA / Max Capacity of the garden
const maxCapacity = area / minSpacePerPlant;

// Week Growth
let week = 3;

// Plants Weekly Double Growth
let plantCount = startingPlants * (2 ** week);

// Part 1

// check the plant count
if (plantCount > maxCapacity * 0.8) {
    console.log(`Week ${week}: ${plantCount} plants. Prune the plants.`);
} else if (plantCount >= maxCapacity * 0.5) {
    console.log(`Week ${week}: ${plantCount} plants. Monitor the plants.`);
} else {
    console.log(`Week ${week}: ${plantCount} plants. Plant more plants.`);
}

// results
// week 1 = 40 plants, plant more
// week 2 = 80 plants, prune
// week 3 = 160 plants, prune

// Part 2

// starting with 100 plants for 10 weeks
const bigStartingPlants = 100;
const bigWeek = 10;
const bigPlantCount = bigStartingPlants * (2 ** bigWeek);

// space needed for the plants
const spaceRequired = bigPlantCount * minSpacePerPlant;

// extra space needed
const additionalSpace = spaceRequired - area;

console.log(`After 10 weeks there are ${bigPlantCount} plants.`);
console.log(`Additional space needed: ${additionalSpace.toFixed(2)} square meters.`);

// new radius
const newRadius = Math.sqrt(spaceRequired / PI);
console.log(`New radius: ${newRadius.toFixed(2)} meters.`);
