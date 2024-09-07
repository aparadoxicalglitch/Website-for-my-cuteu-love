var btn = document.getElementById("heartTxt");
var audio = new Audio('music/music.mp3'); // Create a new Audio object
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if(imageIndex >= len){
        imageIndex = 0;
    }

}

function play(){
    if(t == 0){
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
        audio.play(); // Play audio when function is first called
        document.getElementById("button").style.display = "none"; // Hide the button
        document.getElementById("clickMe").style.display = "none"; // Hide the text
    }
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    if(t == 0){
        setInterval(showImage, 2500);
    }
    t++;
}



function preshowImage(){
    document.getElementById("imgTxt").style.opacity = 0;
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if(imageIndex >= len){
        imageIndex = 0;
    }
}

function buttonFadeIn(){
    if(btnVal < 1){
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    }
    else{
        clearInterval(buttonInterval);
        if(ok == 3){
            ok += 1;
        }
    }
}

function event(){
    showImageInterval = setInterval(preshowImage, 100);
    imgInterval = setInterval(function (){
        if(ok == 3){
            setTimeout(function(){
                buttonInterval = setInterval(buttonFadeIn, 50);
            }, 1500);
            clearInterval(imgInterval);
        }
    }, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
