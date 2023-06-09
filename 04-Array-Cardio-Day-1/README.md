# 04-Array-Cardio-Day-1

Practice with some Array functions

## Noteworthy points:

### Array.filter() returns a new array if condition is truthy:

```javascript
function filterBornIn1500(people) {
  return people.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );
}
```

### Array.map() returns a new array based on the results of the calling array:

```javascript
function firstLastNames(people) {
  return people.map((inventor) => `${inventor.first} ${inventor.last}`);
}
```

### Array.sort() returns a sorted array based on provided condition (this example is pretty similar with Bubble sorting):

```javascript
function sortByAge(people) {
  return people.sort((a, b) => (a.year > b.year ? 1 : -1));
}

function bubbleSort(people) {
  for (let i = 0; i < people.length; i++) {
    for (let y = i + 1; y < people.length; y++) {
      if (people[i].year > people[y].year) {
        let temp = people[i];
        people[i] = people[y];
        people[y] = temp;
      }
    }
  }
  return people;
}
```

### Array.reduce() takes two arguments (anonymous function and initial value) and returns a computed result of anonymous function:

```javascript
function sumYearsOfLiving(people) {
  return people.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0); // set initial value (total) of 0
}
```

### Convert a NodeList to an Array:

```javascript
const links = Array.from(category.querySelectorAll("a"));
```

OR use spread (...):

```javascript
const links = [...category.querySelectorAll("a")];
```

### Map a new array from previous array text content and filter it to include "de" in it:

```javascript
const de = links
  .map((link) => link.textContent)
  .filter((street) => street.includes("de"));
```

### Sort an array alphabetically using deconstruction and split String:

```javascript
function sortAlphabetically(people) {
  return people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
  });
}
```

### Sum the times an element repeats in an array and return a new object to reflect it:

```javascript
function sumInstances(data) {
  return data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0; // Add an initial value to an object item if is undefined
    }
    obj[item]++;
    return obj;
  }, {});
}
```
