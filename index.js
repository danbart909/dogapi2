function listen() {
  $(".breed").change(function() {
    let selectedDog = $(".breed").val();
    let dogURL = selectedDog.replace(/\s/g, "");
    $('.breed[value]').replaceWith(dogURL);
    console.log(dogURL);
  })
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}                

function getDogImage() {
  let selectedDog = $(".breed").val();
  let dogURL = selectedDog.replace(/\s/g, "");
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
