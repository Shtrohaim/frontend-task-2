window.onload = function() {
const openMenuButton = document.querySelector('.header__menu-burger');

  if(openMenuButton){
    let appBody = document.querySelector('.app');
    let nav = document.querySelector('.nav');
    let header = document.querySelector('.header');
    let menuBurger = document.querySelector('.header__span-burger');
    let menuLoaded = false;
    openMenuButton.addEventListener('click', function(e){
      if(menuLoaded){
        return;
      }else{
        menuLoaded = true;
        openMenuButton.classList.toggle('header__menu-burger--open');
        menuBurger.classList.toggle('header__span-burger--open');
        header.classList.toggle('header--active');
        appBody.classList.toggle('app--blocked');
         if(document.querySelector('.nav--active')){
          nav.classList.remove('nav--active');
          menuLoaded = false;
        }else{
          setTimeout(function() {
            nav.classList.add('nav--active');
            menuLoaded = false;
         }, 150);
        }
      }
   });
  }

 
  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop; 
    let header = document.querySelector('.header');
    console.log(scrolled);
    if(scrolled !== 0){
      header.classList.add('header--scrolled');
      header.classList.remove('header--notScrolled');
    }else{
      header.classList.add('header--notScrolled');
      header.classList.remove('header--scrolled');
    };
  
};


  const smoothLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const smoothFollowArrow = document.querySelector('.welcome__arrow-button[href^="#"]');
  const smoothLogoLink = document.querySelector('.header__logo-link');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        let appBody = document.querySelector('.app');
        let nav = document.querySelector('.nav');
        let menuBurger = document.querySelector('.header__span-burger');
        let header = document.querySelector('.header');
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          header.classList.remove('header--active');
          appBody.classList.remove('app--blocked');
          nav.classList.remove('nav--active');
          menuBurger.classList.remove('header__span-burger--open');
          openMenuButton.classList.remove('header__menu-burger--open');
      });
  };
  smoothFollowArrow.addEventListener('click', function(e){
    e.preventDefault();
    const id = smoothFollowArrow.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  })
  smoothLogoLink.addEventListener('click', function(e){
    let appBody = document.querySelector('.app');
    let nav = document.querySelector('.nav');
    let menuBurger = document.querySelector('.header__span-burger');
    let header = document.querySelector('.header');
    e.preventDefault();
    const id = smoothLogoLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    header.classList.remove('header--active');
    appBody.classList.remove('app--blocked');
    nav.classList.remove('nav--active');
    menuBurger.classList.remove('header__span-burger--open');
    openMenuButton.classList.remove('header__menu-burger--open');
  })

  window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('.nav__link');
    let fromTop = window.scrollY;
    navigationLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  });

  ymaps.ready(function () { 
 
    let myMap = new ymaps.Map("YMapsID", {
        center: [53.72171920587809, 91.44213052668228],
        zoom: 16,
    });
    let myPlacemark = new ymaps.Placemark([53.72171920587809, 91.44213052668228], {
       content: 'Правительство республики Хакасии, Ленина просп., 67, Абакан, Респ. Хакасия, 655017',
       balloonContent: 'Правительство республики Хакасии, Ленина просп., 67, Абакан, Респ. Хакасия, 655017',
    });
    myMap.geoObjects.add(myPlacemark);
    
});

const showMoreTours = document.querySelector('.tours__show-more');

if(showMoreTours){

  const allTours = document.querySelectorAll('.all-tours');

  showMoreTours.addEventListener('click', (e) => handleToggleItemsButtonClick(allTours[0], e));
}
 
function handleToggleItemsButtonClick(allToursItem, pointerEvent){
  if(pointerEvent.currentTarget.innerText === 'Больше туров'){

    pointerEvent.currentTarget.innerText = 'Меньше туров';
    allToursItem.classList.add('all-tours--all-visible');
  } else{
    pointerEvent.currentTarget.innerText = 'Больше туров';
    allToursItem.classList.remove('all-tours--all-visible');
  }
}

const firstSightMore = document.getElementById('info1');
const secondSightMore = document.getElementById('info2');
const thirdSightMore = document.getElementById('info3');

  if(firstSightMore){
    let firstSight = document.getElementById('sightseen1');
    firstSightMore.addEventListener('click', function(){
      firstSight.classList.toggle('sightseen--active');
    });
  }
  if(secondSightMore){
    let secondSight = document.getElementById('sightseen2');
    secondSightMore.addEventListener('click', function(){
      secondSight.classList.toggle('sightseen--active');
    });
  }
  if(thirdSightMore){
    let thirdSight = document.getElementById('sightseen3');
    thirdSightMore.addEventListener('click', function(){
      thirdSight.classList.toggle('sightseen--active');
    });
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
}


