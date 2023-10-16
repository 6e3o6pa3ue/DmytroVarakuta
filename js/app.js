//1
var list = document.querySelector('ul');
var items =list.querySelectorAll('li');
items.forEach(function(item) {
  if (item.textContent !== 'Mercedes-Benz'&&
      item.textContent !== 'Audi'&&
      item.textContent !== 'Ferrari'&&
      item.textContent !== 'Porshe') {
    list.removeChild(item);
  }
});


2//
list.classList.add('list');
items.forEach(function(item) {
  item.classList.add('listItem');
});


3//
var newLi = document.createElement('li');
newLi.textContent = 'Bugatti';
list.insertBefore(newLi, list.firstChild);


4//
var newLi = document.createElement('li');
newLi.textContent = 'Ford';
list.appendChild(newLi);


5//
var form = document.createElement('form');
var nameInput = document.createElement('input');
var lastNameInput = document.createElement('input');
var passwordInput = document.createElement('input');
var confirmPasswordInput = document.createElement('input');

nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');

lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('placeholder', 'Last Name');

passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', 'Password');

confirmPasswordInput.setAttribute('type', 'password');
confirmPasswordInput.setAttribute('placeholder', 'Password confirmation');

form.appendChild(nameInput);
form.appendChild(lastNameInput);
form.appendChild(passwordInput);
form.appendChild(confirmPasswordInput);

document.body.appendChild(form);


6//
var img = document.createElement('img');
img.src = 'images/bmw_foto.jpg';
document.body.appendChild(img);


7//
var paragraph = document.querySelector('p');
paragraph.classList.remove('red', 'italic');

8//
var div = document.querySelector('div');
var h1 = document.createElement('h1');
h1.textContent = 'this is h1 tag';
div.appendChild(h1);


9//
h1.style.color = 'red';
h1.style.fontSize = '40px';