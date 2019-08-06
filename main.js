// GLOBAL VAR******************
var nameInput = document.getElementById('main__name--input');
var ageInput = document.getElementById('main__age--input');
var mainButton = document.getElementById('main__age--button');
var infoCard = document.getElementById('main__info--card');
// var allergyCard = document.getElementById('main__allergy--card');
var allergyCard = document.getElementById('main__allergy--card');
var mainArticleContainer = document.getElementById('main__article--container');
var mainContent = document.getElementById('mainContent');
var imagesHomeArticle = document.getElementById('images__home--article');
var allergyIconButton = document.getElementById('#allergyIcon');
var allergyContainer = document.getElementById('allergy__container');

// EVENT LISTENERS*****************

mainButton.addEventListener("click", mainEvent);
allergyCard.addEventListener("click", allergyEventHandler);

// FUNCTION**************************

function mainEvent() {
  newMenuContainer();
  getAge();
  // insertSixMonths();

  insertAllergyIcon();
}

function allergyEventHandler(e) {
  if (event.target.className === "allergyIcon") {
    allergySectionContent(); 
    insertAllergyContent();
    console.log('Allergy section event!')
  }
};

function newMenuContainer() {
  document.getElementById('main__article--container').style.width = "80px";
  // document.getElementById('main__article--container').style.marginLeft = "10%";
  document.getElementById('main__article--container').style.background = "#0F709B";
  document.getElementById('main__info--card').style.width = "60%";
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

function allergySectionContent() {
  console.log('Allergy container working');
  document.getElementById('card__container').style.width = "80px";
  document.getElementById('card__container').style.opacity = "1";
  document.getElementById('main__info--card').style.width = "80px";
  document.getElementById('allergy__container').style.width = "55em";
  // document.getElementById('main__article--container').style.background = "red";
  // document.getElementById('main__content').innerText = " ";
  // document.getElementById('card__container').innerText = " ";
  // document.getElementById('allergyIcon').innerText = " ";
  // insertAllergyContent();
};

function insertHomeIcon() {
   imagesHomeArticle.insertAdjacentHTML('afterbegin',
    `<container id="home__icon--container">
      <div id="homeIcon">
        <img class="images__home--icon" src="images/home.png">
      </div>
     </container>`);
};

function insertAllergyIcon(e) {
  allergyCard.insertAdjacentHTML('afterbegin',
   `<container id="main__allergy--card">
     <div id="allergy__container" class="allergy__container">
      <div id="allergyIcon" class="allergyIcon">
        <img class="images__allergy--icon" src="images/hospital.png">
      </div>
     </div>
    </container>`);
};

// function insertAllergyCard(e) {
//   allergyCard.insertAdjacentHTML('afterbegin',
//   `<container id="main__allergy--card">
//     <div id="allergy__container" class="allergy__container">
//     </div>
//    </container>`);
// }

function insertAllergyContent(e) {
  console.log('allergy Container!')
  allergyContainer.insertAdjacentHTML('afterbegin',
    `<container id="allergy__content--container">
      <div id="allergy__content--case">
          <h3>
            header
          </h3>
          <p> 
            paragraph 
          </p>
       </div>
     </container>`);
};

function insertBeforeSixMonths() {
	 infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
        <h2>
        	${nameInput.value}
         	${ageInput.value}
        </h2>
       	 <p>
      		 Not recommended for babies under 6 months. 
           Food before one is just for fun.
      	 </p>
       <div>
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
          <h3>
            Motor skills around 6 months old: moving food back and forth in the mouth.
          </h3>
         <h3> 
          Food before 1 if just for fun.
         </h3>
        <p>
          Start to introduce them to food. 
          Make a goal of 100 foods in 100 days..
        </p>
        <p>
          There are no hard-and-fast rules anymore about what to feed your baby first 
          (except to steer clear of honey and choking hazards). Whether you choose to give your baby a vegetable puree, 
          rice cereal, pureed chicken, or a wedge of watermelon to gnaw on, offer him just one new 
          food every three days, and watch closely for signs of allergic reaction.
        </p>
       <div>
     </container>`);
};

function insertEightMonths() {
   infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
        <h2>
          ${nameInput.value}
          ${ageInput.value}
        </h2>
          <h3>
            Motor skills between 7-8 months: gaining skills, confidence and appetite.
          </h3>
          <p>
            Start introducing them to some of the food allergy.
          </p>
          <p>
            Introduce food allergens early on
           There is no real advantage of delaying food allergen introduction.
          </p>
      <div>
    </container>`);
};

function insertTenMonths() {
   infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
        <h2>
          ${nameInput.value}
          ${ageInput.value}
        </h2>
        <h3>
          Motor skills between 8-10 months: gaining skills, confidence and appetite.
        </h3>
        <p>
          Start introducing them to some of the food allergy.
        </p>
        <p>
          Introduce food allergens early on
          There is no real advantage of delaying food allergen introduction.
        </p>
      <div>
    </container>`);
};

function insertTwelveMonths() {
   infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
        <h2>
          ${nameInput.value}
          ${ageInput.value}
        </h2>
        <h3>
           Motor skills between 10-12 months: baby does the pincer grasp.
        </h3>
        <p>
          Serve a range of food textures.
          The amount of chewing strength and stamina required depends on food texture. 
          Mix things up to expose baby to various textures.
        </p>
      <div>
    </container>`);
};

function insertTwelvePlus() {
   infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
        <h2>
          ${nameInput.value}
          ${ageInput.value}
        </h2>
        <h3>
           Motor skills between 12+ months: baby is a pro but might learn that being messy gets your attention!.
        </h3>
        <p>
          Baby eats like a pro and likely has more and more teeth, helping with the chewing.
        </p>
      <div>
    </container>`);
};

function getAge() {
	var ageData = ageInput.value;
	var stringData = ageData.toString();
	var ageArray = stringData.split(' ');
  if (ageArray[0] == 1) {
    ageArray = 12;
    insertTwelvePlus();
  } else if (ageArray[0] < 6) {
    insertBeforeSixMonths();
	} else if (ageArray[0] == 6) {
    insertSixMonths()
  } else if (ageArray[0] <= 8) {
    insertEightMonths();
	} else if (ageArray[0] <= 10) {
    insertTenMonths();
  } else if (ageArray[0] <= 12) {
    insertTwelveMonths();
  } else if (ageArray[0] > 12) {
    insertTwelvePlus();
  }
};



