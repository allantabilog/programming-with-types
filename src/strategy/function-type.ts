import { Car } from "./class";

// function type
type WashingStrategy = (car: Car) => void;

function standardWash(car: Car): void {
  // standard wash
}

function premiumWash(car: Car): void {
  // premium wash
}

class FunctionalCarWash {
  service(car: Car, premium: boolean) {
    let washingStrategy: WashingStrategy;

    if (premium) {
      // we can do the assignments below
      // on account of the structural nature of TS type system
      // i.e. the LHS and RHS both have the same structure
      // functions from car to void
      washingStrategy = premiumWash;
    } else {
      washingStrategy = standardWash;
    }

    washingStrategy(car);
  }
}
