const users = [
    { id: '1', name: 'John Smith', age: 20 },
    { id: '2', name: 'Ann Smith', age: 24 },
    { id: '3', name: 'Tom Jones', age: 31 },
    { id: '4', name: 'Rose Peterson', age: 17 },
    { id: '5', name: 'Alex John', age: 25 },
    { id: '6', name: 'Ronald Jones', age: 63 },
    { id: '7', name: 'Elton Smith', age: 16 },
    { id: '8', name: 'Simon Peterson', age: 30 },
    { id: '9', name: 'Daniel Cane', age: 51 },
];

const userAverageAge = [20, 24, 31, 17, 25, 63, 16, 30, 51];
var sum = 0;
userAverageAge.forEach(function (num) { sum += num });
average = sum / userAverageAge.length;
console.log(average);

const userName = ['John Smith', 'Ann Smith', 'Tom Jones', 'Rose Peterson', 'Alex John', 'Ronald Jones', 'Elton Smith', 'Simon Peterson', 'Daniel Cane'];
userName.forEach(element => console.log(element))