const initSlider = () =>{
    const cardList = document.querySelector(".slider-wrapper .card-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=> {
            const direction = button.id ==="prev-slide" ? -1 : 1;
            const scrollAmount = cardList.clientWidth * direction;
            cardList.scrollBy({ left: scrollAmount, behavior: "smooth"});

        });
    });
}

window.addEventListener("load", initSlider);