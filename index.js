let homeScore = 0;
let guestScore = 0;
let homeScoreStr = document.getElementById("homeScore");
let guestScoreStr = document.getElementById("guestScore");
homeScoreStr.textContent = homeScore;
guestScoreStr.textContent = guestScore;



function add1Home() {
    homeScore += 1;
    homeScoreStr.textContent = homeScore;
}

function add2Home() {
    homeScore += 2;
    homeScoreStr.textContent = homeScore;
}

function add3Home() {
    homeScore += 3;
    homeScoreStr.textContent = homeScore;
}




function add1Guest() {
    guestScore += 1;
    guestScoreStr.textContent = guestScore;
}

function add2Guest() {
    guestScore += 2;
    guestScoreStr.textContent = guestScore;
}

function add3Guest() {
    guestScore += 3;
    guestScoreStr.textContent = guestScore;
}