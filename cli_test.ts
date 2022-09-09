import { assertEquals } from "$std/testing/asserts.ts";
import { add } from "./cli.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
