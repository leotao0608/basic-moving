let x=0,y=0;
let key_pressed={};
const speed=5;
let hero = document.getElementById("hero");
let border = document.getElementById("border");
document.addEventListener('keydown',function(event){  
    key_pressed[event.key]=true;
});
document.addEventListener('keyup',function(event){
    key_pressed[event.key]=false;
});
function getElementBounds(element) {
    return element.getBoundingClientRect();
}
function moving(){
    let hb=getElementBounds(hero);
    let bb=getElementBounds(border);
    if(key_pressed["w"]||key_pressed["ArrowUp"]){
        if(hb.top-bb.top>0){
            y-=speed;
        }else{
            y-=hb.top-bb.top;
        }
    }
    if(key_pressed["s"]||key_pressed["ArrowDown"]){
        if(bb.bottom-hb.bottom>0){
            y+=speed;
        }else{
            y+=bb.bottom-hb.bottom;
        }
    }
    if(key_pressed["a"]||key_pressed["ArrowLeft"]){
        if(hb.left-bb.left>0){
            x-=speed;
        }else{
            x-=hb.left-bb.left;
        }
    }
    if(key_pressed["d"]||key_pressed["ArrowRight"]){
        if(bb.right-hb.right>0){
            x+=speed;
        }else{
            x+=bb.right-hb.right;
        }
    }
    hero.style.left=`${x}px`;
    hero.style.top=`${y}px`;
    requestAnimationFrame(moving);
}
moving();
document.body.style.overflow = 'hidden';
