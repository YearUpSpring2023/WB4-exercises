"use strict";

function displayStudentInformation(student){

    let scoresCount = student.scores.length;

    let scoreStatistics = getStatistics(student.scores);
    console.log();
    console.log(`The student named ${student.name} had the following score statistics:`);
    console.log(`   Average: ${scoreStatistics.average}`);
    console.log(`       Min: ${scoreStatistics.min}`);
    console.log(`       Max: ${scoreStatistics.max}`);
    console.log(`    Median: ${scoreStatistics.median}`);
    

}

function getStatistics(numbers){
    
    numbers.sort(function(a,b){return a - b});
   
    let sum = 0;
    let count = numbers.length

     // Loop through each of the numbers that passed into the function:
    for (let i = 0; i < count; i++) {
        let num = numbers[i];
        sum += num;
    }

    let avg = sum / count;

    let median;

    // if there are an odd number of numbers:
    if(count % 2 == 1){
        let middleindex = (count - 1) / 2;
        median = numbers[middleindex];
    }
    // if there are an even number of numbers:
    else{
        let firstmiddle = (count / 2) - 1;
        let secondmiddle = (count / 2);
        median = (numbers[firstmiddle] + numbers[secondmiddle]) / 2
    }

    let min = numbers[0];
    let max = numbers[count - 1];

    let statistics = {
        average: avg,
        min: min,
        max: max,
        median: median
    }

    return statistics;
}

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

let studentCount = students.length;

// Loop through each of the students.
for (let i = 0; i < studentCount; i++) {
        displayStudentInformation(students[i]);
}

