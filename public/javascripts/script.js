import { loadNavHTML } from './navLoader.js';

// Person Template
const personTemplate = ({ name, age }) => `
    <div class="person">
        <div class="name">${name}</div>
        <div class="age">${age}</div>
    </div>
`;

// Load the person list
const loadPeople = async () => {
    const res = await fetch('people');
    const json = await res.json();

    const html = json.map(person => personTemplate(person))
                     .join('');

    document.querySelector('.people-list').innerHTML = html;
};

// Set our page load
document.addEventListener('DOMContentLoaded', () => {
    // Set off the nav load.
    loadNavHTML();

    // Set of the load People
    loadPeople();
});