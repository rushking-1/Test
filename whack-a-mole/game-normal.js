window.onload = function () {

    const holes = document.querySelectorAll('.hole'); //获取所有的洞
    const scoreBoard = document.querySelector('.score');//记分数
    const moles = document.querySelectorAll('.mole');//鼹鼠
    const startBtn = document.getElementById('start_btn');
    let titleH1 = document.getElementById('title');

    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;


    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault();

        startBtn.classList.add('animate');
        // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
        setTimeout(() => {
            startBtn.classList.remove('animate');
            startBtn.style.display = 'none';
        }, 700);
    }


    function startGame() {
        //
        function chulai(){
            rank=Math.floor(Math.random()*9);
            moles[rank].src="whack-a-mole/mole.svg";
            moles[rank].setAttribute("onclick","die()");
            setTimeout("paole()",Math.random()*400+800);

        }
        function paole(){
            moles[ranK].src = "./images/keng.gif";
            moles[ranK].style.marginTop = "31px";
            moles[ranK].removeAttribute("onclick");
            setTimeout("chulai()", Math.random()*400+800);
        }
        function die(){
            moles[ranK].src = "./images/shang.gif";
            moles[ranK].removeAttribute("onclick");
            moles[ranK].style.marginTop = "3px";
        }

    }


};
