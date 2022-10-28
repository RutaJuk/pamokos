const budget = prompt("what was the movie budget?");
const wasExpensive = budget >= 100000000;

console.log({
    wasExpensive,
});

if (budget >= 100000000) {
    console.log("true");
} else {
    console.info("false");
}