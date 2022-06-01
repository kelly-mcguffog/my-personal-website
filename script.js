const clickButtonLeft = document.getElementById('buttonLeft');


clickButtonLeft.addEventListener('click', function(){
    const backgroundText = document.getElementById('background');
    backgroundText.innerHTML="I am a Graphic Designer on the Corporate Affairs & Communications team at L'Or&eacute;al. I started working there after I graduated from Washington University in St. Louis in 2018.";
    clickButtonLeft.style.backgroundColor = "firebrick";
    clickButtonLeft.style.color = "white";
    clickButtonRight.style.backgroundColor = "white";
    clickButtonRight.style.color = "black";
    backgroundText.style.fontWeight = "300";
});

const clickButtonRight = document.getElementById('buttonRight');

clickButtonRight.addEventListener('click', function(){
    document.getElementById('background').innerHTML="I enjoy reading, watching tv, and spending time with friends and family. I love to ski and play golf, and I would like to say I am good at golf, but I am not...";
    clickButtonRight.style.backgroundColor = "firebrick";
    clickButtonRight.style.color = "white";
    clickButtonLeft.style.backgroundColor = "white";
    clickButtonLeft.style.color = "black";
});