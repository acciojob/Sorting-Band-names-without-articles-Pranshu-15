//your code here

let bandNames = ['The Rolling Stones', 'Aerosmith', 'Led Zeppelin', 'The Beatles', 'Nirvana'];

// Remove articles from band names and sort them
band = band.map(name => {
  // Remove articles 'a', 'an', 'the' (case-insensitive)
  return name.replace(/^(a|an|the)\s/i, '');
}).sort();

// // Get the ul element with id 'band'
// const ulElement = document.getElementById('band');

// // Iterate through sorted band names and create li elements
// bandNames.forEach(name => {
//   const liElement = document.createElement('li');
//   liElement.textContent = name;
//   ulElement.appendChild(liElement);
// });
