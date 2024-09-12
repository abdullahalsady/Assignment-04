function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }

    var parts = email.split('@');

    var username = parts[0];
    
    var domain = parts[1];
    return username + " sent you an email from " + domain;
}



