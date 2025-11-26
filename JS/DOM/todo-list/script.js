// add event listener - on click on the button? form submit?
// when form submits
// create a list item element
// get the text from the input field and add it to the list item
// append list  item element to ul

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('input');
  input.style.border = '';
  console.log(event);
  const li = document.createElement('li');
  const inputText = input.value;
  if (inputText === '') {
    alert('Input is required');
    input.style.border = '1px solid red';
    return;
  }
  const liContent = document.createTextNode(inputText);
  li.appendChild(liContent);
  document.querySelector('ul').appendChild(li);
  form.reset();
});
