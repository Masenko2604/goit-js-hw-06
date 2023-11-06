const categorielist = document.getElementById('categories')  // ul(id)
const listItem = document.querySelectorAll('.item'); // li(items)
console.log('Number of categories:', listItem.length);


const items = document.querySelectorAll('.item'); 
    
items.forEach((item) => {
  const headerText = item.firstElementChild.textContent;
  const numberOfElements = item.lastElementChild.children.length;

  console.log(`Categories: ${headerText}`);
  console.log(`Elements: ${numberOfElements}`);
});
   
   

