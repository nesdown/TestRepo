'use strict'

let value1 = 'Hello World';
let value2 = 14.5;
let value3 = 13.4;

//динамический
let fruits = ['Banana', 'Apple', 'Pineapple', 'Cake'];

let i = 0;
for (; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let to_check = 'Cake';

// Проверяет, есть ли элемент в массиве
if (fruits.includes(to_check))
  console.log('It is here!');
else
  console.log('It is not here!');
// let toDoListIsCool

// Ключ-значение
let obj = {
  key1 : 'Value1',
  key2 : 'Value2',
  key3 : 'Value3'
}

let countries = {
  Ukraine : 'Kyiv',
  Russia : 'Mosckow',
  England : 'London',
  Usa : 'Washington',

  sing_a_hymn : function() {
    console.log('Data Data Data');
  }
}

console.log(countries.sing_a_hymn);
