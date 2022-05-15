const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
let playerImage = document.createElement("img");
document.getElementById("button").addEventListener("click", displayQuote);

let MJ = {
    name: "Michael Jordan",
    quotes: ["Charles (Barkley) thinks we're great friends... I hate that fat fuck."],
    photo: "MJ.jpeg"
};

let JRSmith = {
    name: "J.R. Smith",
    quotes: ["Nobody is drinking my Henny.", "I thought we were up?"],
    photo: "JRSmith.jpeg"
};

let PaulGeorge = {
    name: "Paul George",
    quotes: ["If you look at the box score, we won this game. (They lost)"],
    photo: "PaulGeorge.jpeg"
};

let LarryBird = {
    name: "Larry Bird",
    quotes: ["I'm gonna play this one left handed! (Scored 47 points)"],
    photo: "LarryBird.jpeg"
};

let dLo = {
    name: "D'Angelo Russel",
    quotes: ["LeBron James still gets criticism. Jesus still gets criticized."],
    photo: "Dlo.jpeg"
};

let MSA = {
    name: "Metta Sandiford-Artest",
    quotes: ["Oh road trips? I thought you said roaches. I got a lot of bad thoughts about roaches. I grew up around roaches… I grew up around roaches, and it was bad. Too many of them. Too many friends, I’ve got a lot of roach friends. They wake up in my cereal, they wake up, you know, ‘Ron what’s up, good morning’. One leg in my macaroni, the other leg in my corn. You know, they just make themselves comfortable at my home. They’re my friends. I like roaches. I mean, I don’t want to be around them, I want to leave them where they at. But yeah, I know a lot of them."],
    photo: "MSA.jpeg"
}

let players = [MJ, JRSmith, PaulGeorge, LarryBird, dLo, MSA];



function displayQuote() {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    let randomQuote = randomPlayer.quotes[Math.floor(Math.random() * randomPlayer.quotes.length)];
    playerImage.src = randomPlayer.photo;
    canvasContext.drawImage(playerImage, 0, 0, 400, 400);

    document.getElementById("nameParagraph").innerText = "-" + randomPlayer.name;
    document.getElementById("quoteParagraph").innerText = '"' + randomQuote + '"';
};