function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return "Invalid Input";
    }

    if (
        typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' || obj.testScore > 50 ||
        typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== 'boolean'
    ) {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}

