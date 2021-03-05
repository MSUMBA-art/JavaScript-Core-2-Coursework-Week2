var blueBtn = document.querySelector('#blueBtn');
var orangeBtn = document.querySelector('#orangeBtn');
var greenBtn = document.querySelector('#greenBtn');

var jumbotron = document.querySelector('.jumbotron');
var donateBike = document.querySelector('#donate');
var volunteer = document.querySelector('#volunteer');

//adding click event listener blue button

blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBike.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "white";

});

//adding event listener click orange btn

orangeBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBike.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "#31b0d5";
});

//adding event listener click green btn

greenBtn.addEventListener('click', () => {
     jumbotron.style.backgroundColor = "#87ca8a";
     donateBike.style.backgroundColor = "#black";
     volunteer.style.backgroundColor = "#8c9c08";
})

