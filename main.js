// GLOBAL VAR******************
var nameInput = document.getElementById('main__name--input');
var ageInput = document.getElementById('main__age--input');
var mainButton = document.getElementById('main__age--button');
var infoCard = document.getElementById('main__info--card');

// EVENT LISTENERS*****************
mainButton.addEventListener("click", mainEvent);


function mainEvent() {
  newMenuContainer();
  getAge();
  insertSixMonths();
}

function newMenuContainer() {
  document.getElementById('main__artiacle--container').style.width = "25%";
  document.getElementById('main__artiacle--container').style.fontSize = "small";
  document.getElementById('main__artiacle--container').style.marginLeft = "20%";
  document.getElementById('main__age--input').style.display = "inline-block";
  document.getElementById('main__name--input').style.width = "90%";
  document.getElementById('main__age--input').style.width = "90%";
  document.getElementById('main__age--button').style.width = "90%";
  // document.querySelector('main__input--text').innerText = 'Enter Name <br> and Age';
  // document.getElementById('card__container').style.width = '20%';
};

function insertSixMonths() {
	 infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
       <h2>
       	${nameInput.value}
       	${ageInput.value}
       </h2>
      	 <p>
      		 If your baby is ready to start solids, you may want to try 
      		 baby-led weaning, relying on table foods rather than purees. 
      		 Here are five great baby-led weaning foods to test out—no cooking required!
      	 </p>
       <div>
     </container>`);
};

function getAge() {
	var ageData = ageInput.value;
	var stringData = ageData.toString();
	var ageArray = stringData.split(' ');
	console.log(ageArray[0]);
	if (ageArray[0] < 6) {
		console.log('Food before one');
	} else {
		console.log('hello hunter');
	}
};




