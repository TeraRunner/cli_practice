// Variable creation without assignment
let firstName: string;
let cashBalance: number;
let isMarried: boolean;
let basket: string[]; //alternative: let basket: Array<string>;
let police: {
  name: string;
  position: number;
};
let trousersDimensions: [number, string]; //Tuple

// Next time: -ask about Record<>, -ask why police cannot

//Variable creation with assignment and type inference
let secondName = "Paco";
let cashOvedraft = 700;
let isDivorced = true;
let anotherBasket = ["Pera", "Naranja"];
let anotherPolice = {
  name: "Antonio",
  position: 7,
};
let jeansDimensions: [number, string] = [32, "long"];

//Const creation with assignment and type inference
const middleName = "Francisco";
const cashAllowance = 1600;
const hasKids = true;
const otherBasket = ["Banana", "Platano"];
const otherPolice = {
  name: "Gary",
  position: 1,
};
const shortsDimensions = [32, "long"] as [number, string];

//Below is for removing errors only
if (Math.random() > 0.5) {
  firstName = "Lucia";
  cashBalance = 100;
  isMarried = true;
  basket = ["Docenas", "Centenas"];
  police = {
    name: "Ruben",
    position: 20,
  };
  trousersDimensions = [34, "long"];
  secondName = "Luis";
  cashOvedraft = 9585;
  isDivorced = true;
  anotherBasket = ["E.T.", "Superdetective en Hollywood"];
  anotherPolice = {
    name: "Tania",
    position: 21,
  };
  jeansDimensions = [40, "fit"];
} else {
  firstName = "Yaira";
  cashBalance = 520;
  isMarried = false;
  basket = ["Millares", "Millones"];
  police = {
    name: "Paloma",
    position: 13,
  };
  trousersDimensions = [36, "slim"];
}

function getValues(
  name: string,
  cashBalance: number,
  isMarried: boolean,
  basket: string[],
  secondName: string,
  cashOverdraft: number,
  isDivorced: boolean,
  anotherBasket: string[],
) {
  return {
    nameUpdated: `${name} Paquito`,
    cashBalanceUpdated: cashBalance + 1200,
    isMarriedUpdated: isMarried || false,
    basketUpdated: [...basket, "Manzanas"],
    secondNameUpdated: `${secondName} Pacote`,
    cashOvedraftUpdated: cashOverdraft + 1300,
    isDivorcedUpdated: isDivorced && true,
    anotherBasketUpdated: anotherBasket.concat("Shark"),
  };
}

const {
  nameUpdated,
  cashBalanceUpdated,
  isMarriedUpdated,
  basketUpdated,
  secondNameUpdated,
  cashOvedraftUpdated,
  isDivorcedUpdated,
  anotherBasketUpdated,
} = getValues(
  firstName,
  cashBalance,
  isMarried,
  basket,
  secondName,
  cashOvedraft,
  isDivorced,
  anotherBasket,
);

console.log({
  nameUpdated,
  cashBalanceUpdated,
  isMarriedUpdated,
  basketUpdated,
  police,
  trousersDimensions,
  secondNameUpdated,
  cashOvedraftUpdated,
  isDivorcedUpdated,
  anotherBasketUpdated,
  anotherPolice,
  jeansDimensions,
  middleName,
  cashAllowance,
  hasKids,
  otherBasket,
  otherPolice,
  shortsDimensions,
});
