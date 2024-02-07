/* 'use strict';

let students = {
	js: [
			{name: 'John', progress: 100}, 
			{name: 'Ivan', progress: 60},
	],

	html: {
		basic: [
			{name: 'Peter', progress: 20}, 
			{name: 'Ann', progress: 40},
		],
		pro: [
			{name: 'Ken', progress: 10}, 
			{name: 'Kate', progress: 50},
		],
		semipro: [
			{name: 'Ken', progress: 10}, 
			{name: 'Kate', progress: 50},
		],
	}
}


function getArrayCount (object) {
	let sum = 0;

	for (let key in object) {
		if (Array.isArray(object[key])) {
			sum += object[key].length;
		} else if (typeof object[key] === "object") {
			sum += getArrayCount(object[key]);
		}
	}
	return sum;
}

console.log(getArrayCount(students));

function disemvowel(str) {
  return str.split(/[aeuio]/gi).join('');
}

console.log(disemvowel("This website is for losers LOL!"));

const users = [
	{ name: 'John', age: 32, salary: 1500 },
	{ name: 'Mike', age: 25, salary: 1200 },
	{ name: 'Pieter', age: 27, salary: 1400 },
	{ name: 'Jim', age: 22, salary: 1800 }
]
const usersObj = users.reduce((acc, user, index) => {
	acc[index] = user
	return acc;
	// Начальное значение {}
}, {}); 
console.log('New Object', usersObj); */



		


/* const sumProgress = function(data) {
	if (Array.isArray(data)) { // случай (1)
    return data.reduce((prev, current) => prev + current.progress, 0);// сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdata of Object.values(data)) {
      sum += sumProgress(subdata); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
		

console.log(sumProgress(students)); */

/* function solution(str, ending){
  let start = str.length;
  let end = ending.length;
  
  let substr = str.substring(start - end);
  return substr === ending;
}

function solution2(str, ending){
  return str.endsWith(ending)
}

console.log(solution('abc', 'bc'));
console.log(solution2('abc', 'c')); */

/* const shops = [
	{rice:500},
	{oil:200},
	{bread:50},
];

const budget = [5000, 15000, 25000];

const map = new Map();
shops.forEach((shop, i) => {
	map.set(shop, budget[i]);
});

const goods = [];
for (let shop of map.values()){
	goods.push(shop);
}

console.log(goods); */

// for (let [shop, price] of map.entries()){
// 	console.log(shop, price);
// }

// map.forEach((value, key, map) => {
// 	console.log(key, value);
// })

/* const arr = [1, [2,3], [3, [5,6, [6,8, [9,1]]]]];

let result = (arr) => arr.reduce((prev, item) => prev + (Array.isArray(item) ? result(item) : item),0);

console.log(result(arr)); */

/* let cache = new WeakMap();

function cacheUser (user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}

	return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

console.log(cache.get(lena)); */

// const now = new Date(2012, 0, 3, 3, 12);

// function getDateAgo (date, days) {
// 	let nowCopy = new Date(date);

// 	nowCopy.setDate(date.getDate() - days);
// 	return nowCopy.getDate();
// } 


// console.log(getDateAgo(now, 3));

const now = new Date(2024, 1, 1);

const t = now - new Date();

const days = Math.floor(t / (1000 * 60 * 60 * 24));

console.log(now);
console.log(t);
console.log(days);
