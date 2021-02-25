//menubar
const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () =>{
    ul.classList.toggle('show');
});

//modal container;
const open = document.getElementById('open');
const close = document.getElementById('close');
const modalcontainer = document.getElementById('modalContainer');
const noreward = document.getElementById('noreward');
const modalcontainer2 = document.getElementById('Modalcontainer2');
const closereward = document.getElementById('closereward');
const bamboo = document.getElementById('bamboo');
const blackedition = document.getElementById('blackedition');

const bambooleft1 = document.getElementById('bambooleft1');
const backleft1 = document.getElementById('backleft1');


open.addEventListener('click', () => {
    modalcontainer.classList.add('show');
});

close.addEventListener('click', () =>{
modalcontainer.classList.remove('show');
});

noreward.addEventListener('click', () => {
    modalcontainer2.classList.add('show');
    if(count === 100){
        count = 100;
    }else{
        count++;
        bar.style.width = count + '%';
        bar.style.backgroundColor = 'hsl(176,50%,47%)';
        backer.innerHTML = count;
    }
});

closereward.addEventListener('click', () => {
    modalcontainer2.classList.remove('show');
modalcontainer.classList.remove('show');
});

//variable for the count 
var count = 0;
var z = 64;
var i = 101;

bamboo.addEventListener('click', ()=> {
modalcontainer2.classList.add('show');
if(i <= 0){
    i = 0;
    }else{
       i--;
    }
    bambooleft1.innerHTML = i;

    if(count === 100){
        count = 100;
    }else{
        count++;
    bar.style.width = count + '%' ;
    bar.style.backgroundColor = 'hsl(176,50%,47%)';
    backer.innerHTML = count;
    }
});


blackedition.addEventListener('click', ()=> {
modalcontainer2.classList.add('show');
if(count === 100){
    count = 100;
}else{
    count++;
}
bar.style.width = count + '%';
bar.style.backgroundColor = 'hsl(176,50%,47%)';
backer.innerHTML = count;

if(z <= 0){
    z = 0;
    }else{
       z--;
    }
    blackleft1.innerHTML = z;
});


//each modal card 
function show1(){
    document.getElementById('reward1').style.display = "block";//reward 1 will be display by hiding other radio button card option with the reward
    document.getElementById('reward2').style.display ="none";//other reward will be display none when it is unselected
    document.getElementById('reward3').style.display = "none";
    document.getElementById('card').style.border = "2px solid lightblue";//when the selected radio button is clicked the border will show blue border 
    document.getElementById('card2').style.border = "1px solid grey";//other unselected radio button card will be in grey color
    document.getElementById('card3').style.border = "1px solid grey";
}

function show2(){
    document.getElementById('reward1').style.display = "none";
    document.getElementById('reward2').style.display ="block";
    document.getElementById('reward3').style.display = "none";
    document.getElementById('card').style.border = "1px solid grey";
    document.getElementById('card3').style.border = "1px solid grey";
    document.getElementById('card2').style.border = "2px solid lightblue";
}

function show3(){
    document.getElementById('reward3').style.display = "block";
    document.getElementById('reward1').style.display = "none";
    document.getElementById('reward2').style.display ="none";
    document.getElementById('card3').style.border = "2px solid lightblue";
    document.getElementById('card').style.border = "1px solid grey";
    document.getElementById('card2').style.border = "1px solid grey";
}


//progress bar on count
const aboutbtn = document.getElementById('aboutbutton');
const bambooleft = document.getElementById('bambooleft');
const bar = document.getElementById('bar');
const backer = document.getElementById('backer');
const backleft = document.getElementById('backleft');
const blackstand = document.getElementById('blackeditionbtn');

//progress count when user clicks on the selected reward
aboutbtn.addEventListener('click', () => {
     modalcontainer.classList.add('show');
   if(count === 100){
        count = 100;
    }else{
        count++;
    bar.style.width = count + '%' ;//progress bar will start to count 
    bar.style.backgroundColor = 'hsl(176,50%,47%)';//progressbar background color set 
    backer.innerHTML = count;//the user will able to see thier how many backers they have got so far.
    }

    if(i <= 0){
i = 0;
}else{
   i--;
}
bambooleft.innerHTML = i;
});

blackstand.addEventListener('click', () => {
     modalcontainer.classList.add('show');
if(count === 100){
    count = 100;
}else{
    count++;
    bar.style.width = count + '%';
bar.style.backgroundColor = 'hsl(176,50%,47%)';
backer.innerHTML = count;
}

if(z <= 0){
    z = 0;
    }else{
       z--;
    }
    blackleft.innerHTML = z;
});






