const clickButtonLeft = document.getElementById('buttonLeft');


clickButtonLeft.addEventListener('click', function(){
    const backgroundText = document.getElementById('background');
    backgroundText.innerHTML="I am a Graphic Designer on the Corporate Affairs & Engagement team at L'Or&eacute;al. I started working there after I graduated from Washington University in St. Louis in 2018. I am responsible for creating communications for our internal and external facing channels and leading the creative vision for L'Or&eacute;al USA.<br/><br/>I became interested in programming during a summer internship, when I discovered there is a disconnect between design and web development. My boss at the time, an incredibly talented Graphic Designer, was limited because she didn't have the programming knowledge to build the websites she was wire framing. This is a common issue in the industry, and I don't want it to stand in my way. In a world surrounded by technology, I know how crucial these skills are for my success in the digital age.";
    backgroundText.style.fontSize="12px";
    clickButtonLeft.style.backgroundColor = "firebrick";
    clickButtonLeft.style.color = "white";
    clickButtonRight.style.backgroundColor = "white";
    clickButtonRight.style.color = "black";
    backgroundText.style.fontWeight = "300";
});

const clickButtonRight = document.getElementById('buttonRight');

clickButtonRight.addEventListener('click', function(){
    document.getElementById('background').innerHTML="I enjoy reading, watching tv, and spending time with friends and family. I love to ski and play tennis, and I wish I could say I am good at golf, but I am not...";
    clickButtonRight.style.backgroundColor = "firebrick";
    clickButtonRight.style.color = "white";
    clickButtonLeft.style.backgroundColor = "white";
    clickButtonLeft.style.color = "black";
});