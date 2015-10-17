function getFirstChild(parent){
    var ele;
    for(var i=0; i<parent.childNodes.length; i++){
        if(parent.childNodes[i].nodeType == 1){
            ele = parent.childNodes[i];
            break;
        }
    }
    return ele;
}
function getLastChild(parent){
    var ele;
    for(var i=parent.childNodes.length-1; i>=0; i--){
        if(parent.childNodes[i].nodeType == 1){
            ele = parent.childNodes[i];
            break;
        }
    }
    return ele;
}
function getChild(parent,index){
    var ele;
    var num = -1;
    for(var i=0; i<parent.childNodes.length; i++){
        if(parent.childNodes[i].nodeType == 1){
            num ++;
            if(num == index){
                ele = parent.childNodes[i];
                break;
            }
        }
    }
    return ele;
}
if (!("classList" in document.documentElement)) {//IE9一下兼容classList
        Object.defineProperty(HTMLElement.prototype, 'classList', {
            get: function() {
                var self = this;
                function update(fn) {
                    return function(value) {
                        var classes = self.className.split(/\s+/g),
                            index = classes.indexOf(value);
                        
                        fn(classes, index, value);
                        self.className = classes.join(" ");
                    }
                }
                
                return {                    
                    add: update(function(classes, index, value) {
                        if (!~index) classes.push(value);
                    }),
                    
                    remove: update(function(classes, index) {
                        if (~index) classes.splice(index, 1);
                    }),
                    
                    toggle: update(function(classes, index, value) {
                        if (~index)
                            classes.splice(index, 1);
                        else
                            classes.push(value);
                    }),
                    
                    contains: function(value) {
                        return !!~self.className.split(/\s+/g).indexOf(value);
                    },
                    
                    item: function(i) {
                        return self.className.split(/\s+/g)[i] || null;
                    }
                };
            }
        });
}
;
//导航栏置顶
var nav=document.getElementById("nav");
var carousel=document.getElementById("carousel-bg");
var index=0;
var time;
var animated;
window.onscroll=function(){
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (window.innerWidth) var winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth)) var winWidth = document.body.clientWidth;
    if(winWidth>800){
        if(osTop>25){
        nav.style.position="fixed";
        nav.style.top=0;
        carousel.style.marginTop=95+"px";
        }else{
            nav.style.position="relative";
            carousel.style.marginTop=0;
        }
    }
    if(osTop>600){
        daysTime=setInterval("numberChange(days)",20);
        clientsTime=setInterval("numberChange(clients)",20);
        problmesTime=setInterval("numberChange(problmes)",20);
        teamTime=setInterval("numberChange(team)",20);
    }
}
//主页轮播
var carouselList=document.getElementById("carousel-list");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var pictureButton=document.getElementById("picture-button").getElementsByTagName("div");
var allList = carouselList.getElementsByTagName("li");
var allDiv =document.getElementById("carousel-bg").getElementsByTagName("div");
var pictureList= new Array();
for(var i=0,k=0;i<allList.length;i++){
    if(allList[i].className){
        pictureList[k]=allList[i];
        k++;
    }
}
var animateImg1=pictureList[0].getElementsByTagName("div");
var h1=pictureList[0].getElementsByTagName("h2");
var p1=pictureList[0].getElementsByTagName("p");
var a1=pictureList[0].getElementsByTagName("a");
var span1=pictureList[0].getElementsByTagName("span");
var animateImg2=pictureList[1].getElementsByTagName("div");
var h2=pictureList[1].getElementsByTagName("h2");
var p2=pictureList[1].getElementsByTagName("p");
var span2=pictureList[1].getElementsByTagName("span");
var animateImg3=pictureList[2].getElementsByTagName("div");
var a3=pictureList[2].getElementsByTagName("a");
var span3=pictureList[2].getElementsByTagName("span");
var textList=pictureList[2].getElementsByTagName("li");
function showSlideOne(){
    animated=true;
    allDiv[0].classList.add("show-picture-1");
    setTimeout('animateImg1[0].classList.add("show-picture-1");',500);
    setTimeout('allDiv[0].classList.remove("show-picture-1");allDiv[0].classList.add("img-on");',1000);
    setTimeout('h1[0].classList.add("show-text-top-1");',1300);
    setTimeout('animateImg1[0].classList.remove("show-picture-1");animateImg1[0].classList.add("img-on");',1500);
    setTimeout('p1[0].classList.add("show-text-left-1");',2000);
    setTimeout('h1[0].classList.remove("show-text-top-1");h1[0].classList.add("img-on");',2300);
    setTimeout('a1[0].classList.add("show-text-bottom-1");',2500);
    setTimeout('p1[0].classList.remove("show-text-left-1");p1[0].classList.add("img-on");',3000);
    setTimeout('span1[0].classList.add("show-picture-1");',3300);
    setTimeout('a1[0].classList.remove("show-text-bottom-1");a1[0].classList.add("img-on");',3500);
    setTimeout('span1[1].classList.add("show-picture-1");',4000);
    setTimeout('span1[0].classList.remove("show-picture-1");span1[0].classList.add("img-on");',4300);
    setTimeout('span1[2].classList.add("show-picture-1");',4800);
    setTimeout('span1[1].classList.remove("show-picture-1");span1[1].classList.add("img-on");',5000);
    setTimeout('span1[2].classList.remove("show-picture-1");span1[2].classList.add("img-on");animated=false;',5800);
}
function hideSlideOne(){
    allDiv[0].classList.add("hide-picture-1");
    animateImg1[0].classList.add("hide-picture-1");
    h1[0].classList.add("hide-text-top-1");
    p1[0].classList.add("hide-text-left-1");
    a1[0].classList.add("hide-text-bottom-1");
    span1[0].classList.add("hide-picture-1");
    span1[1].classList.add("hide-picture-1");
    span1[2].classList.add("hide-picture-1");
    setTimeout(function(){
        allDiv[0].classList.remove("hide-picture-1");
        animateImg1[0].classList.remove("hide-picture-1");
        h1[0].classList.remove("hide-text-top-1");
        p1[0].classList.remove("hide-text-left-1");
        a1[0].classList.remove("hide-text-bottom-1");
        span1[0].classList.remove("hide-picture-1");
        span1[1].classList.remove("hide-picture-1");
        span1[2].classList.remove("hide-picture-1");
        allDiv[0].classList.remove("img-on");
        animateImg1[0].classList.remove("img-on");
        h1[0].classList.remove("img-on");
        p1[0].classList.remove("img-on");
        a1[0].classList.remove("img-on");
        span1[0].classList.remove("img-on");
        span1[1].classList.remove("img-on");
        span1[2].classList.remove("img-on");
    },1000);
}
function showSlideTwo(){
    animated=true;
    allDiv[2].classList.remove("img-on");
    animateImg3[0].classList.remove("img-on");
    for(var i=0;i<textList.length;i++) textList[i].classList.remove("img-on");
    for(var i=0;i<span3.length;i++) span3[i].classList.remove("img-on");
    a3[0].classList.remove("img-on");
    allDiv[1].classList.add("show-picture-1");
    setTimeout('h2[0].classList.add("show-text-top-2");',500);
    setTimeout('allDiv[1].classList.remove("show-picture-1");allDiv[1].classList.add("img-on");',1000);
    setTimeout('p2[0].classList.add("show-text-left-1");',1300);
    setTimeout('h2[0].classList.remove("show-text-top-2");h2[0].classList.add("img-on");',1500);
    setTimeout('animateImg2[0].classList.add("show-picture-2");',2000);
    setTimeout('p2[0].classList.remove("show-text-left-1");p2[0].classList.add("img-on");',2300);
    setTimeout('animateImg2[1].classList.add("show-picture-2");',2500);
    setTimeout('animateImg2[0].classList.remove("show-picture-2");animateImg2[0].classList.add("img-on");',3000);
    setTimeout('animateImg2[2].classList.add("show-picture-2");',3300);
    setTimeout('animateImg2[1].classList.remove("show-picture-2");animateImg2[1].classList.add("img-on");',3500);
    setTimeout('span2[0].classList.add("show-picture-1");',4000);
    setTimeout('animateImg2[2].classList.remove("show-picture-2");animateImg2[2].classList.add("img-on");',4300);
    setTimeout('span2[1].classList.add("show-picture-1");',4800);
    setTimeout('span2[0].classList.remove("show-picture-1");span2[0].classList.add("img-on");',5000);
    setTimeout('span2[2].classList.add("show-picture-1");',5500);
    setTimeout('span2[1].classList.remove("show-picture-1");span2[1].classList.add("img-on");',5800);
    setTimeout('span2[2].classList.remove("show-picture-1");span2[2].classList.add("img-on");animated=false',6500); 
}
function hideSlideTwo(){
    allDiv[1].classList.add("hide-picture-1");
    animateImg2[0].classList.add("hide-picture-2");
    animateImg2[1].classList.add("hide-picture-2");
    animateImg2[2].classList.add("hide-picture-2");
    h2[0].classList.add("hide-text-top-2");
    p2[0].classList.add("hide-text-left-2");
    span2[0].classList.add("hide-picture-1");
    span2[1].classList.add("hide-picture-1");
    span2[2].classList.add("hide-picture-1");
    setTimeout(function(){
        allDiv[1].classList.remove("hide-picture-1");
        animateImg2[0].classList.remove("hide-picture-2");
        animateImg2[1].classList.remove("hide-picture-2");
        animateImg2[2].classList.remove("hide-picture-2");
        h2[0].classList.remove("hide-text-top-2");
        p2[0].classList.remove("hide-text-left-2");
        span2[0].classList.remove("hide-picture-1");
        span2[1].classList.remove("hide-picture-1");
        span2[2].classList.remove("hide-picture-1");
        allDiv[1].classList.remove("img-on");
        animateImg2[0].classList.remove("img-on");
        animateImg2[1].classList.remove("img-on");
        animateImg2[2].classList.remove("img-on");
        h2[0].classList.remove("img-on");
        p2[0].classList.remove("img-on");
        span2[0].classList.remove("img-on");
        span2[1].classList.remove("img-on");
        span2[2].classList.remove("img-on");
    },1000);
}
function showSlideThree(){
    animated=true;
    setTimeout('animateImg3[0].classList.add("show-picture-2");',500);
    setTimeout('allDiv[2].classList.remove("show-picture-1");allDiv[2].classList.add("img-on");',1000);
    setTimeout('textList[0].classList.add("show-text-list");',1300);
    setTimeout('animateImg3[0].classList.remove("show-picture-2");animateImg3[0].classList.add("img-on");',1500);
    setTimeout('textList[1].classList.add("show-text-list");',1800);
    setTimeout('textList[0].classList.remove("show-text-list");textList[0].classList.add("img-on");textList[2].classList.add("show-text-list");',2300);
    setTimeout('textList[1].classList.remove("show-text-list");textList[1].classList.add("img-on");textList[3].classList.add("show-text-list");',2800);
    setTimeout('textList[2].classList.remove("show-text-list");textList[2].classList.add("img-on");textList[4].classList.add("show-text-list");',3300);
    setTimeout('textList[3].classList.remove("show-text-list");textList[3].classList.add("img-on");span3[0].classList.add("show-picture-1");',3800);
    setTimeout('textList[4].classList.remove("show-text-list");textList[4].classList.add("img-on");span3[1].classList.add("show-picture-1");',4300);
    setTimeout('span3[0].classList.remove("show-picture-1");span3[0].classList.add("img-on");span3[2].classList.add("show-picture-1");',4800);
    setTimeout('span3[1].classList.remove("show-picture-1");span3[1].classList.add("img-on");span3[3].classList.add("show-picture-1");',5300);
    setTimeout('span3[2].classList.remove("show-picture-1");span3[2].classList.add("img-on");span3[4].classList.add("show-picture-1");',5800);
    setTimeout('span3[3].classList.remove("show-picture-1");span3[3].classList.add("img-on");a3[0].classList.add("show-text-bottom-2");',6300);
    setTimeout('span3[4].classList.remove("show-picture-1");span3[4].classList.add("img-on");',6800);
    setTimeout('a3[0].classList.remove("show-text-bottom-2");a3[0].classList.add("img-on");animated=false;',7300);   
}
function hideSlideThree(){
    allDiv[2].classList.add("hide-picture-1");
    animateImg3[0].classList.add("hide-picture-2");
    for(var i=0;i<textList.length;i++) textList[i].classList.add("hide-text-list");
    for(var i=0;i<span3.length;i++) span3[i].classList.add("hide-picture-1");
    a3[0].classList.add("hide-text-bottom-2");
    setTimeout(function(){
        allDiv[2].classList.remove("hide-picture-1");
        animateImg3[0].classList.remove("hide-picture-2");
        for(var i=0;i<textList.length;i++) textList[i].classList.remove("hide-text-list");
        for(var i=0;i<span3.length;i++) span3[i].classList.remove("hide-picture-1");
        a3[0].classList.remove("hide-text-bottom-2");
        allDiv[2].classList.remove("img-on");
        animateImg3[0].classList.remove("img-on");
        for(var i=0;i<textList.length;i++) textList[i].classList.remove("img-on");
        for(var i=0;i<span3.length;i++) span3[i].classList.remove("img-on");
        a3[0].classList.remove("img-on");
    },1000);
}
function showButton(){
     for(var i=0;i<pictureButton.length;i++){
         if (pictureButton[i].className == "on"){
             pictureButton[i].className ="";
             break;
         }
     }
     pictureButton[index].className = "on";
}
function resertSlideOne(){
    animateImg1[0].classList.remove("img-on");
    h1[0].classList.remove("img-on");
    p1[0].classList.remove("img-on");
    a1[0].classList.remove("img-on");
    span1[0].classList.remove("img-on");
    span1[1].classList.remove("img-on");
    span1[2].classList.remove("img-on");
}
function resertSlideTwo(){
    allDiv[1].classList.remove("img-on");
    animateImg2[0].classList.remove("img-on");
    animateImg2[1].classList.remove("img-on");
    animateImg2[2].classList.remove("img-on");
    h2[0].classList.remove("img-on");
    p2[0].classList.remove("img-on");
    span2[0].classList.remove("img-on");
    span2[1].classList.remove("img-on");
    span2[2].classList.remove("img-on");
}
function resertSlideThree(){
    allDiv[2].classList.remove("img-on");
    animateImg3[0].classList.remove("img-on");
    for(var i=0;i<textList.length;i++) textList[i].classList.remove("img-on");
    for(var i=0;i<span3.length;i++) span3[i].classList.remove("img-on");
    a3[0].classList.remove("img-on");
}
function nextAnimate(index){
    switch(index){
        case 1:
        carouselList.className="list-2";
        hideSlideOne();
        resertSlideTwo();
        showSlideTwo();
        break;
        case 2:
        carouselList.className="list-3";
        hideSlideTwo();
        resertSlideThree();
        showSlideThree();
        break;
        case 0:
        carouselList.className="list-1";
        hideSlideThree();
        resertSlideOne();
        showSlideOne();
        default:break;
    }
}
function prevAnimate(index){
    switch(index){
        case 2:
        carouselList.className="list-3";
        hideSlideOne();
        resertSlideThree();
        showSlideThree();
        break;
        case 0:
        carouselList.className="list-1";
        hideSlideTwo();
        resertSlideOne();
        showSlideOne();
        break;
        case 1:
        carouselList.className="list-2";
        hideSlideThree();
        resertSlideTwo();
        showSlideTwo();
        default:break;
    }
}
function buttonAnimate(activeIndex,targetIndex){
    switch(activeIndex){
        case 0:
        hideSlideOne();
        break;
        case 1:
        hideSlideTwo();
        break;
        case 2:
        hideSlideThree();
        break;
        default:break;
    }
    switch(targetIndex){
        case 0:
        carouselList.className="list-1";
        resertSlideOne();
        showSlideOne();
        break;
        case 1:
        carouselList.className="list-2";
        resertSlideTwo();
        showSlideTwo();
        break;
        case 2:
        carouselList.className="list-3";
        resertSlideThree();
        showSlideThree();
        break;
        default:break;
    }
}
next.onclick=function(){
        if(index==2) index=0;
        else index+=1;
        nextAnimate(index);
        showButton();
}
prev.onclick=function(){
        if(index==0) index=2;
        else index-=1;
        prevAnimate(index);
        showButton();
}
//循环播放
// function play(){
//     time=setInterval(function(){
//         next.onclick();
//     },10000)
// }
// function stop(){
//     clearInterval(time);
// }
//点击圆圈切换
for(var i=0;i<pictureButton.length;i++){
    pictureButton[i].onclick = function(){
        if (this.className == "on"){
            return;
        }
        else{
            var myIndex = parseInt(this.getAttribute("index")); 
            buttonAnimate(index,myIndex);
            index = myIndex;
            showButton();
        }
    }
}
showSlideOne();
// play();
// carousel.onmouseover=stop;
// carousel.onmouseout=play;
// next.onmouseover=stop;
// next.onmouseout=play;
// prev.onmouseover=stop;
// prev.onmouseout=play;
//数字变换
var days=document.getElementById("days");
var clients=document.getElementById("clients");
var problmes=document.getElementById("problmes");
var team=document.getElementById("team");
function numberChange(element){
    var i=parseInt(element.innerHTML);
    if(element==clients){
        i+=3;
        element.innerHTML=i+"+";
        if(i>=176){
            element.innerHTML=176+"+";
            clearInterval(clientsTime);
        }
    }
    else if(element==days){
        i+=5;
        element.innerHTML=i;
        if(i>=365){
            element.innerHTML=365;
            clearInterval(daysTime);
        }
    }
    else if(element==problmes){
        i+=45;
        element.innerHTML=i;
        if(i>=2813){
            element.innerHTML=2813;
            clearInterval(problmesTime);
        }
    }
    else if(element==team){
        i+=2;
        element.innerHTML=i;
        if(i>=129){
            element.innerHTML=129;
            clearInterval(teamTime);
        }
    }
}
var daysTime;
var clientsTime;
var problmesTime;
var teamTime;
//三角变换
var angleDiv=document.getElementById("angle-list");
var angleList=angleDiv.getElementsByTagName("li");
var angleWidth=angleList[0].offsetWidth;
var angleHeight=angleList[0].offsetHeight;
var angle=angleDiv.getElementsByTagName("div");
for(var i=0;i<angle.length;i++){
    if(angle[i].className=="angle"){
        angle[i].style.borderBottom=angleHeight/2+"px solid #65c5bd";
        angle[i].style.borderLeft=angleWidth/2+"px solid transparent";
        angle[i].style.borderRight=angleWidth/2+"px solid transparent";
        angle[i].style.borderTop=angleHeight/2+"px solid transparent";
    }
}
//文字的轮播
var textButton = document.querySelectorAll("#text-button span");
var groupText = document.getElementById("text-carousel");
function nextGroup(){
        var firstEle = groupText.removeChild(getFirstChild(groupText));
        groupText.appendChild(firstEle);
        groupText.classList.add("next-group");
        setTimeout('groupText.classList.remove("next-group");',500);
}
function prevGroup() {
        var lastEle = groupText.removeChild(getLastChild(groupText));
        groupText.insertBefore(lastEle, getFirstChild(groupText));
        groupText.classList.add("prev-group");
        setTimeout('groupText.classList.remove("prev-group");',500);
 }
for(var k=0; k<textButton.length; k++){
    	var activeIndex;
    	if(textButton[k].classList.contains("on")) activeIndex=k;
    	textButton[k].onclick=(function(k){
    		return function(){
    			textButton[activeIndex].classList.remove("on");
    			textButton[k].classList.add("on");
    			var len = k-activeIndex < 0 ? activeIndex-k : k-activeIndex;
                if(k-activeIndex<0){
                    for(var i=0; i<len; i++){
                        prevGroup();
                    }
                }else{
                    for(var i=0; i<len; i++){
                        nextGroup();
                    }
                }
                activeIndex=k;
    		}
    	})(k);
}