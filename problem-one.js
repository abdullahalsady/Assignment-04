function calculateTax(income, expense) {
    if (typeof income === 'number' && typeof expense === 'number' && income >= 0 && expense >= 0 && income >= expense) {
        const difference = income - expense;
        const tax = difference * 0.20;
        return tax;
    } else {
        return "Invalid Input";
    }
}
