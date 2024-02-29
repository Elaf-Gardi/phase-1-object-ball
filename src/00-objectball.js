function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

console.log(gameObject())


function numPointsScored (playerName){
    let object = gameObject()

    if(object.home.players.hasOwnProperty(playerName)){
        return object.home.players[playerName].points
    }
    else if(object.away.players.hasOwnProperty(playerName)){
        return object.away.players[playerName].points
    }
    else {
        return `player doesn't exist!!!`
    }

}
console.log('Player Points')
console.log(numPointsScored('Jason Terry'))
console.log(numPointsScored('Bismak Biyombo'))
console.log(numPointsScored('ELaf'))


function shoeSize(playerName){
    let object = gameObject()

    if(object.home.players.hasOwnProperty(playerName)){
        return object.home.players[playerName].shoe
    }
    else if(object.away.players.hasOwnProperty(playerName)){
        return object.away.players[playerName].shoe
    }
    else {
        return `player doesn't exist!!!`
    }
}

console.log('Player ShoeSize')
console.log(shoeSize('Jason Terry'))
console.log(shoeSize('Bismak Biyombo'))
console.log(shoeSize('ELaf'))


function teamColors(teamName){
    let object = gameObject()
    
    if(object.home.teamName === teamName){
        return object.home.colors
    }
    else if(object.away.teamName === teamName){
        return object.away.colors
    }
    else{
        return `Team doesn't exist!!!`
    }
}
console.log('Teams Colors')
console.log(teamColors('Brooklyn Nets'))
console.log(teamColors('Charlotte Hornets'))
console.log(teamColors('ELaf'))

function teamNames(){
    let object = gameObject()
    let names = []

    for(let key in object){
        if(object.hasOwnProperty(key)){
            names.push(object[key].teamName)
        }
    }
    return names
}

console.log('Team Names')
console.log(teamNames())


function playerNumbers(teamName){
    let object = gameObject()
    let numbers = []

    if(object.home.teamName === teamName){
        for(let player in object.home.players){
            numbers.push(object.home.players[player].number)
        }
    }
    else if(object.away.teamName === teamName){
        for(let player in object.away.players){
            numbers.push(object.away.players[player].number)
        }
    }
    else {
        return `Team doesn't exist!!!`
    }
    return numbers
}
console.log('Player Numbers')
console.log(playerNumbers('Brooklyn Nets'))
console.log(playerNumbers('Charlotte Hornets'))
console.log(playerNumbers('Elaf'))


function playerStats(playerName){
    let object = gameObject()

    if(object.home.players.hasOwnProperty(playerName)){
        return object.home.players[playerName]
    }
    if(object.away.players.hasOwnProperty(playerName)){
        return object.away.players[playerName]
    }
    else{
        return `Player doesn't exist!!!`
    }
}

console.log('Player Stats')
console.log(playerStats("Alan Anderson"))


function bigShoeRebounds() {
    let object = gameObject()
    let largestShoeSize = 0
    let playerWithLargestShoe

    for(let player in object.home.players){
        if(object.home.players[player].shoe > largestShoeSize){
            largestShoeSize = object.home.players[player].shoe
            playerWithLargestShoe = object.home.players[player]
        }
    }

    for(let player in object.away.players){
        if(object.away.players[player].shoe > largestShoeSize){
            largestShoeSize = object.away.players[player].shoe
            playerWithLargestShoe = object.away.players[player]
        }
    }

    return playerWithLargestShoe.rebounds
}
console.log('Rebounds')
console.log(bigShoeRebounds())


function mostPointsScored(){
    let object = gameObject()
    let higherScore = 0
    let playerWithHighestPoints

    for(let player in object.home.players){
        if(object.home.players[player].points > higherScore){
            higherScore = object.home.players[player].points
            playerWithHighestPoints = object.home.players[player]
        }
    }

    for(let player in object.away.players){
        if(object.away.players[player].points > higherScore){
            higherScore = object.away.players[player].points
            playerWithHighestPoints = object.away.players[player]
        }
    }

    return playerWithHighestPoints.points
}

console.log('Highest Points')
console.log(mostPointsScored())


function winningTeam(){
    let object = gameObject()
    let team1 = 0
    let team2 = 0 

    for(let player in object.home.players){
        team1 += object.home.players[player].points
    }

    for(let player in object.away.players){
        team2 += object.away.players[player].points
    }
    if(team1 > team2){
        return `Winning team is "${object.home.teamName}"`
    } else if(team2 > team1){
        return `Winning team is "${object.away.teamName}"`
    }
    else{
        return `it's a tie !!!`
    }
}

console.log('Winning Team:')
console.log(winningTeam())


function playerWithLongestName() {
    let object = gameObject()
    let longestName = ''
    let playerWithLongestName

    for (let player in object.home.players) {
        if (player.length > longestName.length) {
            longestName = player
            playerWithLongestName = player
        }
    }

    for (let player in object.away.players) {
        if (player.length > longestName.length) {
            longestName = player
            playerWithLongestName = player
        }
    }
    return playerWithLongestName
}

console.log('Player with Longest Name:')
console.log(playerWithLongestName())
