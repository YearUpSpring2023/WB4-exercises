"use strict";

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
for (let indexOfStudent = 0; indexOfStudent < studentCount; indexOfStudent++) {
    let student = students[indexOfStudent];

    let scoresCount = student.scores.length;

    let sumOfStudentScores = 0;
    let maxOfStudentScores = 0;
    let minOfStudentScores = 100;

    // Loop through each of the scores that belong to this student.
    for (let indexOfScore = 0; indexOfScore < scoresCount; indexOfScore++) {
        let studentScore = student.scores[indexOfScore];

        sumOfStudentScores += studentScore;
        if (studentScore > maxOfStudentScores) {
            maxOfStudentScores = studentScore;
        }
        if (studentScore < minOfStudentScores) {
            minOfStudentScores = studentScore;
        }

    }

    let averageScore = sumOfStudentScores / scoresCount;

    console.log(`The student named ${student.name} has an average score of ${averageScore}.`);
    console.log(`The student had a max score of ${maxOfStudentScores} and a min score of ${minOfStudentScores}.`);

}

