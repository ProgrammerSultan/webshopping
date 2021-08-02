const navLinks = document.querySelector('.nav-links');
const Open = () =>{
    navLinks.classList.toggle('open') 
}

window.addEventListener('scroll', () =>{
   if(window.scrollY > 350){
    navLinks.classList.add('remove')
   }else{
    navLinks.classList.remove('remove')
   }
})



function scrollBehaviorFirst(){
    const ScrollProperty1 = document.getElementById('ScrollProperty1')
    const userPosition1 = ScrollProperty1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight/1.7;
    if(userPosition1 < screenPosition){
        ScrollProperty1.classList.add('addDisplay')
    }else{
        ScrollProperty1.classList.remove('addDisplay')
    }
 }
 window.addEventListener('scroll', scrollBehaviorFirst)


 function scrollBehaviorSecond(){
    const ScrollProperty2 = document.getElementById('ScrollProperty2')
    const userPosition2 = ScrollProperty2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight/1.6;
    if(userPosition2 < screenPosition){
        ScrollProperty2.classList.add('addDisplay')
    }else{
        ScrollProperty2.classList.remove('addDisplay')
    }
 }
 window.addEventListener('scroll', scrollBehaviorSecond)


 function scrollBehaviorThird(){
    const ScrollProperty3 = document.getElementById('ScrollProperty3')
    const userPosition3 = ScrollProperty3.getBoundingClientRect().top;
    const screenPosition = window.innerHeight/1.7;
    if(userPosition3 < screenPosition){
        ScrollProperty3.classList.add('addDisplay')
    }else{
        ScrollProperty3.classList.remove('addDisplay')
    }
 }
 window.addEventListener('scroll', scrollBehaviorThird)


                    //  scrolling button

const srollTop = () =>{ 
    window.scroll(0,0)
}

function scrollBtn(){

    const Scroll = document.getElementById('Scroll')
    
//     if(window.scrollY<=500){
//       Scroll.classList.remove('scrollButton')
//   }else{
//     Scroll.classList.add('scrollButton')
//   }

 window.scrollY<=500 ?  Scroll.classList.remove('scrollButton'):Scroll.classList.add('scrollButton');
}

window.addEventListener('scroll', scrollBtn)


// contact us section


function contactUs () {
    const mainContent = document.querySelector('#contact-us')
    const user = mainContent.getBoundingClientRect().top;
    const screen = window.innerHeight/1.7;

    if(user < screen){
        mainContent.classList.add('main-content-display')
    }else{
        mainContent.classList.remove('main-content-display')
    }
    
}

window.addEventListener('scroll', contactUs)

// order now
const resetAll = () => {
	let userInput = document.querySelectorAll('#inp');
    const textArea = document.getElementById("user")
     textArea.value = '';
	 userInput.value = '';
   }