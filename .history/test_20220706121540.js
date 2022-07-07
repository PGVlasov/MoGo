let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

//let from = courses[i].prices[0];
let from = courses.map((course) => course.prices[0]);
console.log(from);

let to = courses[i].prices[1];

const sortCurses = ([from, to]) => {
  for (let i = 0; i < courses.length; i++) {
    // let from = courses[i].prices[0];

    // let to = courses[i].prices[1];

    if ((from === null || from === 0) && to <= 200) {
      console.log(courses[i]);
    }
  }
};

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

sortCurses(requiredRange1);
