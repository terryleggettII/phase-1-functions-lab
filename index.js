// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation) {
    const locationHQ = 42
    return Math.abs(pickuplocation - locationHQ)
}

function distanceFromHqInFeet(pickuplocation) {
    const feet = (distanceFromHqInBlocks(pickuplocation)) * 264;
    return feet
}

function distanceTravelledInFeet(start, destination) {
    const feet = Math.abs(destination - start)
    return feet * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0
    if (distance <= 400) {
        fare = 0
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        fare = 25
    } else if (distance >= 2500) {
        return 'cannot travel that far'
    }
    return fare
}