const categories = document.querySelectorAll('ul#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('li').length;
  
  console.log(`Category: ${title}`);
  console.log(`Number of items: ${items}`);
});