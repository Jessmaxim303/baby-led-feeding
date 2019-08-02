var nameInput = document.getElementById('main__name--input');
var ageInput = document.getElementById('main__age--input');
var mainButton = document.getElementById('main__age--button');
var infoCard = document.getElementById('main__info--card');

mainButton.addEventListener("click", mainEvent);

function mainEvent() {
	 infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
       <h3>Hello</h3>
       <div>
     </container>`);
};

