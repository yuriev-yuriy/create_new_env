'use strict';
// import './sass/styles.scss';
const galleryImg = [ "./images/slider/gallery-lifestyle-01-970x524.jpg",
"./images/slider/gallery-lifestyle-03-970x524.jpg",
"./images/slider/gallery-lifestyle-02-970x524.jpg",
"./images/slider/gallery-lifestyle-04-970x524.jpg",
"./images/slider/gallery-lifestyle-05-970x524.jpg",
"./images/slider/gallery-lifestyle-06-970x524.jpg",
"./images/slider/gallery-lifestyle-07-970x524.jpg",
"./images/slider/gallery-lifestyle-08-970x524.jpg",]

const headerListRef = document.querySelectorAll('.header__list-item');
const headerAfterRef = document.querySelectorAll('.kapec');
const list = document.querySelector('.main__list');
const links = document.querySelectorAll('.main__list-item');
const innerContainer = document.querySelector('.main__inner-container');
const innerItems = document.querySelectorAll('.main__inner-item');
const innerImg = document.querySelector('.main__inner-img');
const innerTitle = document.querySelector('.main__inner-title');
const innerBtn = document.querySelector('.main__inner-btn');

headerListRef.forEach(link1 => link1.addEventListener('click', () => {
    headerAfterRef.forEach(link2 => {
        const clickedEl = event.currentTarget;
        clickedEl.firstElementChild.classList.add('active'),
            clickedEl.firstElementChild.classList.remove('kapec')
    },
    )
}))

links.forEach(link => link.addEventListener('click', event => {
    const clickedEl = event.currentTarget;
    list.classList.add('hide');
    innerTitle.textContent = clickedEl.textContent;
    innerContainer.classList.remove('hide');
    }))


innerBtn.addEventListener('click', () => {
    list.classList.remove('hide');
    innerContainer.classList.add('hide');
})

galleryImg.forEach(item => {
    innerItems.forEach(innerItem => {
        innerItem.addEventListener('click', event => {
            let numRef = Number(innerItem.id);
  innerImg.src = galleryImg[numRef];
        })
    })
})
        
        
        
              


