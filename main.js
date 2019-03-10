function listening(){
  $('#user-search-btn').on('click',function(){
    event.preventDefault();
    $('.repo-container').empty();
    const search_input_val = $('#user-search-input').val()
    makeApiCall(search_input_val)
  })
}

function makeApiCall(search_input_val){
  let complete_url = `https://api.github.com/users/${search_input_val}/repos`
  fetch(complete_url)
  .then(response => response.json())
  .then(response => {
    createHTMLElement(response) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))

function createHTMLElement(data){
  for (let i =0; i<data.length;i++){
    let repo_name = data[i].name
    let repo_url = data[i].url
    $('.repo-container').append(
      `<h1>${repo_name}</h1>
        <h2>${repo_url}</h2>
      `
    )

  }

}


}
listening();
