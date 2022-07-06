class ElectricalThing {
    constructor(powerCount) {
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
}

class TableLamp extends ElectricalThing {
    constructor(powerCount) {
        super(powerCount);
        this.material = "plastic";
        this.usingTime = 2;
        this.getMaterial = function() {
            console.log(`material is ${this.material}`);
        };
    }
}

const tableLamp = new TableLamp(50);
tableLamp.socketIn();
tableLamp.getMaterial();

class Computer extends ElectricalThing {
    constructor(powerCount) {
        super(powerCount);
        this.weight = 10;
        this.card = "GTX 1070";
        this.getCard = function() {
            console.log(`video card is ${this.card}`);
        };
    }
}

const computer = new Computer(100);
computer.socketOut();
computer.getCard();