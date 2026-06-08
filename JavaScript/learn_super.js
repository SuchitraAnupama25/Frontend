class Developer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(`${this.name} is writing code.`);
    }
}

class SeniorDeveloper extends Developer {
    constructor(name, technology) {
        super(name);

        this.technology = technology;
    }

    code() {
        super.code(); // parent class reference

        console.log(
            `${this.name} is reviewing code ${this.technology}.`
        );
    }
}

const seniorDev = new SeniorDeveloper("Rahul", "React");
console.log(seniorDev);

seniorDev.code();