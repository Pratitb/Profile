//mobile menu---------------------------------------

var x = document.getElementById('myLinks');
function myFunction(){
    
    var icon = document.getElementsByClassName('icon');
    if(x.style.display ==='flex'){
        x.style.display = 'none';

    }
    else{
        x.style.display = 'flex';
    }
}
function hideMenu(){
    x.style.display = "none";
}
//Event listeners
x.addEventListener("click", hideMenu);

//mobile menu------------------------------------------------------------

//go to top button
// var topBtn = document.getElementById('top');
// var contain = document.getElementsByClassName('container').scrollTop;

// window.onscroll = function(){
//     scrollFunction()
// };

// function scrollFunction(){
//     if (document.contain > 20){
//         topBtn.style.display = 'block';
//     }
//     else{
//         topBtn.style.display = 'none';
//     }
// }

// function goToTop(){
//     document.contain = 0;
//     document.documentElement.scrollTop = 0;
// }

// topBtn.addEventListener('click', goToTop);
