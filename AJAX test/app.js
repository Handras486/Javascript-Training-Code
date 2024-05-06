const url = './api/people.json';

const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       displayItems(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//async-await version
btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      return `<p>${item.name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
