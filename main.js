
const submitowanie = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(firstName);
    console.log(lastName);

    console.log(`Imię: ${firstName.value}, nazwisko: ${lastName.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitowanie);


