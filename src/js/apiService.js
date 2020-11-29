export default class ImageApiService{
    constructor(){
        this.searchQuery='';
        this.page=1;
        this.perPage=12;
    }

    fetchImages(){
        console.log(this);
        const MY_KEY = '19192524-a42a2a32afb109ad508e945f7';
        const BASE_URL = 'https://pixabay.com/api';

        return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${MY_KEY}`)
    .then (response => response.json())
    .then(data => {
        this.incrementPage();
        return data;
    });
    }

    incrementPage(){
        this.page+=1;
    }

    resetPage(){
    this.page=1;
    }

    get query() {
        return this.searchQuery;
        }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
        }
}









