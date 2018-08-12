/**
 * Using at least one for ... of loop, write a CSV file string (spreadsheet file).
 * The CSV file is going to contain marketing demographics about people.
 * You will be getting the data from
 * @see excercises/ForOfLoop/people.json
 * The columns will be the persons name, gender, location and DOB.
 * @example excercises/ForOfLoop/example.csv
 * @example excercises/ForOfLoop/example.png
 * Hint: to add a new line, use "\n"
 *
 * @param {array} people an array of nested objects, where each object
 * contains information about a person.
 * @return {string} CSV string that you can open in Excel, Numbers or another spreadsheet program
 */
function createCsvString(people) {
  let names = '"Name","Gender","Location","DOB"\n';
  for (let person of people) {
    let values = [];
    for (let [key, value] of Object.entries(person)) {
      if (["name", "gender", "location", "dob"].indexOf(key) >= 0) {
        values.push(value);
      }
    }
    names += `"${values.join('","')}"\n`;
  }
  return names;
}

module.exports = {
  createCsvString
};
