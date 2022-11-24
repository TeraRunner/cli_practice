//function that takes a string as a param, void return with void anotation
export const example0 = (value: string): void => {
  console.log(value);
};

//function that takes a string as a param, void return
export const example1 = (value: string) => {
  console.log(value);
};

//function that takes a number as a param, void return
export const example2 = (value: number) => {
  console.log(value);
};

//function that takes a boolean as a param, void return
export const example3 = (value: boolean) => {
  console.log(value);
};

//function that takes a array as a param, void return
export const example4 = (values: string[]) => {
  console.log(values);
};

//function that takes a tuple as a param, void return
export const example5 = (values: [string, number]) => {
  console.log(values);
};

//function that takes an array of tuples as a param, void return
export const example5B = (values: Array<[string, number]>) => {
  console.log(values);
};

//function that takes a function as a param, void return
export const example6 = (value: () => void) => {
  console.log(value);
};

//function that takes a object as a param, void return
export const example7 = (object: { value: string }) => {
  console.log(object);
};

//function that takes a record as a param, void return
export const example7B = (record: Record<string, string>) => {
  console.log(record);
};

//function that takes no param, void return
export const example8 = () => {
  console.log();
};

//function that takes no param, string return
export const example9 = (): string => {
  return "Paco";
};

//function that takes no param, number return
export const example10 = (): number => {
  return 11;
};

//function that takes no param, boolean return
export const example11 = (): boolean => {
  return true;
};

//function that takes no param, array return
export const example12 = (): string[] => {
  return ["Paco", "Ole"];
};

//function that takes no param, tuple return
export const example13 = (): [string, number] => {
  return ["Paco", 38];
};

//function that takes no param, array of tuples return
export const example13B = (): Array<[string, number]> => {
  return [["Paco", 38], ["Gary", 41]];
};

//function that takes no param, function return
export const example14 = (): () => void => {
  return () => {
    console.log("Paco");
  };
};

//function that takes no param, object return
export const example15 = (): { value: string } => {
  return { value: "Paco" };
};

//function that takes no param, record return
export const example15B = (): Record<string, string> => {
  return { name: "Paco" };
};

//function that takes tuples array param, record return
export const example16 = (
  values: Array<[string, number]>,
): Record<string, string> => {
  console.log(values);
  return { name: "Paco" };
};
