var nameInput = document.getElementById('main__name--input');
var ageInput = document.getElementById('main__age--input');
var mainButton = document.getElementById('main__age--button');
var infoCard = document.getElementById('main__info--card');

mainButton.addEventListener("click", mainEvent);

function mainEvent() {
	 infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
       <h3>
       	${nameInput.value}
       	${ageInput.value}
       </h3>
      	 <p>
      		 If your baby is ready to start solids, you may want to try 
      		 baby-led weaning, relying on table foods rather than purees. 
      		 Here are five great baby-led weaning foods to test out—no cooking required!
      	 </p>
       <div>
     </container>`);
	 getAge();
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



