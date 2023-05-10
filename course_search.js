let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

let courseCount = courses.length

function findCourseByCourseId(courses, courseIdToFind){
    for( let i = 0 ; i < courseCount ; i++ ){
        if(courses[i].CourseId == courseIdToFind){
            return courses[i];
        }
    }
}

console.log(`All of my courses are listed here:`)
for (let i = 0 ; i < courseCount ; i++){
    console.log(courses[i])
}


// When does the PROG200 course start?
console.log("--------------------------------------")
let thecourse = findCourseByCourseId(courses, "PROG200");

console.log(`The courseId of PROG200 starts on ${thecourse.StartDate}` )


// What is the title of the PROJ500 course?
console.log("--------------------------------------")
thecourse = findCourseByCourseId(courses, "PROJ500");

console.log(`The courseId of PROJ500 is titled: ${thecourse.Title}` )

// What are the titles of the courses that cost $50 or less?
console.log("--------------------------------------")
let coursesThatCost50OrLess = [];

for(let i = 0 ; i < courseCount ; i++ ){
    if(courses[i].Fee <= 50){
        coursesThatCost50OrLess.push(courses[i])
    }
}

let coursesThatCost50OrLessCount = coursesThatCost50OrLess.length

console.log("Just courses that cost 50 or less")

for(let i = 0 ; i < coursesThatCost50OrLessCount ; i++ ){
    console.log(coursesThatCost50OrLess[i].Title);
}

// What classes meet in "Classroom 1"?
console.log("--------------------------------------")
let coursesThatMeetInC1 = [];

for(let i = 0 ; i < courseCount ; i++){
    if(courses[i].Location == "Classroom 1"){
        coursesThatMeetInC1.push(courses[i]);
    }
}

let coursesThatMeetInC1Count = coursesThatMeetInC1.length;
console.log("Courses that meet in Classroom 1")
for(let i = 0 ; i < coursesThatMeetInC1Count ; i++ ){
    console.log(coursesThatMeetInC1[i].Title)
}

