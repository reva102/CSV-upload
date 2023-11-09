const sideNavbar = document.querySelector('.side-navbar')
const darkBg = document.querySelector('.dark-bg');
const userSection = document.querySelector('.user-section');

function handleClicks(e){
  let fetchId = e.target.id;
  let fetchClass = e.target.className;
  
  console.log("Class: ", fetchClass);
  console.log("Id:", fetchId);
  
  if(fetchClass == 'dark-bg'){
    closeSideBar();
    
  }
  
}

function openSideNavbar(){
  sideNavbar.style.width = '200px';
  darkBg.style.display = 'block'
  document.body.style.overflowY = 'hidden';
}

function closeSideBar(){
  sideNavbar.style.width = '0'
  darkBg.style.display = 'none'
  document.body.style.overflowY = 'scroll';

}


document.addEventListener('click', handleClicks)