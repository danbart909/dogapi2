function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}                

function getDogImage() {
  let rawString = $(".breed").val();
  let dogURL = rawString.split(" ").reverse().join("/");
  console.log(dogURL);
  fetch(`https://dog.ceo/api/breed/${dogURL}/images/random`)
        .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Make sure your breed is spelled correctly.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

$(function() {
  watchForm();
});
