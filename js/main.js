
 const hamburger=document.querySelector('.hamburger');
const navigationContainer=document.querySelector('.navigation');
hamburger.addEventListener('click',toggleNavigation);

const isMobile=/mobile/i.test(navigator.userAgent);
if(!isMobile){
   navigationContainer.classList.remove('minimize')
}
window.addEventListener('resize',()=>{
   if(!isMobile && navigationContainer.classList.contains('minimize')){
         navigationContainer.classList.remove('minimize')

   }
})
function toggleNavigation(){
   navigationContainer.classList.toggle('minimize');
}