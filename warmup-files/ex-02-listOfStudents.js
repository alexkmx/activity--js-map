
/*
 * listOfStudents.map(...)
 *
 * (a) Map an `listOfStudents` to an array called 'studentAgesList'
 *     that contains the numbers with the values of ages
 *
 * (b) Map over `listOfStudents` to an array called 'listOfStudentsPlusEmail' and add  an 'email' property for each element
 *   - format for 'email' value is first initial + last name + '@happygroup.com'.
 *   - example: 'mhart@happygroup.com', 'dwyckoff@happygroup.com', 'lying@happygroup.com'
 *
 *   resulting array example:
 *   [
 *      {
 *        first: 'Mary',
 *        last: 'Hart',
 *        ...
 *        email: 'mhart@happygroup.com'
 *       },
 *      {
 *        first: 'Drew',
 *        last: 'Wyckoff',
 *        ...
 *        email: 'dwyckoff@happygroup.com'
 *      },
 *      ...
 *    ]
**/

var listOfStudents = [
  { first: 'Mary', last: 'Hart', gender: 'female', age: 24 },
  { first: 'Drew', last: 'Wyckoff', gender: 'male', age: 33 },
  { first: 'Andrew', last: 'Green', gender: 'male', age: 13 },
  { first: 'Cameron', last: 'Bolus', gender: 'female', age: 66 },
  { first: 'Peggy', last: 'Wood', gender: 'female', age: 8 },
  { first: 'Graham', last: 'Jones', gender: 'male', age: 40 },
  { first: 'Elliot', last: 'Corn', gender: 'male', age: 15},
  { first: 'Jane', last: 'Gooden', gender: 'female', age: 85},
  { first: 'Satoshi', last: 'Abe', gender: 'male', age: 73 },
  { first: 'Atushi', last: 'Eto', gender: 'male', age: 25 },
  { first: 'Lin', last: 'Ying', gender: 'female', age: 35 },
  { first: 'Yao', last: 'Ling', gender: 'male', age: 45 },
]


let studentAgesList = listOfStudents.map(function(ele) {
let edades = ele.age;

return edades
})

let listOfStudentsPlusEmail = listOfStudents.map(function(email) {
let firstMinus = email.first[0].toLowerCase();
let lastMinus = email.last.toLowerCase();
let eMail = firstMinus+lastMinus+'@happygroup.com';
let arrayStudents = {}
arrayStudents.first = email.first
arrayStudents.last = email.last
arrayStudents.gender = email.gender
arrayStudents.age = email.age
arrayStudents.email = eMail

// console.log(arrayStudents);
return arrayStudents
})
// console.log(listOfStudentsPlusEmail);
// listOfStudents.email = listOfStudentsPlusEmail

// console.log(listOfStudentsPlusEmail);
//--------- Tests for part (a) ---------//

// +1 Check that studentAges is NOT undefiend and is an array
console.assert(typeof studentAgesList !== 'undefined')
console.assert(Array.isArray(studentAgesList) === true)

// +2 Check that each element in listOfCarObjects is an object
if ( Array.isArray(studentAgesList) ){
  console.assert(typeof studentAgesList[0] === 'number')
  console.assert(typeof studentAgesList[1] === 'number')
}

// +3 Check that each object-element in listOfCarObjects has correct values for
//   `make` and `model` properties
if ( Array.isArray(studentAgesList) && typeof studentAgesList[0] === 'number'){
  console.assert(studentAgesList[0] === 24)
  console.assert(studentAgesList[2] === 13)
  console.assert(studentAgesList[4] === 8)
}


//--------- Tests for part (b) ---------//

// +1 Check that studentAges is NOT undefiend and is an array
console.assert(typeof studentAgesList !== 'undefined')
console.assert(Array.isArray(studentAgesList) === true)

// +2 Check that each element in listOfCarObjects is an object
if ( Array.isArray(studentAgesList) ){
  console.assert(typeof studentAgesList[0] === 'number')
  console.assert(typeof studentAgesList[1] === 'number')
}

// +3 Check that each object-element in listOfCarObjects has correct values for
//   `make` and `model` properties
if ( Array.isArray(studentAgesList) && typeof studentAgesList[0] === 'number'){
  console.assert(studentAgesList[0] === 24)
  console.assert(studentAgesList[2] === 13)
  console.assert(studentAgesList[4] === 8)
}


//--------- Tests for part (a) ---------//

// +1 Check that studentAges is NOT undefiend and is an array
console.assert(typeof studentAgesList !== 'undefined')
console.assert(Array.isArray(studentAgesList) === true)

// +2 Check that each element in studentAges is an object
if ( Array.isArray(studentAgesList) ){
  console.assert(typeof studentAgesList[0] === 'number')
  console.assert(typeof studentAgesList[1] === 'number')
}

// +3 Check that each object-element in studentAges has correct values
if ( Array.isArray(studentAgesList) && typeof studentAgesList[0] === 'number'){
  console.assert(studentAgesList[0] === 24)
  console.assert(studentAgesList[2] === 13)
  console.assert(studentAgesList[4] === 8)
  console.assert(studentAgesList[6] === 15)

}


//--------- Tests for part (b) ---------//

// +1 Check that listOfStudentsPlusEmail is NOT undefiend and is an array
console.assert(typeof listOfStudentsPlusEmail !== 'undefined')
console.assert(Array.isArray(listOfStudentsPlusEmail) === true)

// +2 Check that each element in listOfStudentsPlusEmail is an object
if ( Array.isArray(listOfStudentsPlusEmail) ){
  console.assert(typeof listOfStudentsPlusEmail[0] === 'object')
  console.assert(typeof listOfStudentsPlusEmail[1] === 'object')
}

// +3 Check that each object-element in listOfStudentsPlusEmail has includes email values for each object returned
if ( Array.isArray(listOfStudentsPlusEmail) && typeof listOfStudentsPlusEmail[0] === 'object'){

  console.assert(listOfStudentsPlusEmail[0].email === 'mhart@happygroup.com')
  console.assert(listOfStudentsPlusEmail[0].first === 'Mary')

  console.assert(listOfStudentsPlusEmail[1].email === 'dwyckoff@happygroup.com')
  console.assert(listOfStudentsPlusEmail[1].gender === 'male')

  console.assert(listOfStudentsPlusEmail[3].email === 'cbolus@happygroup.com')
  console.assert(listOfStudentsPlusEmail[3].last === 'Bolus')

  console.assert(listOfStudentsPlusEmail[4].email === 'pwood@happygroup.com')
  console.assert(listOfStudentsPlusEmail[4].age === 8)


}
