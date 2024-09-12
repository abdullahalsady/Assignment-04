function waitingTime(waitingTime, serialNumber) {
    if (!Array.isArray(waitingTime) || typeof serialNumber !== 'number') {
        return "Invalid Input"; 
    }

    let totalTime = 0;  
    for (let i = 0; i < waitingTime.length; i++) {
        totalTime = totalTime + waitingTime[i];
    }

    let averageTime = totalTime / waitingTime.length;

    averageTime = Math.round(averageTime);

    let peopleLeft = serialNumber - waitingTime.length - 1;

    let totalWaitingTime = averageTime * peopleLeft;

    return totalWaitingTime;
}

