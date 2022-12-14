import { DefaultUser, UserProperties } from "./interfaces/user.ts";

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
    const userPrompt = prompt("Which data do you want to retrieve?");
    const answer = (typeof userPrompt !== "string") ? dataQuery() : userPrompt;
    return answer;
  }
  const key = dataQuery();
  function findByKey(
    user: DefaultUser | Record<string, UserProperties>,
    key: string,
  ): void {
    for (const value in user) {
      if (value === key) {
        console.log("line 42 found it ->", value, key, user[key]);
      } else if (typeof user[value] === "object") {
        findByKey(user[value] as Record<string, UserProperties>, key);
      }
    }
  }
  findByKey(user, key);
}

const [firstUser] = randomUser;
randomUser && filteringUserData(firstUser);
