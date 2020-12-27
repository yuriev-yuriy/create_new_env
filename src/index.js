'use strict';
// import './sass/styles.scss';
const galleryImg =
    ["./images/slider/gallery-lifestyle-01-970x524.jpg",
"./images/slider/gallery-lifestyle-02-970x524.jpg",
"./images/slider/gallery-lifestyle-03-970x524.jpg",
"./images/slider/gallery-lifestyle-04-970x524.jpg",
"./images/slider/gallery-lifestyle-05-970x524.jpg",
"./images/slider/gallery-lifestyle-06-970x524.jpg",
"./images/slider/gallery-lifestyle-07-970x524.jpg",
"./images/slider/gallery-lifestyle-08-970x524.jpg",]
//     [{ id: "1", src: "./images/slider/gallery-lifestyle-01-970x524.jpg" },
// {id:"2", src:"./images/slider/gallery-lifestyle-02-970x524.jpg"},
// {id:"3", src:"./images/slider/gallery-lifestyle-03-970x524.jpg"},
// {id:"4", src:"./images/slider/gallery-lifestyle-04-970x524.jpg"},
// {id:"5", src:"./images/slider/gallery-lifestyle-05-970x524.jpg"},
// {id:"6", src:"./images/slider/gallery-lifestyle-06-970x524.jpg"},
// {id:"7", src:"./images/slider/gallery-lifestyle-07-970x524.jpg"},
// {id:"8", src:"./images/slider/gallery-lifestyle-08-970x524.jpg"},]
// console.log(galleryImg)
const headerListRef = document.querySelectorAll('.header__list-item');
const headerAfterRef = document.querySelectorAll('.kapec');
const list = document.querySelector('.main__list');
const links = document.querySelectorAll('.main__list-item');
const innerContainer = document.querySelector('.main__inner-container');
const innerItems = document.querySelectorAll('.main__inner-item');
const innerList = document.querySelector('.main__inner-list');
const innerImg = document.querySelectorAll('.main__inner-img');
const innerTitle = document.querySelector('.main__inner-title');
const innerBtn = document.querySelector('.main__inner-btn');
const overlayRef = document.querySelector('.Overlay');
const modalRef = document.querySelector('.Modal');
const modalImgRef = document.querySelector('.modal__img');
const btnNext = document.querySelector('.modal__btn--next');
const btnPrev = document.querySelector('.modal__btn--prev');

headerListRef.forEach(link1 => link1.addEventListener('click', () => {
    headerAfterRef.forEach(link2 => {
        const clickedEl = event.currentTarget;
        clickedEl.firstElementChild.classList.add('active'),
            clickedEl.firstElementChild.classList.remove('kapec')
    },
    )
}))

// links.forEach(link => link.addEventListener('click', event => {
//     const clickedEl = event.currentTarget;
//     list.classList.add('hide');
//     innerTitle.textContent = clickedEl.textContent;
//     innerContainer.classList.remove('hide');
//     }))


innerBtn.addEventListener('click', () => {
    list.classList.remove('hide');
    innerContainer.classList.add('hide');
})

galleryImg.map(img => {
    let idx = 1
    const li = `<a href="#" class="main__inner-img-link"><img class="main__inner-img" id=${idx} src=${img} alt=""></a>`;
    
    innerList.innerHTML += li;
    const innerImg = document.querySelectorAll('.main__inner-img');
    innerImg.forEach(img => img.setAttribute('id', idx++)) 

   return innerImg
})

    
// Modal
// innerImg.forEach(pic => {
    innerList.addEventListener('click', event => {
        modalImgRef.src = event.target.src;
        modalImgRef.id = event.target.id;
        // console.log(event.target.id)
        // console.log(modalImgRef.id)
        openModal(event)
    })

overlayRef.addEventListener('click', onOverlayClick)

function openModal(event) {
    console.log(event);
    overlayRef.classList.add('showModal');
    window.addEventListener('keydown', handleKeyDown);
    let go;
    console.log(`вне ф-ции ${go}`)
    btnNext.addEventListener('click', () => {
        btnPrev.removeAttribute("disabled", "disabled");
        go = (event.target.id++);
        console.log(go)
        // incrFoto(go)
        // setModalImg(go)
        if (Number(go) === 0) {
            btnPrev.setAttribute("disabled", "disabled");
        }
        modalImgRef.src = galleryImg[Number(go)]
        console.log(`в слушателе вперёд ${go}`)
    })
    btnPrev.addEventListener('click', event => {
        console.log(event.target.id)
        btnPrev.setAttribute('data-url', event.target.id)
        console.log(event.target.id)
        const dataIdx = btnPrev.dataset.url;
        console.log(Number(dataIdx))
    modalImgRef.src = galleryImg[dataIdx]
        // setModalImg()
        //         () => {
        //         btnNext.removeAttribute("disabled", "disabled");
        //         go = (--event.target.id-1);
        //         console.log(`в слушателе назад ${go}`)
        //         // setModalImg(go)
        //          modalImgRef.src = galleryImg[Number(go)]
        //  })
        // })
    })
}
function closeModal() {
    overlayRef.classList.remove('showModal');
    window.removeEventListener('keydown', handleKeyDown);
    // btnPrev.removeEventListener('click', setModalImg)

    modalImgRef.src = '';
    modalImgRef.id = 0;
}

function onOverlayClick() {
    if (event.target === event.currentTarget) {
        closeModal()
    }
}

const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
        closeModal()
    }
}

// btnNext.addEventListener('click', () => {
//     incrFoto(++modalImgRef.id)
//     console.log(modalImgRef.id)
// })

// function incrFoto(id) { 
// let ind;
//     if (id === galleryImg.length - 1) {
//         btnNext.setAttribute("disabled", "disabled");
//     }
//     let vid = Number(id);
//     console.log(typeof vid)

//     vid = vid + 1;
//     modalImgRef.src = galleryImg[vid]
// }

// btnPrev.addEventListener('click', () => {
//      btnNext.removeAttribute("disabled", "disabled");
//     setModalImg(--modalImgRef.id)
//  })

//  function decrFoto(id) { 
//      let ind;
//      console.log(id)
//     if (id === 0) {
//         btnPrev.setAttribute("disabled", "disabled");
//     }
//     ind = Number(id)
//     modalImgRef.src = galleryImg[ind]
//  }

const setModalImg = event => {
    // let indxNum;
    // const dataIdx = btnPrev.dataset.url;
    // console.log(galleryImg[dataIdx - 1]);
    // modalImgRef.src = galleryImg[dataIdx - 2]
    // galleryImg.forEach(img => {
    //     const url = galleryImg[dataIdx]
    //     console.log(url)
    // })
    
    //     // id = Number(0);
    // } else if (Number(id) === galleryImg.length) {
    //     btnNext.setAttribute("disabled", "disabled");
    //     // id = Number(8);
    // }
    // indxNum = Number(id)
    console.log(event.currentTarget)
    
    // modalImgRef.src = galleryImg[img.src]
 }
              


