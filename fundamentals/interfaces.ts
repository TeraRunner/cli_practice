type Car = { seats: number; colour: string };
interface CarInterface {
  seats: number;
  colour: string;
}

type AutomaticGears = number | null;

type Garage = Car[];
type CarSet = CarInterface[];

const showRoom1 = () => {
  const garage: Garage = [{
    seats: 4,
    colour: "red",
  }, {
    seats: 4,
    colour: "blue",
  }];
  const carTransporter = garage.map((x) => x);
  console.log(carTransporter);
};

const showRoom2 = () => {
  const garage: CarSet = [{
    seats: 4,
    colour: "red",
  }, {
    seats: 4,
    colour: "blue",
  }];
  const carTransporter = garage.map((x) => x);
  console.log(carTransporter);
};

showRoom1();
showRoom2();
