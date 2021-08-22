$(document).ready(function() {
    var currentFloor = 2;
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var floorPath = $('.home-image path');
    var modal = $(".modal");
    var modalClose = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    floorPath.on('mouseover', function() {
        currentFloor = $(this).attr('data-floor');
        floorPath.removeClass('current-floor');
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', function() {
        usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        $('.counter').text(usCurrentFloor);
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        toggleModal();
    });

    modalClose.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    counterUp.on('click', function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function() {
        if (currentFloor > 02) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});