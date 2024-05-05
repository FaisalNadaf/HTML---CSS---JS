// const users = [
//   { firstName: "Olivia", lastName: "Jones", age: 47 },
//   { firstName: "John", lastName: "Jones", age: 63 },
//   { firstName: "Olivia", lastName: "Martinez", age: 64 },
//   { firstName: "Sophia", lastName: "Rodriguez", age: 24 },
//   { firstName: "James", lastName: "Williams", age: 29 },
//   { firstName: "Emma", lastName: "Garcia", age: 18 },
//   { firstName: "Michael", lastName: "Johnson", age: 52 },
//   { firstName: "Emma", lastName: "Davis", age: 61 },
//   { firstName: "William", lastName: "Smith", age: 87 },
//   { firstName: "John", lastName: "Garcia", age: 40 },
//   { firstName: "Alexander", lastName: "Garcia", age: 51 },
//   { firstName: "Sophia", lastName: "Jones", age: 27 },
//   { firstName: "Emma", lastName: "Johnson", age: 53 },
//   { firstName: "William", lastName: "Smith", age: 32 },
//   { firstName: "Olivia", lastName: "Johnson", age: 32 },
//   { firstName: "Olivia", lastName: "Brown", age: 23 },
//   { firstName: "John", lastName: "Davis", age: 67 },
//   { firstName: "John", lastName: "Johnson", age: 47 },
//   { firstName: "William", lastName: "Garcia", age: 70 },
//   { firstName: "Alexander", lastName: "Rodriguez", age: 69 },
//   { firstName: "Isabella", lastName: "Miller", age: 59 },
//   { firstName: "Sophia", lastName: "Brown", age: 36 },
//   { firstName: "Michael", lastName: "Johnson", age: 53 },
//   { firstName: "James", lastName: "Smith", age: 74 },
//   { firstName: "Isabella", lastName: "Brown", age: 70 },
//   { firstName: "Olivia", lastName: "Brown", age: 85 },
//   { firstName: "Ava", lastName: "Smith", age: 34 },
//   { firstName: "James", lastName: "Jones", age: 26 },
//   { firstName: "Isabella", lastName: "Brown", age: 85 },
//   { firstName: "Emma", lastName: "Brown", age: 71 },
//   { firstName: "Sophia", lastName: "Rodriguez", age: 45 },
//   { firstName: "Alexander", lastName: "Garcia", age: 39 },
//   { firstName: "Isabella", lastName: "Martinez", age: 62 },
//   { firstName: "Alexander", lastName: "Jones", age: 28 },
//   { firstName: "John", lastName: "Williams", age: 50 },
//   { firstName: "Alexander", lastName: "Martinez", age: 46 },
//   { firstName: "James", lastName: "Miller", age: 34 },
//   { firstName: "Michael", lastName: "Garcia", age: 86 },
//   { firstName: "Sophia", lastName: "Miller", age: 77 },
//   { firstName: "Sophia", lastName: "Davis", age: 55 },
//   { firstName: "Michael", lastName: "Garcia", age: 73 },
//   { firstName: "Sophia", lastName: "Miller", age: 88 },
//   { firstName: "Sophia", lastName: "Brown", age: 59 },
//   { firstName: "Isabella", lastName: "Johnson", age: 40 },
//   { firstName: "Emma", lastName: "Rodriguez", age: 78 },
//   { firstName: "John", lastName: "Rodriguez", age: 82 },
//   { firstName: "Sophia", lastName: "Miller", age: 52 },
//   { firstName: "Ava", lastName: "Johnson", age: 27 },
//   { firstName: "Alexander", lastName: "Martinez", age: 86 },
//   { firstName: "Emma", lastName: "Brown", age: 84 },
//   { firstName: "Emma", lastName: "Garcia", age: 21 },
//   { firstName: "William", lastName: "Rodriguez", age: 39 },
//   { firstName: "James", lastName: "Williams", age: 27 },
//   { firstName: "Olivia", lastName: "Rodriguez", age: 72 },
//   { firstName: "James", lastName: "Martinez", age: 74 },
//   { firstName: "Ava", lastName: "Brown", age: 41 },
//   { firstName: "Olivia", lastName: "Jones", age: 18 },
//   { firstName: "John", lastName: "Miller", age: 69 },
//   { firstName: "Emma", lastName: "Miller", age: 61 },
//   { firstName: "Michael", lastName: "Martinez", age: 23 },
//   { firstName: "Olivia", lastName: "Johnson", age: 40 },
//   { firstName: "Sophia", lastName: "Martinez", age: 21 },
//   { firstName: "Isabella", lastName: "Rodriguez", age: 68 },
//   { firstName: "Ava", lastName: "Jones", age: 30 },
//   { firstName: "William", lastName: "Smith", age: 79 },
//   { firstName: "John", lastName: "Martinez", age: 53 },
//   { firstName: "Sophia", lastName: "Brown", age: 19 },
//   { firstName: "Sophia", lastName: "Johnson", age: 39 },
//   { firstName: "Isabella", lastName: "Garcia", age: 73 },
//   { firstName: "Emma", lastName: "Johnson", age: 66 },
//   { firstName: "Sophia", lastName: "Rodriguez", age: 21 },
//   { firstName: "William", lastName: "Martinez", age: 71 },
//   { firstName: "James", lastName: "Miller", age: 53 },
//   { firstName: "Michael", lastName: "Smith", age: 82 },
//   { firstName: "Ava", lastName: "Garcia", age: 22 },
//   { firstName: "Ava", lastName: "Smith", age: 19 },
//   { firstName: "Michael", lastName: "Davis", age: 63 },
//   { firstName: "Emma", lastName: "Martinez", age: 81 },
//   { firstName: "William", lastName: "Martinez", age: 63 },
//   { firstName: "Alexander", lastName: "Brown", age: 46 },
//   { firstName: "Emma", lastName: "Johnson", age: 89 },
//   { firstName: "Alexander", lastName: "Jones", age: 59 },
//   { firstName: "James", lastName: "Garcia", age: 64 },
//   { firstName: "John", lastName: "Johnson", age: 55 },
//   { firstName: "Alexander", lastName: "Davis", age: 61 },
//   { firstName: "William", lastName: "Jones", age: 89 },
//   { firstName: "Olivia", lastName: "Garcia", age: 47 },
//   { firstName: "Michael", lastName: "Martinez", age: 70 },
//   { firstName: "Isabella", lastName: "Johnson", age: 48 },
//   { firstName: "Michael", lastName: "Brown", age: 74 },
//   { firstName: "John", lastName: "Martinez", age: 57 },
//   { firstName: "William", lastName: "Miller", age: 35 },
//   { firstName: "Olivia", lastName: "Smith", age: 26 },
//   { firstName: "Ava", lastName: "Davis", age: 53 },
//   { firstName: "Isabella", lastName: "Brown", age: 22 },
//   { firstName: "John", lastName: "Williams", age: 87 },
//   { firstName: "Olivia", lastName: "Martinez", age: 58 },
//   { firstName: "Michael", lastName: "Garcia", age: 74 },
//   { firstName: "Emma", lastName: "Miller", age: 32 },
//   { firstName: "James", lastName: "Williams", age: 75 },
// ];
// const numbers = [
//   8, 8, 3, 1, 9, 6, 4, 5, 8, 9, 9, 3, 8, 8, 0, 5, 3, 5, 1, 9, 3, 6, 3, 0, 5, 2,
//   2, 1, 7, 3, 7, 4, 0, 8, 8, 5, 3, 0, 9, 0, 6, 2, 2, 6, 3, 5, 7, 3, 5, 8, 8, 0,
//   3, 1, 7, 5, 5, 1, 4, 7, 4, 3, 9, 8, 7, 6, 4, 6, 1, 7, 9, 2, 7, 3, 3, 9, 9, 9,
//   8, 4, 9, 0, 3, 7, 8, 6, 6, 3, 0, 0, 1, 7, 1, 7, 0, 9, 7, 6, 8, 7,
// ];

// ---------------------------------------------------------------------------map fn

// const output = users.map((x) => x.firstName + " " + x.lastName);

// -------------------------------------------------------------------------filter fn

// const output = users.filter((x) => {
//   return  x.age < 50;
// });

// ---------------------------------------------------------------chain map and filter fn

// const output = users
//   .filter((x) => {
//     return x.age < 30;
//   })
//   .map((x) => x.firstName);

// -------------------------------------------------------------------------reduce fn
// const output = numbers.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// const output = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// console.log(output);
