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