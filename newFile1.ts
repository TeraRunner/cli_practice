type Safe<T> = {
  contents: T;
};
const openSafe = <T>(safe: Safe<T>) => {
  return safe.contents;
};
const moneySafe = { contents: 500 };
const moneySafeContents = openSafe(moneySafe);
const fireSafe = { contents: ["medalion", "boardgame"] };
const fireSafeContents = openSafe(fireSafe);
console.log(moneySafeContents);
console.log(fireSafeContents);

type BadSafe = {
  contents: any;
};
const openBadSafe = (safe: BadSafe) => {
  return safe.contents;
};
const moneyBadSafe = { contents: 500 };
const moneyBadSafeContents = openBadSafe(moneyBadSafe);
console.log(moneyBadSafeContents);

const useState = <T>(value: T) => {
  const setState = (value: T) => {
    return value;
  };
  return [value, setState] as [T, (value: T) => void];
};

const [state, setState] = useState(5);

const [stringState, stringSetState] = useState("Five");
