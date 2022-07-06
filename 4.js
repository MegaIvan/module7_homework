function ElectricalThing(powerCount) {
    this.socketIn = function() {
        this.socketState = true;
        console.log("Electrical thing in socket");
    }

    this.socketOut = function() {
        this.socketState=  false;
        console.log("Electrical thing out socket");
    }
    this.socketState = false;
    this.power = powerCount;
}

const tableLamp = new ElectricalThing(50);
tableLamp.material = "plastic";
tableLamp.usingTime = 2;
tableLamp.getMaterial = function() {
    console.log(`material is ${this.material}`);
};

tableLamp.socketIn();
tableLamp.getMaterial();

const computer = new ElectricalThing(100);
computer.weight = 10;
computer.card = "GTX 1070";
computer.getCard = function() {
    console.log(`video card is ${this.card}`);
};

computer.socketOut();
computer.getCard();

console.log(tableLamp);
console.log(computer);