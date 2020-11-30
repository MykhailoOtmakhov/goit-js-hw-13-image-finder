// const { entries } = require("core-js/fn/array");
import ImageApiService from './apiService.js';

const options = {
    rootMargin: '100px'
};

const callback = entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log('kyky')
            // fetchImages() 

        }
    })
};

let observer = new IntersectionObserver(callback,options);
;
observer.observe(document.querySelector('.load-more'))