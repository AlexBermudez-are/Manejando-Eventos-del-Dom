const d = document,
     w = window;
let x = 0,
     y = 0;  

export default function ball(e,ball,stage) {
    const $ball = d.querySelector(ball),
         $stage = d.querySelector(stage),
         limitBall = $ball.getBoundingClientRect(),
         limitStage = $stage.getBoundingClientRect()

        //   console.log(key);

    if(w.pageYOffset > 583 && w.pageYOffset < 1343){
        switch (e.keyCode) {
            case 37:
                //left
                if(limitBall.left > limitStage.left) x--;
                e.preventDefault();
                break;
            case 38:
                //up
                if(limitBall.top > limitStage.top) y--;
                e.preventDefault();
                break;
            case 39:
                //right
                if(limitBall.right < limitStage.right) x++;
                e.preventDefault();
                break;
            case 40:
                //down
                if(limitBall.bottom < limitStage.bottom) y++;
                e.preventDefault();
                break;
        
            default:
                break;
        }
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    
}