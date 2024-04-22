export function RangeIterator(start: number, end: number, step: number) {
  let current = start;
  return {
      [Symbol.iterator]() {
          return {
              next: () => {
                  if (current >= end) {
                      return { value: current, done: true };
                  } else {
                      const result = { value: current, done: false };
                      current += step;
                      return result;
                  }
              }
          };
      }
  };
}
const iterator= RangeIterator(0,14,2);
// console.log(iterator)

for (const num of iterator) {
  console.log(num); 
}
// console.log(...iterator);



