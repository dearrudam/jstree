import assert from "assert";
import { describe, it } from "mocha";
import Tree from "./mx-jstree";

const array = `
    [
        { "id": 0, "parentId": null },
        { "id": 4, "parentId": 3 },
        { "id": 1, "parentId": 0 },
        { "id": 3, "parentId": 2 },
        { "id": 2, "parentId": 0 }
    ]`;

describe(`Given a tree instance based on the array : \n ${array} \n`, function() {
  const jstree = new Tree(JSON.parse(array));

  const scenarios = [
    { givenId: 0, expectedValue: 5 },
    { givenId: 1, expectedValue: 1 },
    { givenId: 2, expectedValue: 3 },
    { givenId: 3, expectedValue: 2 },
    { givenId: 4, expectedValue: 1 }
  ];

  scenarios.forEach(scenario => {
    it(`Then, given ${
      scenario.givenId
    } as ID for the tree.count() function, then the children number should be equals to ${
      scenario.expectedValue
    }`, function() {
      assert.equal(
        jstree.count(scenario.givenId),
        scenario.expectedValue,
        `for id ${scenario.givenId} should return ${
          scenario.expectedValue
        } children`
      );
    });
  });
});
