class PaymentGateway {
    pay(amount) {
        this.#validateCard();
        this.#contactBank();
        this.#processTransaction();

        console.log(`Payment of ₹${amount} successful`);
    }

    #validateCard() {
        console.log("Validating card...");
    }

    #contactBank() {
        console.log("Contacting bank...");
    }

    #processTransaction() {
        console.log("Processing transaction...");
    }
}

const payment = new PaymentGateway();

payment.pay(5000);