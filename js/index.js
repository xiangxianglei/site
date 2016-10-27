/**
 * Created by Administrator on 2016/10/5.
 */
$(function(){
    var images = ["images/bg-3.jpg","images/bg-2.jpg","images/bg-1.jpg"];
    var index = 1;
    setInterval(function(){
        if(index==images.length){
            index = 0;  // 循环开始
        }

        $("#background").animate({opacity:0},1500,function(){
            // 当淡出结束时，切换背景图片，并开始新的淡入过程
            // background: url("images/bg-1.jpg")
            $(this).css("backgroundImage",'url("' + images[index] + '")')
                .animate({opacity:0.6},1500); // 淡入
            index++;
        });
    },5000);
});

window.onload=function(){
    var ofid=document.getElementById('content_b_ul');
    var ofid1=document.getElementsByClassName('subcnt_c')[0];
    var ofid2=document.getElementsByClassName('subcnt_d')[0];
    var ofid3=document.getElementsByClassName('subcnt_f')[0];
    var ofid4=document.getElementsByClassName('subcnt_g')[0];
    var oul=document.getElementsByClassName('h_ul01')[0];
    var ofid5=oul.getElementsByClassName('li1');
    var ofid6=document.getElementsByClassName('subcnt_k')[0];
    window.onscroll=function(){
        var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        if(scrollTop>=800 && scrollTop<1447){
            ofid.style.opacity='1';
        }else if(scrollTop>=1447 && scrollTop<2197){
            ofid.style.opacity='1';
            ofid1.style.opacity='1';
            ofid1.style.left='0'+"px";
        }else if(scrollTop>=2197 && scrollTop<2827){
            ofid1.style.opacity='1';
            ofid1.style.left='0'+"px";
            ofid2.style.opacity='1';
            ofid2.style.left='0'+"px"
        }else if(scrollTop>=3400 && scrollTop<3962){
            ofid3.style.opacity='1';
        }else if(scrollTop>=3962 && scrollTop<4200){
            ofid3.style.opacity='1';
        }else if(scrollTop>=4200 && scrollTop<4700){
            ofid4.style.opacity='1';
            ofid4.style.left='0'+"px";
            ofid4.style.transform="rotate(0deg)"
        }else if(scrollTop>=4700 && scrollTop<6000){
            ofid5[0].style.left='0'+"px";
            ofid5[1].style.left='300'+"px";
            ofid5[2].style.left='600'+"px";
            ofid5[3].style.left='900'+"px";
            ofid5[0].style.opacity='1';
            ofid5[1].style.opacity='1';
            ofid5[2].style.opacity='1';
            ofid5[3].style.opacity='1';
        }else if(scrollTop>=6300 && scrollTop<7000){
            ofid6.style.animation="run 2s ease"
        }
    };

    var odiv1=document.getElementsByClassName("div1")[0];
    var odiv2=document.getElementsByClassName("div2")[0];
    var oli1=odiv1.getElementsByTagName("li");
    var oli2=odiv2.getElementsByTagName("img");
    var oul=odiv1.getElementsByTagName("ul")[0];
    var w=oli1[0].offsetWidth;

    for(var i=0; i<oli1.length;i++){
        oli2[i].index=i;
        oli2[i].onclick=function(){
            for(var j=0;j<oli2.length;j++ ){
                oli2[j].style.opacity="0.6";
            }
            this.style.opacity="1";
            oul.style.left=-this.index*w+"px";
//                    alert(oul.style.left)
        };

    }
};

$(document).ready(function(){
    $("#a").click(function(){
        $('html,body').animate({scrollTop: $("#box").offset().top+"px"}, 800);
    });
    $("#b").click(function(){
        $('html,body').animate({scrollTop: $("#content_a").offset().top+"px"}, 800);
    });
    $("#c").click(function(){
        $('html,body').animate({scrollTop: $("#content_b").offset().top+"px"}, 800);
    });
    $("#d").click(function(){
        $('html,body').animate({scrollTop: $("#content_c").offset().top+"px"}, 800);
    });
    $("#e").click(function(){
        $('html,body').animate({scrollTop: $("#content_f").offset().top+"px"}, 800);
    });
    $("#f").click(function(){
        $('html,body').animate({scrollTop: $("#content_h").offset().top+"px"}, 800);
    });
    $("#g").click(function(){
        $('html,body').animate({scrollTop: $("#content_j").offset().top+"px"}, 800);
    });
});