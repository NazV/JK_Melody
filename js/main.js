$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up"); /*Нашли кнопку с помощью Jquery и дали ей переменную*/
    var counterDown = $(".counter-down")
    var modal = $(".modal")
    var modalCloseButton = $(".modal-close-button")
    var viewFlatsButton = $(".view-flats")

    floorPath.on("mouseover", function () { /*При наведении курсора мышки меняется счетчик с номерами этажей*/
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    floorPath.on("click", toggleModal); /*при клике на этаж, вызывает окно*/

    modalCloseButton.on("click", toggleModal); /*клик на кнопку закрыть убирает окно*/ 

    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function () {  /*При наведении на кнопку вверх увеличивается номер этажа*/
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
            useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /*вешаем класс на какой-то конкретный этаж*/
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
            useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    function toggleModal() { //функция открыть-закрыть окно
        modal.toggleClass("is-open")
    }
});