window.onload = function() {
    console.log(8)
    let navId = document.getElementById('navId');
    let navLi = navId.getElementsByTagName('li');
    let navHide = document.getElementById('navHide');
    let hideUl = navHide.getElementsByTagName('ul');
    let navHideLi = navHide.getElementsByTagName('li');

    /* nav show hide*/
    function showAndhidden(init, showContent) {
        init.onmouseover = function () {
            showContent.style.display = 'block';
        }
        init.onmouseout = function () {
            showContent.style.display = 'none';
        }
        showContent.onmouseover = function () {
            showContent.style.display = 'block';
        }
        showContent.onmouseout = function () {
            showContent.style.display = 'none';
        }
    }
    for (let j = 1;j<=hideUl.length;j++){
        showAndhidden(navLi[j], hideUl[j-1]);
    }
    /* 函数2 nav下拉菜单 改变 背景*/
    function bkcolorChange(aimLi) {
        for (let i = 0; i < aimLi.length; i++) {
            aimLi[i].onmouseover = function (){
                let navShow =this.getElementsByTagName('span')[1];
                navShow.style.display = 'inline-block';
                this.style.backgroundColor = '#E5E9EF';
                this.style.paddingLeft = '10px';
                this.onmouseout = function (){
                    navShow.style.display = 'none';
                    this.style.backgroundColor = 'white';
                    this.style.paddingLeft = '6px';
                }
            }
        }
    }
    bkcolorChange(navHideLi);

    // 移出移入分别显示不同的内容
    let rightUl1 = document.getElementById('rightUl1');
    let rightLi = rightUl1.getElementsByTagName('li');
    for (let i =0;i<rightLi.length;i++){
        rightLi[i].onmouseover = function(){
            let oSpan = rightLi[i].getElementsByTagName('span')[0];
            let oDiv = rightLi[i].getElementsByTagName('div')[0];
            oSpan.style.display = 'none';
            oDiv.style.display = 'block';
            rightLi[i].onmouseout = function () {
                oSpan.style.display = 'block';
                oDiv.style.display = 'none';
            }
        }
     // 顶部下标显示
    let topUl = document.getElementById('topUl');
    let topulLi = topUl.getElementsByTagName('li');
    let topHides = document.getElementById('topHides');
    let topHidesLi = topHides.getElementsByTagName('li');
    for (let j=0 ; j<topulLi.length; j++){
        topulLi[j].onmouseover = function () {
           topHidesLi[j].style.display = 'block';
           topHidesLi[j].style.marginLeft = j * 46+'px';
           topulLi[j].onmouseout = function(){
           topHidesLi[j].style.display = 'none';
           }
        }
    }
    }

    //移入显示播放时间，字体变蓝的
    let barContent = document.getElementsByClassName('barContent')[0];
    let barContentLi = barContent.getElementsByTagName('li');
    for (let j=0 ; j<barContentLi.length ; j++){
        barContentLi[j].onmouseover = function(){
            let BarP = barContentLi[j].getElementsByTagName('p')[0];
            let BarDiv = barContentLi[j].getElementsByTagName('div')[0];
            let BarSpan = BarDiv.getElementsByTagName('span')[0];
            BarDiv.style.opacity = '0.9';
            BarSpan.style.display = 'block';
            BarP.style.color = '#1E7BB8';
            barContentLi[j].onmouseout = function(){
                BarDiv.style.opacity = '1';
                BarSpan.style.display = 'none';
                BarP.style.color = 'black';
            }
        }
            //移入更换img，字体滑动消失
        let radioContentUl = document.getElementsByClassName('radioContentUl')[0];
        let radioLi = radioContentUl.getElementsByTagName('li');
        for (let i = 0 ;i <radioLi.length ; i++){
            let radioImg = radioLi[i].getElementsByTagName('img')[0];
            let radioH = radioLi[i].getElementsByTagName('h5')[0];
            let radioP = radioLi[i].getElementsByTagName('p')[0];
            let arrImgOld = ["img/radiop1.jpg","img/radiop1.jpg","img/radiop1.jpg","img/radiop1.jpg","img/radiopr.jpg","img/radiopr.jpg","img/radiopr.jpg","img/radiopr.jpg"]
            let arrImg = ["img/radio1.jpg","img/radio2.jpg","img/radio1.jpg","img/radio2.jpg","img/radio1.jpg","img/radio2.jpg","img/radio1.jpg","img/radio1.jpg"]
            radioLi[i].onmouseover = function () {
                radioImg.src = arrImg[i];
                radioP.style.color = '#1E7BB8';
                radioH.style.display = 'none';
                radioLi[i].onmouseout = function () {
                    radioImg.src = arrImgOld[i];
                    radioP.style.color = 'black';
                    radioH.style.display = 'block';
                }
            }
        }
    //滑入更换内容
    let content1 = document.getElementsByClassName('foryou')[0];
    let content2 = document.getElementsByClassName('round')[0];
    let content3 = document.getElementsByClassName('fans')[0];
    let NowRadioRight = document.getElementById('NowRadioRight');
    let NowRLi = NowRadioRight.getElementsByTagName('a');
    for (let i = 0 ; i<NowRLi.length ; i++){
        NowRLi[i].onmouseover = function(){
            for(let j = 0;j<NowRLi.length ; j++){
                NowRLi[j].style.color = 'black';
            }
            this.style.color = 'blue';
            if (i==0) {
                content1.style.display = 'block';
                content2.style.display = 'none';
                content3.style.display = 'none';
            }else if(i==1){
                content2.style.display = 'block';
                content1.style.display = 'none';
                content3.style.display = 'none';
            }else if(i==2){
                content3.style.display = 'block';
                content2.style.display = 'none';
                content1.style.display = 'none';
            }
        }
    }

    //轮播图片
    let leftPic = document.getElementsByClassName('leftPic')[0];
    let lunboImg = document.getElementById('lunboImg');
    let lunboSpan = leftPic.getElementsByTagName('span')[0];
    let lunboLi = leftPic.getElementsByTagName('li');
    let arrImg1 = ["img/lunbo1.jpg","img/lunbo2.jpg","img/lunbo3.jpg","img/lunbo4.jpg","img/lunbo5.jpg"];
    let num = 0;
    for (let j = 0;j<lunboLi.length;j++){
        lunboLi[j].onmouseover=function(){
            let OLunImg = lunboLi[j].getElementsByTagName('img')[0];
            lunboImg.src = arrImg1[j];
            OLunImg.src = 'img/bla.jpg';
            lunboLi[j].onmouseout=function(){
                OLunImg.src = 'img/btn.jpg';
            }
        }
    }
  //右侧导航条
    let leftBarUl = document.getElementById('leftBarUl');
    let leftBarLi = leftBarUl.getElementsByTagName('li');
    for (let j=1;j<leftBarLi.length;j++){
        leftBarLi[j].onmouseover = function(){
            let leftBarLia = leftBarLi[j].getElementsByTagName('a')[0];
            leftBarLia.className = 'bgFontCol';
            leftBarLi[j].onmouseout = function(){
                leftBarLia.className = 'none';
            }
        }
    }







    }



}