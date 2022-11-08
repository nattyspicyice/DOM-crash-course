//EXAMINE THE DOCUMENT OBJECT
    // //this shows us all the properties and methods attached to the document-object
    console.dir(document);

    // //ACCESSING THE DOCUMENT DOMAIN
    console.log(document.domain); //output = 127.0.0.1

    // //ACCESSING THE DOCUMENT URL
    console.log(document.URL); //output = http://127.0.0.1:5500/index.html

    // //ACCESSING THE TITLE OF THE PAGE
    console.log(document.title); //output = "Item Listener"

    // //CHANGING THE NAME OF THE TITLE
    document.title = "This title has been changed"
    console.log(document.title); // output = "This title has been changed"

    // //ACCESSING THE DOCTYPE
    console.log(document.doctype); //output = <!DOCTYPE html>

    // //ACCESSING THE HEAD
    console.log(document.head); //output = all the elements within the head tags

    // //ACCESSING THE BODY
    console.log(document.body); //output = all the elements within the head tags

    // //ACCESSING THE ENTIRE HTML COLLECTION
    console.log(document.all); //output = the entire html collection of the document

    // //ACCESSING THE FORMS
    console.log(document.forms); //output = the html collection of forms within the document

//GET ELEMENT BY ID
console.log(document.getElementById('header-title'));

    // //you can also assign this to a variable
    var headerTitle = document.getElementById('main-header');
    console.log(headerTitle);

    // //textContent [note: this disregards the style]
    headerTitle.textContent = "hello"; //changed the header

    // //InnerText [note: this pays attention to the styling]
    headerTitle.innerText = "Bye"; //changed the header

    // //innerHTML
    headerTitle.innerHTML = '<h3>Hello World!</h3>' //inserts elements into the document [note: it doesn't replace them]


//CHANGING THE STYLING
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASS NAME
const items = document.getElementsByClassName('list-group-item');
console.log(items); // output = html colleciton of all elements under that class name

//changing the name of a particular item
console.log(items[1]);
items[1].textContent = 'hello'; //changes the name in the html doc

//QUERY SELECTOR
var headerVariable = document.querySelector('#main-header');
headerVariable.style.borderBottom = 'solid 4px #ccc'

const input = document.querySelector('input');
input.value = 'Hello World'

const submit = document.querySelector('input[type="submit"]');
submit.value = "SEND" // changed the button from "submit" to "SEND"

const item = document.querySelector('.list-group-item');
item.style.color='red'; //changed the first list item on page

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; //changed the last list item on page

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral'; //changed the second list item on page

//QUERY SELECTOR ALL
//will grab more than one element
const titles = document.querySelectorAll('.title');
console.log(titles); //output node list of titles
titles[0].textContent = "hello";

const odd = document.querySelectorAll('li:nth-child(odd)')
for(let i =0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4'
}; // changed every other child in the light gray color.
