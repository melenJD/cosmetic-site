const btn_prev = document.getElementById('slide-left');
const btn_next = document.getElementById('slide-right');
const slide = document.getElementById('slide');

btn_prev.addEventListener('click', () => {
  let page = slide.getAttribute('page');
  page -= 1;
  if(page == 0){
    page = 3;
  }
  slide.setAttribute('page', page);
  slide.setAttribute('type', 'prev');
  console.log(page);
})

btn_next.addEventListener('click', () => {
  let page = slide.getAttribute('page');
  page = parseInt(page) + 1;
  if(page == 4){
    page = 1;
  }
  slide.setAttribute('page', page);
  slide.setAttribute('type', 'next');
  console.log(page);
})