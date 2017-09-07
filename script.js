
let collection = document.getElementsByClassName('navlink');
console.log(collection);
let arr = Array.from(collection);
arr.forEach((e,i) => {
  e.addEventListener('click',function() {
    $('.carousel').carousel(i);
    $('.carousel').carousel('pause')

  });

})
