// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//TEST:
    //describes "shuffleArray"
    //it returns an array with its first index removed and rest of the content shuffled
    //expect colors1 .toContain -->  "yellow", "blue", "pink", "green"
    //expect colors2 .toContain -->  "saffron", "aquamarine", "periwinkle", "indigo", "ochre"

// describe("shuffleArray", () => {
//     it("returns an array with its first index removed and rest of the content shuffled", () => {
//     expect(shuffleArray(colors1)).toContain("yellow", "blue", "pink", "green")
//     expect(shuffleArray(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
//     })
// })
// b) Create the function that makes the test pass.
//Declare a function- shuffleArray
    //Parameter- array
    //Declare a new variable - newArray, with mutator method .slice()
    //Return newArray with mutator methods .sort().reverse()
    //Inputs & outputs: ["purple", "blue", "green", "yellow", "pink"] --> ["yellow", "pink", "green", "blue"]
    //      ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]--> ["saffron", "periwinkle", "ochre", "indigo", "aquamarine"]

    // const shuffleArray = (array) => {
    //     let newArray = array.slice(1,array.length)    
    //     return newArray.sort().reverse()
    //  }


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//TEST:
//describes "minMaxNum"
    //it returns an array of the minimum and maximum numbers sorted least to greatest
    //expect nums1 --> [-8, 90]
    //expect nums2 --> [5, 109]

// describe("minMaxNum", () => {
//     it("returns an array of the minimum and maximum numbers sorted least to greatest", () => {
//     expect(minMaxNum(nums1)).toEqual([-8, 90])
//     expect(minMaxNum(nums2)).toEqual([5, 109])
//     })
// })

// b) Create the function that makes the test pass.
//Declare a function - minMaxNum
    //Parameter - array
    //Use .sort() to sort numbers least to greatest
    //
    //Inputs & outputs: [3, 56, 90, -8, 0, 23, 6] --> [-8, 90]
    //                  [109, 5, 9, 67, 8, 24] --> [5, 109]

    // const minMaxNum = (array) => {
    //     let newNumArray = array.sort((a,b) => a-b)
    //     return newNumArray.filter ? 
    // }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//TEST:
    //describes "singleArray"
    //it takes two arrays and returns one array with no duplicate values
    //expect testArray1, testArray2 --> [3, 7, 10, 5, 4, 8, 2, 1]

// describe("singleArray", () => {
//     it("takes two arrays and returns one array with no duplicate values", () => {
//         expect(singleArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//     })
// })
// b) Create the function that makes the test pass.
//PROCESS:
//Declare a function- singleArray
    //Parameter- (array1, arrray2)
    //declare a new variable named newArray and .concat both arrays
    //return newArray.filter passing in value and index
    //return newArray.indexof value === index
    //Inputs & outputs: [3, 7, 10, 5, 4, 3, 3], [7, 8, 2, 3, 1, 5, 4] --> [3, 7, 10, 5, 4, 8, 2, 1]

    // const singleArray = (array1, array2) => {
    //     let newArray = array1.concat(array2)
    //     return newArray.filter((value, index) => {
    //         return newArray.indexOf(value) === index;
    //     })
    // }
  