import { loadNavHTML } from './navLoader.js';

// Submit Data to Server using a POST
const sendToServer = async (name, age) => {
    const response = await fetch('add', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            age
        })
    });
    const json = await response.json();
    return json;
};

// Clear the form
const clearForm = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#age').value = 0;
}

// Process Add Button Click 
const processAdd = async () => {
    const { value: name } = document.querySelector('#name');
    const { value: age } = document.querySelector('#age');

    if ( name.length > 0 ) {
        const { result } = await sendToServer(name, age);
        console.log(result);

        if (result === 'success') {
            clearForm();
        }
    }
};

// Listen for our click event
document.addEventListener('click', ({ target }) => {
    if (target.matches('#add')) processAdd();
});

// Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadNavHTML();
});