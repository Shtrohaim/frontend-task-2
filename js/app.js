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
