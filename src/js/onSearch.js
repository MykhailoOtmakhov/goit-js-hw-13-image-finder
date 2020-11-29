export default 
function onSearch (e) {
    e.preventDefault();
    // clearResult();
    imageApiService.searchQuery = e.currentTarget.elements.query.value;
    // refs.queryForm.value = ""
    imageApiService.resetPage();
    clearResult()
    imageApiService.fetchImages()
    .then(renderImagesCard)
    .catch(onFetchError);
   }