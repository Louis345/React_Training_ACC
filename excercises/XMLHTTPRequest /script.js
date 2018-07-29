/** As a user, I should be greeted with a list of all rick and morty characters
 * As  a user, I should be able to select a character from the dropdown and have that user displayed as an image
 *
 *
 */

/**
 * Modify this so that it will do something with the data
 */
function loadAllCharacters() {
  var characters = null;
  var XHR = new XMLHttpRequest();
  XHR.open('GET', 'https://rickandmortyapi.com/api/character');
  XHR.send();
  XHR.onreadystatechange = function() {
    if (XHR.readyState === 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      characters = data;
      populateDropDown(data);
    }
  };
  $('#dropdown').change(function() {
    alert($(this).val());
    //Code to select image based on selected car id
  });
  return characters;
}

function populateDropDown(data) {
  $.each(data.results, function(key, value) {
    $('#dropdown').append(
      $('<option>test</option>')
        .val(value.name)
        .html(value.name)
    );
  });
}

function OnchangeUpdateImage() {}

// Call on functions here
