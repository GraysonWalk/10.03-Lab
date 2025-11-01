function myLineUp(event) {
    let status = this.status.value;
    let date = this.gameDate.value;
    let players = [];
    
    let checkboxes = this.querySelectorAll('input[name="player"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          players.push(checkboxes[i].value);
        }
    }

    console.log(`Status: ${status}, Date: ${date}, Players: ${players.join(", ")}`);
    
    let output = document.createElement("p");
    output.textContent = `Status: ${status}, Date: ${date}, Players: ${players.join(", ")}`;
    document.body.appendChild(output);
}

document.getElementById("lineUpForm").addEventListener("submit", myLineUp);
