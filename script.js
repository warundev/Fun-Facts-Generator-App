const facts = [
    "I can solve a Rubik's cube in under a minute!",
    "I have visited 10 countries.",
    "I love hiking and have climbed 5 mountains."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
});
