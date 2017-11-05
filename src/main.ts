import { Person } from './model/person';

let name = window.prompt('What is your name?', 'Anonymous');
let person = new Person(name);

person.sayHello().then(() => document.getElementById('name').textContent = person.getName());
