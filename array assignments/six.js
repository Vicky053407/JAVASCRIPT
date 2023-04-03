//create array of object items//

let players={
    player1:{"id":"101", "name":"Virat", "run":"85", "ball":"45"},
    player2:{"id":"102", "name":"Rohit", "run":"0", "ball":"26"},
    player3:{"id":"103", "name":"Dhoni", "run":"112", "ball":"57"},
    player4:{"id":"104", "name":"Jadeja", "run":"96", "ball":"86"},
}


const arrayofplayerDetails =object.values(players).map(key => players[key])
console.log(arrayofplayerDetails);