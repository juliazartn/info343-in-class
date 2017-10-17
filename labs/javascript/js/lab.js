// Put your JavaScript lab code here!

let str = "I like JavaScript more than I like to party."

let strslice = str.slice(28, str.length);

console.log(strslice);

let wsu = "I love Washington State University"

let wsuEdit = wsu.replace("Washington State University", "University of Washington");

console.log(wsuEdit);

let combine = strslice + " " + wsuEdit;

console.log(combine);

function sumUpTo(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUpTo(5));

function vowelCount(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == "i" | str.charAt(i)=="e" | str.charAt(i)=='u' | str.charAt(i)== "a" | str.charAt(i)=="o") {
            count++;
        }
    }
    return count;
}

console.log(vowelCount("kookaburra"));

function findMin(nums) {
    let min = nums[0];

    for(let i = 0; i < nums.length; i++) {
        min = nums[i] < min ? nums[i] : min
    }

    return min;
}

let nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8]

console.log(findMin(nums));

function longestWord(strs) {
    let longest = strs[0];

    for(let i = 0; i < strs.length; i++) {
        longest = strs[i].length > longest.length ? strs[i] : longest;
    }

    return longest;
}

let longWords = ["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"];

console.log(longestWord(longWords));

function removeAll(arr, str) {
    let newarr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() != str) {
            newarr.push(arr[i]);
        }
    }

    return newarr;
}

let words = ["foo", "bar", "baz", "Foo", "FOO"];

console.log(removeAll(words, "foo"));

let objects = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        read: true
    },
    {
        title: "The Great Gatsby",
        author: "Scott Fitzgerald",
        read: false
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        read: false
    }
];

objects.push({
    title: "1984",
    author: "George Orwell",
    read: true
});

function printObject(object) {
    let end = object.title + " by " + object.author;
    let sentence = "";

    if(object.read)
        sentence = "I have read " + end;
    else
        sentence = "I really want to read " + end;

    console.log(sentence);
}

// console.log(printObject(objects[0]));

function printAll(objectArr) {
    for(let i = 0; i < objectArr.length; i++) {
       printObject(objectArr[i]);
    }
}

printAll(objects);