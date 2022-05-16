// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [{
        id: "1",
        name: "Sherlock",
        score: 90
    },
    {
        id: "2",
        name: "Genta",
        score: 75
    },
    {
        id: "3",
        name: "Ai",
        score: 80
    },
    {
        id: "4",
        name: "Budi",
        score: 85
    }
]

function result(students) {
    // Your Code Here
    let average = 0;
    const scores = [];
    var names = students.map(function(i) {
        let scores = i.score;
        scores.push(scores);
    });

    //for sum
    for (let i = 0; i < scores.length; i++) {
        average += scores[i] / scores.length;
    }

    var result = students.filter((user) => user.score > average);
    return result;
}
console.log(result(students));