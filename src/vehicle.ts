class Vehicle {
  constructor (
    public make: string,
    public model: string,
    public year: number
  ) {}

  toString () {
    return this.year + " " + this.make + " " + this.model;
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }
}

class Truck extends Vehicle {
  cargo: any;

  constructor(make: string, model: string, year: number, cargo: any) {
    super(make, model, year);
    this.cargo = cargo;
  }

  toString () {
    var description = super.toString();

    if (this.cargo) {
      description += " carrying " + this.cargo;
    }

    return description;
  }
}

var audi = new Car("Audi", "A3", 2016);
var truck = new Truck("Mack", "Titan", 2015, ["shoes", "food"]);

document.writeln(audi.toString());
document.writeln(truck.toString());
