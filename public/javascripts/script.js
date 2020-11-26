import { loadNavHTML } from './navLoader.js';

// Person Template
const personTemplate = ({ name, age }) => `
    <div class="person">
        <div class="name">${name}</div>
        <div class="age">${age}</div>
    </div>
`;

const loadPeopleUI = (people) => {
    const html = people.map(person => personTemplate(person))
    .join('');

    document.querySelector('.people-list').innerHTML = html;
};

// Load the person list
const loadPeople = async () => {
    const res = await fetch('people');
    const json = await res.json();
    document.people = json;
    loadPeopleUI(document.people);
 };

 const filterPeople = () => {
    const { value: filter } = document.querySelector('#filter');
    let filteredPeople = document.people;
    if(filter != '') {
        filteredPeople = filteredPeople.filter(({ hobbies }) =>{
            return hobbies.some(hobby => hobby.toLowerCase().indexOf(filter.toLowerCase()) > -1);
        });
    }
    loadPeopleUI(filteredPeople);
 };

// Set our page load
document.addEventListener('DOMContentLoaded', () => {
    // Set off the nav load.
    loadNavHTML();

    // Set of the load People
    loadPeople();

    document.querySelector('#btnfilter')
            .addEventListener('click', ({ target }) => filterPeople());
});