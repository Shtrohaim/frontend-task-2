window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop; 
    if(scrolled !== 0){
      document.querySelector('.header__wrapper').style.backgroundColor = 'rgba(17, 17, 17, 1)';
    }else{
      document.querySelector('.header__wrapper').style.backgroundColor = 'rgba(17, 17, 17, 0)';
    };
};

const openModalButton = document.querySelector('.header__menuBurger');
const closeModalButton = document.querySelector('.modalWindow__closeButton');

  if(openModalButton){
    let modalWindow = document.querySelector('.modalWindow');
    let appBody = document.querySelector('.app');
    let header = document.querySelector('.header');
    openModalButton.addEventListener('click', function(e){
      modalWindow.classList.add('modalWindow--active');
      header.style.visibility = 'hidden';
      appBody.style.overflow = 'hidden';
   });
  }

  if(closeModalButton){
    let modalWindow = document.querySelector('.modalWindow');
    let appBody = document.querySelector('.app');
    let header = document.querySelector('.header');
    closeModalButton.addEventListener('click', function(e){
      modalWindow.classList.remove('modalWindow--active');
      header.style.visibility = 'visible'
      appBody.style.overflow = 'visible';
   });
  }

  const smoothLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const smoothFollowArrow = document.querySelector('.welcome__arrowLink[href^="#"]');
  const smoothLogoLink = document.querySelector('.header__logoLink');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        let modalWindow = document.querySelector('.modalWindow');
        let appBody = document.querySelector('.app');
        let header = document.querySelector('.header');
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          modalWindow.classList.remove('modalWindow--active');
          header.style.visibility = 'visible'
          appBody.style.overflow = 'visible';
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
    e.preventDefault();
    const id = smoothLogoLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
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

window.onbeforeunload = function () {
 window.scrollTo(0, 0);
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


