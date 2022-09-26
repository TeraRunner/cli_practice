import { DefaultUser } from "./interfaces/user.ts";

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
  user: DefaultUser,
): void {
  function dataQuery(): string {
    const answer = prompt(
      "Which data do you want to retrieve?",
    );
    return (typeof answer !== "string") ? dataQuery() : answer;
  }
  const key = dataQuery();
  const value = user[key];
  console.log(value);
}
const [firstUser] = randomUser;

randomUser && filteringUserData(firstUser);

//option to pick up the properties down, pick 1 or more properties

//ask David he would solve my challenge

//read Typescript handbook
