const string = "12345";
const reversed = Array.prototype.map
  .call(string, (x) => x)
  .reverse()
  .join("");
console.log(reversed)