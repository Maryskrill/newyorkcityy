window.onload = function() {
    let body = document.body;
    let r = Math.floor (Math.random() * 255);
    let g = Math.floor (Math.random() * 255);
    let b = Math.floor (Math.random() * 255);


    body.style.setProperty('background-color','rgb('+r+','+g+','+b+')');

    let title = document.querySelector('.title-city');

    title.addEventListener('mouseover',function(){
        let red = Math.floor (Math.random() * 255);
        let green = Math.floor (Math.random() * 255);
        let blue = Math.floor (Math.random() * 255);
        title.style.setProperty('color','rgb('+red+','+green+','+blue+')');
     })

    let button =  document.querySelector('.title-next')
    let image = 1

    

    let today = new Date();

    let time = today.getHours() + ':' + today.getMinutes();

   
}





let buttonImage = document.querySelector('.button-text')


