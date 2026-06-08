class Notification {
    send() {
        console.log("Sending notification...");
    }
}

class EmailNotification extends Notification {
    send() {
        console.log("📧 Sending Email");
    }
}

class SMSNotification extends Notification {
    send() {
        console.log("📱 Sending SMS");
    }
}

class PushNotification extends Notification {
    send() {
        console.log("🔔 Sending Push Notification");
    }
}

let email = new SMSNotification();
email.send();