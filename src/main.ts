import { Person } from './model/person';

const name = window.prompt('What is your name?', 'Anonymous');
const age = Number(window.prompt('How old are you?', String(20)));
const hobby = window.prompt('What is your hobby?', 'programming');
const person = new Person(name, age, hobby);

person.sayHello().then(() => {
    const els = Array.from(document.querySelectorAll('body *')) as Array<HTMLElement>;

    Object.keys(person).forEach((key: keyof Person) => {
        els.forEach((el: HTMLElement) => {
            const pattern = new RegExp(`{{\\s*${key}\\s*}}`);

            if (~el.textContent.search(pattern)) {
                el.textContent = el.textContent.replace(pattern, `${person[key]}`);
            }
        });
    });
});
