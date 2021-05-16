const hambergerEl = document.querySelector(".hamberger");
const navEl = document.querySelector("#nav");
const btpEl = document.querySelector("#btn-btp");
const thankyou_modalEl = document.querySelector(".thankyou-modal");
const btn_thankyouEl = document.querySelector(".btn-thankyou");
const radioEl = document.forms["form"].elements["offer"];
const modalCardEl = document.querySelectorAll(".modal__card");
const pledgeEl = document.querySelectorAll(".pledge");
const modalBtnEl = document.querySelectorAll(".modal-btn");
const modalEl = document.querySelector(".modal");
const closeModalEl = document.querySelector(".close-modal");
const btnBookmarkEl = document.querySelector(".btn-bookmark");
const iconBookedEl = document.querySelector(".icon-booked");
document.getElementById("Mahogany_Special_Edition").disabled = true;


btnBookmarkEl.addEventListener('click', () =>{
    if(btnBookmarkEl.classList.contains("bookmared")){
        btnBookmarkEl.classList.remove("bookmared");
        btnBookmarkEl.innerHTML = "Bookmark";
    }
    else{
        btnBookmarkEl.innerHTML = "Bookmarked";
        btnBookmarkEl.classList.add("bookmared");
    }
    iconBookedEl.classList.toggle("filter-cyan");
})


hambergerEl.addEventListener('click', () =>{
    hambergerEl.classList.toggle('hamberger-close');
    navEl.classList.toggle('d-block');

});

btpEl.addEventListener('click', () => {
    modalEl.classList.add("d-block");
})

closeModalEl.addEventListener('click', () =>{
    modalEl.classList.remove("d-block");
})


for(let i = 0; i < modalBtnEl.length; i++){
    modalBtnEl[i].addEventListener('click', ()=> {
        console.log(modalBtnEl);
        thankyou_modalEl.classList.toggle("d-block");
        modalEl.classList.remove("d-block");
    })
}


btn_thankyouEl.addEventListener('click', () =>{
    thankyou_modalEl.classList.toggle("d-block");
})



for(let i = 0, max = radioEl.length; i < max; i++) { 
    radioEl[i].addEventListener('click', () =>{
        modalCardEl[i].classList.add("border-style");
        if(i !== 0){
            pledgeEl[i-1].classList.add("d-block");
        }
        for(let j = 0; j < pledgeEl.length; j++){
            if(j !== (i-1) && i !== 0){
                pledgeEl[j].classList.remove("d-block");
            }else if(i === 0){
                pledgeEl[j].classList.remove("d-block");
            }
        }
        
        for(let j = 0; j < modalCardEl.length; j++){
            if(i !== j){
                modalCardEl[j].classList.remove("border-style");
            }
        }
    }) 
}