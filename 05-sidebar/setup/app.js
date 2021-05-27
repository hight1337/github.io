const sideBarBtn = document.querySelector('.sidebar-toggle')
const sideBar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn');


sideBarBtn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
});