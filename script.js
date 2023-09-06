    let button = document.getElementById("button");
    let body =  document.querySelector('body');
    let auto = document.getElementById("auto_button");
    let con = document.getElementById("container");
    let m_bt = document.getElementById('cp_manual');
    let a_bt = document.getElementById('cp_auto');
    let heading = document.getElementById('con_heading');
    let control = document.getElementById('control');
    let nav = document.getElementById('nav');


    body.style.backgroundColor = "lightgrey";

    m_bt.onclick = () => {
        heading.innerHTML = "";
        button.style.display = "inline";
        auto.style.display = "none";
    }

    a_bt.onclick =() => {
        heading.innerHTML = "";
        button.style.display = "none";
        auto.style.display = "inline";
    }

    control.onclick = () => {
        var style_value = nav.currentStyle || window.getComputedStyle(nav);
        if(style_value.left == '-240px'){
            nav.style.left = "0px";
            con.style.marginLeft = "240px";
            control.style.left = "202px";
            control.style.top = "4px";
            control.innerHTML = "X";
        }else if (style_value.left == '0px') {
            nav.style.left = "-240px";
            con.style.marginLeft = "0px";
            control.style.left = "4px";
            control.style.top = "1%";
            control.innerHTML = "+";
        } else {
            alert("Side nav is not working");
        }
    }

    let color = ["lightgrey","green","blue","black","cyan","red","blueviolet","chartreuse","brown","chocolate"];

    button.onclick = () => {
        let x = Math.floor(Math.random() * 10);
        body.style.backgroundColor = color[x];
    }

    let myInterval;// = null;
    let interval = false;

    auto.onclick = function(){
        auto.innerHTML = "Stop";
        auto.style.width = "90px";
        if(interval == false){
            interval = true;
            myInterval = setInterval(() => {
        let x = Math.floor(Math.random() * 10);
        body.style.backgroundColor = color[x];
    }, 1000);
        }else if(interval == true){
            clearInterval(myInterval);
            interval = false;
            auto.style.width = "220px";
            auto.innerHTML = "Auto Change Color";
        }else{
            alert("Auto change function is not working");
        }       
    }