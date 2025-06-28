import fluidScale from 'fluid-scale';

fluidScale ();

const pages = ['index.html', 'food-card.html', 'product-card.html'];

const path = window.location.pathname;
const fileName = path.substring(path.lastIndexOf('/') + 1);

let currPage = pages.indexOf (fileName);

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      currPage--;
      if(currPage < 0)
        currPage = pages.length - 1;
    } else if (event.key === 'ArrowRight') {
      currPage++;
      if(currPage >= pages.length)
        currPage = 0;
    }

    window.location.href = pages[currPage];
  });