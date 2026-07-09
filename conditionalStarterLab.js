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
