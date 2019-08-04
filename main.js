// GLOBAL VAR******************
var nameInput = document.getElementById('main__name--input');
var ageInput = document.getElementById('main__age--input');
var mainButton = document.getElementById('main__age--button');
var infoCard = document.getElementById('main__info--card');
var allergyCard = document.getElementById('main__allergy--card');
var mainArticleContainer = document.getElementById('main__article--container');
var mainContent = document.getElementById('mainContent');
var imagesHomeArticle = document.getElementById('images__home--article');

// EVENT LISTENERS*****************

mainButton.addEventListener("click", mainEvent);

// FUNCTION**************************

function mainEvent() {
  newMenuContainer();
  getAge();
  insertSixMonths();
  insertAllergyInfo();
}

function newMenuContainer() {
  document.getElementById('main__article--container').style.width = "20%";
  document.getElementById('main__article--container').style.marginLeft = "10%";
  document.getElementById('main__article--container').style.background = "#212221";
  document.getElementById('main__content').innerText = " ";
  insertHomeIcon();
  // document.getElementById('main__info--card').style.width = "50%";
  // document.getElementById('main__age--input').style.display = "inline-block";
  // document.getElementById('main__name--input').style.width = "90%";
  // document.getElementById('main__age--input').style.width = "90%";
  // document.getElementById('main__age--button').style.width = "90%";

  // document.querySelector('main__input--text').innerText = 'Enter Name <br> and Age';
  // document.getElementById('card__container').style.width = '20%';
};

function insertHomeIcon() {
   imagesHomeArticle.insertAdjacentHTML('afterbegin',
    `<container id="home__icon--container">
      <div id="homeIcon">
        <img class="images__home--icon" src="images/home.png">
      </div>
     </container>`);
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

function insertAllergyInfo() {
  allergyCard.insertAdjacentHTML('afterbegin',
    `<container id="main__allergy--card">
      <div id="allergy__container">
         <p>
           If your baby is ready to start solids.
         </p>
       <div>
     </container>`);
}

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




