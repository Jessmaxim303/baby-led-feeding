// GLOBAL VAR******************
var nameInput = document.getElementById('main__name--input');
var ageInput = document.getElementById('main__age--input');
var mainButton = document.getElementById('main__age--button');
var infoCard = document.getElementById('main__info--card');
// var allergyCard = document.getElementById('main__allergy--card');
var mainAllergyCard = document.getElementById('main__allergy--card');
var mainArticleContainer = document.getElementById('main__article--container');
var mainContent = document.getElementById('mainContent');
var imagesHomeArticle = document.getElementById('images__home--article');
var imagesMenuArticle = document.getElementById('images__menu--article');
var allergyIconButton = document.getElementById('#allergyIcon');
var allergyContainer = document.getElementById('allergy__container');
var cardContainer = document.getElementById('card__container');
var imagesMenuArticle = document.getElementById('images__menu--article');
var imagesAllergyArticle = document.getElementById('images__allergy--article');
var allergyContentContainer = document.getElementById('allergy__content--container');
var allergryContent = 0;
var menuIcon = 0;

// EVENT LISTENERS*****************

mainButton.addEventListener("click", mainEvent);
mainAllergyCard.addEventListener("click", allergyEventHandler);

// FUNCTION**************************

function mainEvent(e) {
  newMenuContainer();
  getAge();
  insertAllergyIcon(e);
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

function newMenuContainer() {
  document.getElementById('main__article--container').style.width = "80px";
  document.getElementById('main__article--container').style.background = "#0F709B";
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
  // document.getElementById('foodIconsContainer').style.height = "50px";
  // document.getElementById('foodIconsContainer').style.display = "inline-block";
  // document.getElementById('images__milk--icon').style.height = "50px";
  // document.getElementById('images__milk--icon').style.width = "50px";
  // document.getElementById('images__peanuts--icon').style.height = "50px";
  // document.getElementById('images__peanuts--icon').style.width = "50px";
  document.getElementById('main__allergy--card').style.width = "60%";
  document.getElementById('main__info--card').style.width = "80px";
  document.getElementById('allergyIcon').innerText = " ";
  insertMenuIcon()
};

function insertHomeIcon() {
   imagesHomeArticle.insertAdjacentHTML('afterbegin',
    `<container id="home__icon--container">
      <div id="homeIcon">
        <img class="images__home--icon" src="images/home.png">
      </div>
     </container>`);
};

function insertMenuIcon() {
  if (menuIcon === 0) {
   imagesMenuArticle.insertAdjacentHTML('afterbegin',
    `<container id="menu__icon--container">
      <div id="menuIcon">
        <img class="images__menu--icon" src="images/tomato.png">
      </div>
     </container>`);
 }
 menuIcon++;
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
              <img id="images__peanuts--icon" src="images/peanuts.png">
          </div>
       </div>
     </container>`);
  allergryContent++;
 }
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
          <span style="font-weight: 400"> 
      		 Not recommended for babies under 6 months. 
           Food before one is just for fun.
           </span>
      	 </p>
       </div>
     </container>`);
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



