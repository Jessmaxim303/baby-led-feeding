// GLOBAL VAR******************
// var allergyCard = document.getElementById('main__allergy--card');
var ageInput = document.getElementById('main__age--input');
var allergryContent = 0;
var allergyContainer = document.getElementById('allergy__container');
var allergyContentContainer = document.getElementById('allergy__content--container');
var allergyIconButton = document.getElementById('#allergyIcon');
var cardContainer = document.getElementById('card__container');
var imagesAllergyArticle = document.getElementById('images__allergy--article');
var imagesHomeArticle = document.getElementById('images__home--article');
var imagesHomeIcon = document.getElementById('images__home--icon');
var imagesMenuArticle = document.getElementById('images__menu--article');
var imagesMenuArticle = document.getElementById('images__menu--article');
var infoCard = document.getElementById('main__info--card');
var mainAllergyCard = document.getElementById('main__allergy--card');
var mainArticleContainer = document.getElementById('main__article--container');
var mainButton = document.getElementById('main__age--button');
var mainContent = document.getElementById('mainContent');
var menuIcon = 0;
var ageContent = 0;
var nameInput = document.getElementById('main__name--input');

// EVENT LISTENERS*****************

mainButton.addEventListener("click", mainEvent);
mainAllergyCard.addEventListener("click", allergyEventHandler);
// imagesHomeIcon.addEventListener("click", newMenuContainer);
infoCard.addEventListener("click", backToMenu);

// FUNCTION**************************

function mainEvent(e) {
  newMenuContainer();
  getAge();
  insertAllergyIcon(e);
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

function allergyEventHandler(e) {
  allergySectionContent(e); 
  insertAllergyContent(e);
  allergyHandler(e);
};

function allergyHandler(e){
  var allergyNodes = document.getElementById("main__allergy--card").childNodes;
  console.log(allergyNodes);
};

function backToMenu(e) {
  console.log('back 2 menu');
  backMenuContainer();
  getAge();
  insertAllergyIcon();
  // var allergyNodes = document.getElementById("main__allergy--card").childNodes;
}

function backMenuContainer() {
  document.getElementById('main__article--container').style.width = "80px";
  document.getElementById('main__info--card').style.width = "60%";
  document.getElementById('main__info--card').style.visibility = "visible";
  document.getElementById('main__content').innerText = " ";
  document.getElementById('main__allergy--card').style.width = "80px";
  document.getElementById('allergy__content--container').innerText = " ";
  document.getElementById('images__menu--article').innerText = " ";
  menuIcon--;
  // document.getElementById('images__allergy--article').innerText = " ";
};

function newMenuContainer() {
  document.getElementById('main__article--container').style.width = "80px";
  document.getElementById('main__info--card').style.width = "60%";
  document.getElementById('main__info--card').style.visibility = "visible";
  document.getElementById('main__content').innerText = " ";
  document.getElementById('main__allergy--card').style.width = "80px";
  insertHomeIcon();
};

function allergySectionContent(e) {
  document.getElementById('main__allergy--card').style.visibility = "visible";
  document.getElementById('card__container').style.width = "80px";
  document.getElementById('card__container').innerText = " ";
  document.getElementById('main__info--card').style.opacity = "1";
  document.getElementById('main__allergy--card').style.width = "60%";
  document.getElementById('main__info--card').style.width = "80px";
  document.getElementById('allergyIcon').innerText = " ";
  insertMenuIcon();
};

function insertHomeIcon() {
   imagesHomeArticle.insertAdjacentHTML('afterbegin',
    `<container id="home__icon--container">
      <div id="homeIcon">
        <img class="images__home--icon" id="images__home--icon" src="images/home.png">
      </div>
     </container>`);
};

function insertMenuIcon(e) {
  if (menuIcon === 0) {
   imagesMenuArticle.insertAdjacentHTML('afterbegin',
    `<container id="menu__icon--container">
      <div id="menuIcon">
        <img class="images__menu--icon" src="images/tomato.png">
      </div>
     </container>`);
 menuIcon++;
 }
};

function insertAllergyIcon() {
  imagesAllergyArticle.insertAdjacentHTML('afterbegin',
   `<container id="main__allergy--card">
     <div id="allergy__container" class="allergy__container">
      <div id="allergyIcon" class="allergyIcon">
        <img class="images__allergy--icon" src="images/hospital.png">
      </div>
     </div>
    </container>`);
};

function insertAllergyContent(e) { 
  if (allergryContent === 0) {
  mainAllergyCard.insertAdjacentHTML('afterbegin',
    `<container id="main__allergy--card">
       <div id="allergy__content--container" class="allergy__content--container">
          <h3>
            How to Avoid Food Allergies
          </h3>
          <p>
            <span style="font-weight: 400"> 
              Allergic conditions include asthma, atopic dermatitis, eczema, hay fever 
              (conditions regrouped and often referred to as atopy), or food allergies.
            </span> 
          </p>
          <div id="foodIconsContainer">
              <img id="images__milk--icon" src="images/milk.png">
              <img id="images__peanuts--icon" src="images/peanuts.png">
              <img id="images__fish--icon" src="images/fish.png">
              <img id="images__soy--icon" src="images/soy.png">
              <img id="images__bread--icon" src="images/bread.png">
          </div>
       </div>
     </container>`);
  allergryContent++;
 }
};

function insertBeforeSixMonths() {
  if (ageContent === 0) {
	 infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="card__container">
        <h2>
        	${nameInput.value}
         	${ageInput.value}
        </h2>
       	 <p>
          <span style="font-weight: 400"> 
      		 Not recommended for babies under 6 months. 
           Food before one is just for fun.
           </span>
      	 </p>
       </div>
     </container>`);
  }
  ageContent++;
};

function insertSixMonths() {
   infoCard.insertAdjacentHTML('afterbegin',
    `<container id="info__card--container">
      <div id="images__menu--article"> 
       <div id="card__container">
        <h2>
          ${nameInput.value}
          ${ageInput.value}
        </h2>
          <h3>
            Motor skills around 6 months old: moving food back and forth in the mouth.
          </h3>
        <p>
          Start to introduce them to food. 
          Make a goal of 100 foods in 100 days..
        </p>
        <p>
          <span style="font-weight: 400"> 
            There are no hard-and-fast rules anymore about what to feed your baby first 
            (except to steer clear of honey and choking hazards). Whether you choose to give your baby a vegetable puree, 
            rice cereal, pureed chicken, or a wedge of watermelon to gnaw on, offer him just one new 
            food every three days, and watch closely for signs of allergic reaction.
          </span>
        </p>
       </div>
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
      </div>
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
      </div>
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
      </div>
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
      </div>
    </container>`);
};




