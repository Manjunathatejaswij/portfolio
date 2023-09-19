let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
document.querySelector('body').classList.toggle('mobile-new-active');
this.classList.toggle('fa-xmark')




})


//type effet
let typed = new Typed('.auto-input',{

    strings:   ['FRONT-END-DEVELOPER!', 'UI DESIGENER','FREELANCER!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,

})