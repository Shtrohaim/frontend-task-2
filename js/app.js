const openMenuButton = document.querySelector('.header__menuBurger');

  if(openMenuButton){
    let appBody = document.querySelector('.app');
    let nav = document.querySelector('.nav');
    let headerWrapper = document.querySelector('.header__wrapper');
    let menuBurger = document.querySelector('.header__spanBurger');
    let menuLoaded = false;
    openMenuButton.addEventListener('click', function(e){
      if(menuLoaded){
        return;
      }else{
        menuLoaded = true;
        openMenuButton.classList.toggle('header__menuBurger--open');
        menuBurger.classList.toggle('header__spanBurger--open');
        headerWrapper.classList.toggle('header__wrapper--active');
        appBody.classList.toggle('app--blocked');
         if(document.querySelector('.nav--active')){
          nav.classList.remove('nav--active');
          menuLoaded = false;
        }else{
          setTimeout(function() {
            nav.classList.add('nav--active');
            menuLoaded = false;
         }, 350);
        }
      }
   });
  }

 
  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop; 
    let headerWrapper = document.querySelector('.header__wrapper');
    console.log(scrolled);
    if(scrolled !== 0){
      headerWrapper.classList.add('header__wrapper--scrolled');
      headerWrapper.classList.remove('header__wrapper--notScrolled');
    }else{
      headerWrapper.classList.add('header__wrapper--notScrolled');
      headerWrapper.classList.remove('header__wrapper--scrolled');
    };
  
};


  const smoothLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const smoothFollowArrow = document.querySelector('.welcome__arrowLink[href^="#"]');
  const smoothLogoLink = document.querySelector('.header__logoLink');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        let appBody = document.querySelector('.app');
        let nav = document.querySelector('.nav');
        let menuBurger = document.querySelector('.header__spanBurger');
        let headerWrapper = document.querySelector('.header__wrapper');
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          headerWrapper.classList.remove('header__wrapper--active');
          appBody.classList.remove('app--blocked');
          nav.classList.remove('nav--active');
          menuBurger.classList.remove('header__spanBurger--open');
          openMenuButton.classList.remove('header__menuBurger--open');
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
    let menuBurger = document.querySelector('.header__spanBurger');
    let headerWrapper = document.querySelector('.header__wrapper');
    e.preventDefault();
    const id = smoothLogoLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    headerWrapper.classList.remove('header__wrapper--active');
    appBody.classList.remove('app--blocked');
    nav.classList.remove('nav--active');
    menuBurger.classList.remove('header__spanBurger--open');
    openMenuButton.classList.remove('header__menuBurger--open');
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

const showMoreTours = document.querySelector('.tours__showMore');
const hideToursButton = document.querySelector('.tours__hideTours');
if(showMoreTours){
  let hiddenTour3 = document.querySelector('.tour3');
  let hiddenTour4 = document.querySelector('.tour4');
  let hiddenTour5 = document.querySelector('.tour5');
  let hiddenTour6 = document.querySelector('.tour6');
  showMoreTours.addEventListener('click', function(e){
    hiddenTour3.style.display = 'flex';
    hiddenTour4.style.display = 'flex';
    hiddenTour5.style.display = 'flex';
    hiddenTour6.style.display = 'flex';
    showMoreTours.style.display = 'none';
    hideToursButton.style.display = 'block';
 });
}
  if(hideToursButton){
    let hiddenTour3 = document.querySelector('.tour3');
    let hiddenTour4 = document.querySelector('.tour4');
    let hiddenTour5 = document.querySelector('.tour5');
    let hiddenTour6 = document.querySelector('.tour6');
    hideToursButton.addEventListener('click', function(e){
      hiddenTour3.style.display = 'none';
      hiddenTour4.style.display = 'none';
      hiddenTour5.style.display = 'none';
      hiddenTour6.style.display = 'none';
      showMoreTours.style.display = 'block';
      hideToursButton.style.display = 'none';
  });
}

const firstSightMore = document.querySelector('.firstSight__info');
const secondSightMore = document.querySelector('.secondSight__info');
const thirdSightMore = document.querySelector('.thirdSight__info');

  if(firstSightMore){
    let firstSight = document.querySelector('.firstSight');
    firstSightMore.addEventListener('click', function(){
      firstSight.classList.toggle('firstSight--active');
    });
  }
  if(secondSightMore){
    let secondSight = document.querySelector('.secondSight');
    secondSightMore.addEventListener('click', function(){
      secondSight.classList.toggle('secondSight--active');
    });
  }
  if(thirdSightMore){
    let thirdSight = document.querySelector('.thirdSight');
    thirdSightMore.addEventListener('click', function(){
      thirdSight.classList.toggle('thirdSight--active');
    });
  }

