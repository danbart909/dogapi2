function listen() {
  $(".breed").change(function() {
//    let breed = $('.breed').val();
//    let breedURL = breed.replace(/""/g,'-');
    let selectedDog = $(".breed :selected").val();
    let dogURL = selectedDog.replace(/\s/g, "");
    let x = $('.breed :selected').value;
    $('.breed[value]').replaceWith(dogURL);
    alert(dogURL);
  })
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
    console.log(breed);
  });
}                

function getDogImage() {
  let selectedDog = $(".breed :selected").val();
  let dogURL = selectedDog.replace(/\s/g, "");
  let x = $('.breed :selected').value;
  fetch(`https://dog.ceo/api/breed/${dogURL}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  listen();
  watchForm();
});

//$(function () {
//  $('#number').change(function()
//    $('#number').attr('value', number);
// )});

// $(function() {
//   $('form').submit(function () {
// //    $('#number').attr('value', number);
//     console.log(number);
//   });
// });