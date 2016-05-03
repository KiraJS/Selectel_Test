var profileMenu = document.getElementById('profileMenu');
var descriptionMenu = document.getElementById('descriptionMenu');

profileMenu.addEventListener('click', selectPerson);
descriptionMenu.addEventListener('click', selectContent);

function selectPerson(e) {
  e.preventDefault();
  console.log("selectPerson");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/data.json', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      console.log(xhr.responseText);
    }
  }
}

function selectContent(e) {
  e.preventDefault();
  console.log("selectContent");
}
