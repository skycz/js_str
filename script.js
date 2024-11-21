"use strict";

let str = "some"; // Примитивный тип данных (строка)
let strObj = new String(str); // Оборачиваем строку в obj

/* console.log(typeof(str));
console.log(typeof (strObj)); */

console.dir([1,2,3]);
// console.dir() — метод, который выводит "дерево" объектов, что особенно полезно при работе с объектами и массивами, где вы хотите увидеть не просто их значения, а все свойства и методы, которые они содержат.

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    } // прототип
};

const john = {
    health: 100,
}; // готовый объект

john.__proto__ = soldier; //.__proto__ = прототип
// john берет свойства из своего прототипа soldier
// но может изменять некоторые параметры взависимости от его личных характеристик
// p.s метод с __proto__ устарел, но знать его нужно

/* console.log(john.armor);  */
// в данном случае берем armor у нашего прототипа soldier
/* console.log(john);  */
// в данном случае берем лишь личные характр джона
john.sayHello(); // закрываем функцию
// в данном случае джон берет метод (то что он умеет) sayHello у своего прототипа soldier.

// Новый метод старого __proto__ (прототип)

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
}; // прототип

const john = {
    health: 100,
}; // готовый объект

Object.setPrototypeOf(john, soldier); 
// john - объект которому устанавливается прототип
// soldier - объект который является прототипом как и в первом случае

john.sayHello();

// Ситуация изначально лишь с прототипом
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
}; // прототип

const john = Object.create(soldier);
// новый объект john которым является прототипом soldier

john.sayHello();