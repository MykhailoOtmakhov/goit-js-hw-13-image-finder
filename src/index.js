import './styles.css';
import imageCardsTpl from './tamplates/photo-cards.hbs';
import ImageApiService from './js/apiService.js';
import { alert, error} from'@pnotify/core';
// import"@pnotify/core/dist/PNotify.css";
// import"@pnotify/core/dist/BrightTheme.css";

   const refs ={
      photoContainer: document.querySelector('.js-photo-container'),
      queryForm: document.querySelector('.search-form'),
      loadMoreBtn: document.querySelector('.load-more')
  } 

 refs.queryForm.addEventListener('submit', onSearch)
 
 const imageApiService = new ImageApiService(); 

 function onSearch (e) {
  e.preventDefault();
  clearResult();
  imageApiService.query = e.currentTarget.elements.query.value.trim();
  
  if(imageApiService.query === ''){
    return alert('Type, what you find!');
  }
  imageApiService.resetPage();
  imageApiService.fetchImages()
  .then(renderImagesCard)
  .catch(alertNotification);
 }

   function renderImagesCard (hits){
    const markup = imageCardsTpl(hits);
    return refs.photoContainer.insertAdjacentHTML('beforeend',markup);
}

function onFetchError(error) {
  console.log('CATCH!')
}

function clearResult(){
  refs.photoContainer.innerHTML=''
}

// // Вариант с кнопкой

refs.loadMoreBtn.addEventListener('click', onBtnClick);

function onScrollTo() {
  let value = document.body.scrollHeight;
   setTimeout(() => {
    window.scrollTo({
      top: value,
      left: 0,
      behavior: 'smooth',
    });
  }, 1000);
}
   
  function onBtnClick(){
    imageApiService.fetchImages()   
    .then(renderImagesCard)
    onScrollTo()
  }

  function alertNotification(err){
  error ({
      text: `${err}`,
    })
  }

  // Бесконечный скрол
//   const options = {
//     rootMargin: '100px',
// };

//   const onEntry = entries=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting && imageApiService.query !==''){
//           imageApiService.fetchImages()
//           .then(renderImagesCard)
//           .catch(alertNotification);
//          }
//       })
//     }
  

// const observer = new IntersectionObserver(onEntry,options);

// observer.observe(document.querySelector('.sentinel'))