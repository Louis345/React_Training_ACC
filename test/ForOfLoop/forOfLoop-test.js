var sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

const path = require("path");
const fs = require("fs");

const people = require("../../excercises/ForOfLoop/people.json");
// console.log("people", people);

const { createCsvString } = require("../../excercises/ForOfLoop/forOfLoop.js");

describe("forOfLoop.js ", () => {
  it("testing createCsvString", () => {
    const result = createCsvString(people);
    expect(result).to.equal(
      '"Name","Gender","Location","DOB"\n"Georgia Wagner","female","Skookumchuck, VA","1977-02-26"\n"Meredith Holt","female","Coltman, WV","1957-09-22"\n"Cora Bradley","female","Fairland, GA","1995-07-19"\n"Carol Scott","female","Two Brooks, WI","1973-08-17"\n"Vincent Silva","male","Brookhaven, DC","1959-07-30"\n"Clifton Armstrong","male","Cimarron, WA","1971-10-08"\n"Deanna Stanley","female","Morgan Mill, OK","1971-04-20"\n"Sidney Walker","male","Scottsville, KS","1987-01-05"\n"Guillermo Gross","male","Del Rey Oaks, RI","1998-05-31"\n"Daniel Steele","male","Martins Corner, TX","1963-07-09"\n"Brett Jimenez","male","East Waterford, ME","1958-05-06"\n'
    );
    const outputPath = path.resolve(
      __dirname,
      "../../excercises/ForOfLoop/output.csv"
    );
    fs.writeFile(outputPath, result, err => {
      if (err) console.log("Could not write file to", outputPath);
    });
  });
});
