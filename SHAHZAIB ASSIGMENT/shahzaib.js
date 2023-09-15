// String length
const str = "Hello, World!";
const length = str.length;
console.log(`Length of the string: ${length}`);

// String slice()
const sliced = str.slice(0, 5); // Slices from index 0 to 4
console.log(`Slice: ${sliced}`);

// String substring()
const substring = str.substring(7, 12); // Substring from index 7 to 11
console.log(`Substring: ${substring}`);

// String substr()
const substr = str.substr(7, 5); // Substring starting from index 7 with a length of 5
console.log(`Substr: ${substr}`);

// String replace()
const replaced = str.replace("World", "Universe"); // Replace "World" with "Universe"
console.log(`Replace: ${replaced}`);

// String toUpperCase() and toLowerCase()
const upperCase = str.toUpperCase();
const lowerCase = str.toLowerCase();
console.log(`UpperCase: ${upperCase}`);
console.log(`LowerCase: ${lowerCase}`);

// String concat()
const str1 = "Hello";
const str2 = "World";
const concatenated = str1.concat(", ", str2);
console.log(`Concatenated: ${concatenated}`);

// String trim()
const stringWithSpaces = "   Trim me!   ";
const trimmed = stringWithSpaces.trim();
console.log(`Trimmed: "${trimmed}"`);

// String padStart() and padEnd()
const num = "42";
const paddedStart = num.padStart(5, "0"); // Pad with zeros at the start to make a length of 5
const paddedEnd = num.padEnd(5, "*"); // Pad with asterisks at the end to make a length of 5
console.log(`Padded Start: ${paddedStart}`);
console.log(`Padded End: ${paddedEnd}`);

// String charAt() and charCodeAt()
const charAtIndex = str.charAt(7); // Get character at index 7
const charCodeAtIndex = str.charCodeAt(7); // Get character code at index 7
console.log(`Character at Index 7: ${charAtIndex}`);
console.log(`Character Code at Index 7: ${charCodeAtIndex}`);

// String split()
const words = "Hello,World,Again";
const splitArray = words.split(","); // Split the string into an array based on ","
console.log(`Split Array: ${splitArray}`);

