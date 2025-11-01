function myLineUp(event) {
    let status = this.status.value;
    let date = this.gameDate.value;
    let players = this.player.value;

    console.log(`Status: ${status}, Date: ${date}, Players: ${players.join(", ")}`);
    let output = document.createElement("p");
    output.textContent = `Status: ${status}, Date: ${date}, Players: ${players.join(", ")}`;
    document.body.appendChild(output);
}

document.getElementById("lineUpForm").addEventListener("submit", myLineUp);
