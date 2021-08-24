$(document).ready(function () {
  var currentFloor = 2
  var floorPath = $('.home-image path')
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-qown');
  var modal = $('.modal');
  var modalCloseBtn = $('.modal-close-btn');

  floorPath.on('click', toggleModal)

  modalCloseBtn.on('click', toggleModal)

  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor')
      currentFloor = $(this).attr('data-floor');
      $('.counter').text(currentFloor)
    })

    counterUp.on('click', function () {
      if ( currentFloor < 18 ) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass('current-floor')
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        
      }
    })

    counterDown.on('click', function () {
      if ( currentFloor > 2 ) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass('current-floor')
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      }
    })

    function toggleModal() {
      modal.toggleClass('is-open')
      $('.modal-counter').text(currentFloor)
    }
});


const flat = document.querySelectorAll('.flats > path')
const flatLink = document.querySelectorAll('.flat-link');
const reversFlat = [...flatLink].reverse();

flat.forEach((elem, i) => {
    
  elem.addEventListener('mouseover', () => {
    reversFlat[i].classList.toggle('flat-link-js');
  })

  elem.addEventListener('mouseout', () => {
    reversFlat[i].classList.toggle('flat-link-js');
  })
  
})

reversFlat.forEach((elem, i) => {
  elem.addEventListener('mouseover', () => {
    flat[i].classList.toggle('visible'); 
  })

  elem.addEventListener('mouseout', () => {
    flat[i].classList.toggle('visible'); 
  })

})


