let x = document.getElementById('containers');
let y = document.getElementById('skillls');

let project = document.getElementById('projects-header');

const tuyen = document.getElementById('reverse-animation');

// x.style.display = 'none'


document.body.addEventListener('scroll', function (){

  console.log(this.scrollTop);


  if(this.scrollTop > 20 && this.scrollTop < 1185){
    tuyen.style.display = 'inline-block';
  }else{
    tuyen.style.display = 'none';
  }

  if(this.scrollTop > 1000 && this.scrollTop < 2000){
    x.style.transform = 'translateX(0px)';
    y.style.transform = 'translateX(0px)';
  }else{
    x.style.transform = '';
    y.style.transform = '';
  }

  if(this.scrollTop > 2000){
    project.style.animation = 'animateHeader 5s ease-in-out'
  }else{
    project.style.animation = ''
  }
})



