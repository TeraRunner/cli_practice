import { User } from "./interfaces/user.ts";

import randomUser from "./randomUser.json" assert { type: "json" };
// Typescript and Deno Basics

// API chosen => https://randomuser.me/api/

//Fetch data
const jsonResponse = await fetch("https://randomuser.me/api/");
const jsonData = await jsonResponse.json();

//Write to JSON file
Deno.writeTextFileSync(
  "./randomUser.json",
  JSON.stringify(jsonData.results),
);

//Read JSON file and output data to console
console.log(randomUser);

//Use map & filter to show specific data
//Use command line flags to change filters
function filteringUserData(
  user: User,
): string | number | {
  [key: string]: string | number | { [key: string]: string | number };
} {
  function askingData(): string {
    const answer = prompt(
      "Which data do you want to retrieve?",
    );
    return (typeof answer !== "string") ? askingData() : answer;
  }

  // const filteredUser = user.map((user) => user[askingData()]);
  const filteredUser = user.map((user) => user[askingData()]);
  console.log(filteredUser);
  return typeof (filteredUser);
}

filteringUserData(randomUser);
