// Buy (giỏ hàng)
const Buy = document.querySelector('.js-buy')
       
function thongbaologin()
{
  window.alert("ĐĂNG NHẬP ĐỂ ORDER SẢN PHẨM");
}
Buy.addEventListener('click', thongbaologin)

// Modal login
const loGinnow = document.querySelector('.js-login-now')
const loGin = document.querySelector('.js-login')
const modalLogin = document.querySelector('.js-modal-login')
const modalCloselogin = document.querySelector('.js-modal-login-close')
const modalLogincontainer = document.querySelector('.js-modal-login-container')
// Hàm hiển thị modal (thêm class open vào modal)
function showLogin() {
    modalLogin.classList.add('open')
}
// Hàm ẩn modal (gỡ bỏ class open của modal)
function hideLogin() {
    modalLogin.classList.remove('open')
}
// Nghe hành vi click vào button
loGinnow.addEventListener('click', showRegister)
loGinnow.addEventListener('click', hideLogin)
loGin.addEventListener('click', showLogin)
modalCloselogin.addEventListener('click', hideLogin)
modalLogin.addEventListener('click', hideLogin)
modalLogincontainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// Modal register
const registerNow = document.querySelector('.js-register-now')
const regiSter = document.querySelector('.js-register')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
// Hàm hiển thị modal (thêm class open vào modal)
function showRegister() {
    modal.classList.add('open')
}
// Hàm ẩn modal (gỡ bỏ class open của modal)
function hideRegister() {
    modal.classList.remove('open')
}
// Nghe hành vi click vào button
registerNow.addEventListener('click', showLogin)
registerNow.addEventListener('click', hideRegister)
regiSter.addEventListener('click', showRegister)
modalClose.addEventListener('click', hideRegister)
modal.addEventListener('click', hideRegister)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// slideshow
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 3000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Root
const root = document.querySelector('.js-root')
const modlaRoot = document.querySelector('.js-modal-root')
const modalRootclose = document.querySelector('.js-modal-root-close')
// Hàm hiển thị modal (thêm class open vào modal)
function showModalroot() {
    modlaRoot.classList.add('open')
}
// Hàm ẩn modal (gỡ bỏ class open của modal)
function hidenModalroot() {
    modlaRoot.classList.remove('open')
}
// Nghe hành vi click vào button close
root.addEventListener('click', showModalroot)
modalRootclose.addEventListener('click', hidenModalroot)