function jumbotron_slider() {
    let position = 0;
    const container = $(".jumbotron__slider");
    const track = $(".jumbotron__track");
    const item = $(".jumbotron__slide");
    const btnPrev = $(".slider__left-arrow");
    const btnNext = $(".slider__right-arrow");
    const itemWidth = container.width();
    const movePosition = itemWidth;
    const dots = item.length;
    var currentDot = 1;

    $("#jumbotron_total_slide")[0].innerText = dots;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function () {
        position += movePosition;
        setPosition();
        currentDot--;
        checkBtns();
    });
    btnNext.click(function () {
        position -= movePosition;
        setPosition();
        currentDot++;
        checkBtns();
    });

    const setPosition = () => {
        track[0].style.transform = "translateX(" + position + "px)";
    };

    const checkBtns = () => {
        $("#jumbotron_current_slide")[0].innerText = currentDot;
        if (position <= -itemWidth * (item.length - 1)) {
            btnNext.prop("disabled", true);
            btnNext.addClass("arrow-disabled");
        } else {
            btnNext.prop("disabled", false);
            btnNext.removeClass("arrow-disabled");
        }
        if (position === 0) {
            btnPrev.prop("disabled", true);
            btnPrev.addClass("arrow-disabled");
        } else {
            btnPrev.prop("disabled", false);
            btnPrev.removeClass("arrow-disabled");
        }
    };
    checkBtns();
}

function gallery_slider() {
    let position = 0;
    const container = $(".gallery__slider");
    const track = $(".gallery__track");
    const item = $(".gallery__item");
    const btnPrev = $(".gallery__left-arrow");
    const btnNext = $(".gallery__right-arrow");
    const itemWidth = 550;
    const gap = 75;
    const movePosition = itemWidth + gap;
    const dots = Math.ceil(item.length / 3);
    var currentDot = 1;

    $("#gallery_total_slide")[0].innerText = dots;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function () {
        position += movePosition;
        setPosition();
        currentDot--;
        checkBtns();
    });
    btnNext.click(function () {
        position -= movePosition;
        setPosition();
        currentDot++;
        checkBtns();
    });

    const setPosition = () => {
        track[0].style.transform = `translateX(${position*3}px)`;
    };

    const checkBtns = () => {
        $("#gallery_current_slide")[0].innerText = currentDot;
        if (currentDot == dots) {
            btnNext.prop("disabled", true);
            btnNext.addClass("arrow-disabled");
        } else {
            btnNext.prop("disabled", false);
            btnNext.removeClass("arrow-disabled");
        }
        if (position === 0) {
            btnPrev.prop("disabled", true);
            btnPrev.addClass("arrow-disabled");
        } else {
            btnPrev.prop("disabled", false);
            btnPrev.removeClass("arrow-disabled");
        }
    };
    checkBtns();
}

$(document).ready(function () {
    jumbotron_slider();
    gallery_slider();
});
