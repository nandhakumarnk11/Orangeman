const filterbutton = document.querySelectorAll('.filter-buttons button')
const filterablecards = document.querySelectorAll('.filterable-cards .card')

const filtercards = e =>{
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    
    filterablecards.forEach(card =>{
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="All"){
            card.classList.remove("hide");
        }
    })
}


filterbutton.forEach (button => button.addEventListener("click",filtercards))



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            
        }
    }
});






const scriptURL = 'https://script.google.com/macros/s/AKfycbxjnwpEn4RH_fceWq6Z1fYWDAeGgMCKV07qXQNXvBC4CVRmpC9A8ri9eUtJ2Ribc6SP/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "thanking for subcribe!!"
                setTimeout( function(){
                    msg.innerHTML = ""
                },1000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })



        AOS.init();