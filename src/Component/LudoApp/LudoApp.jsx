import "./LudoApp.css"
import {useEffect, useRef } from "react";

function LudoApp() {
    const score1ref = useRef(null);
    const score2ref = useRef(null);
    const current1ref = useRef(null);
    const current2ref = useRef(null);
    const player1 = useRef(null);
    const player2 = useRef(null);
    const d = useRef(null);
    const btnN = useRef(null);
    const btnR = useRef(null);
    const btnH = useRef(null);

    let scores,currentScore,activePlayer,playing;

    useEffect(() => {
        if (player1 && player1.current) {
            console.log(player1.current);
        }
        if (player2 && player2.current) {
            console.log(player2.current);
        }
        if (score1ref && score1ref.current) {
            console.log(score1ref.current);
        }
        if (score2ref && score2ref.current) {
            console.log(score2ref.current);
        }
        if (current1ref && current1ref.current) {
            console.log(current1ref.current);
        }
        if (current2ref && current2ref.current) {
            console.log(current2ref.current);
        }
        if (d && d.current) {
            console.log(d.current);
        }
        if (btnN && btnN.current) {
            console.log(btnN.current);
        }
        if (btnR && btnR.current) {
            console.log(btnR.current);
        }
        if (btnH && btnH.current) {
            console.log(btnH.current);
        }

        const player0El = player1.current;
        const player1El = player2.current
        const score0El = score1ref;
        const score1El = score2ref
        const current0El = current1ref
        const current1El = current2ref

        const diceEl = d.current;
        const btnNew = btnN.current;


        // Starting conditions
        const init = function () {
            scores = [0, 0];
            currentScore = 0;
            activePlayer = 0;
            playing = true;

            score0El.textContent = 0;
            score1El.textContent = 0;
            current0El.textContent = 0;
            current1El.textContent = 0;

            diceEl.classList.add("hidden");
            player0El.classList.remove("player--winner");
            player1El.classList.remove("player--winner");
            player0El.classList.add("player--active");
            player1El.classList.remove("player--active");
        };
        init();

        btnNew.addEventListener("click", init);
    }, [score1ref, score2ref, current1ref, current2ref]);

    function newGame(){
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;

        score1ref.current.textContent = 0;
        score2ref.current.textContent = 0;
        current1ref.current.textContent = 0;
        current2ref.current.textContent = 0;

        d.current.classList.add("hidden");
        player1.current.classList.remove("player--winner");
        player2.current.classList.remove("player--winner");
        player1.current.classList.add("player--active");
        player2.current.classList.remove("player--active");
    }

    function switchPlayer(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1.current.classList.toggle("player--active");
        player2.current.classList.toggle("player--active");
    }

    function diceRoll(){
        if (playing) { 
            const dice = Math.trunc(Math.random() * 6) + 1;

            d.current.classList.remove("hidden");
            d.current.src = `dice-${dice}.png`;

            if (dice !== 1) { 
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            } else { 
                switchPlayer();
            }
        }
    }

    function addScore(){
        if(playing){
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
            if(scores[activePlayer] >= 100){
                playing = false;
                d.current.classList.add("hidden");
                document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
                document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            }
            else{
                switchPlayer();
            }
        }
    }


    return (
        <main>
            <section ref={player1}
                class="player player--0 player--active">
                <h2 class="name" id="name--0">Player 1</h2>
                <p ref={score1ref}
                    class="score"
                    id="score--0">0</p>
                <div class="current">
                    <p class="current-label">Current</p>
                    <p ref={current1ref}
                        class="current-score"
                        id="current--0">0</p>
                </div>
            </section>
            <section ref={player2}
                class="player player--1">
                <h2 class="name" id="name--1">Player 2</h2>
                <p ref={score2ref}
                    class="score"
                    id="score--1">0</p>
                <div class="current">
                    <p class="current-label">Current</p>
                    <p ref={current2ref}
                        class="current-score"
                        id="current--1">0</p>
                </div>
            </section>

            <img src="dice-5.png" alt="Playing dice"
                ref={d}
                class="dice" />
            <button ref={btnN}
                onClick={newGame} class="btn btn--new">🔄 New game</button>
            <button onClick={diceRoll} ref={btnR}
                class="btn btn--roll">🎲 Roll dice</button>
            <button onClick={addScore} ref={btnH}
                class="btn btn--hold">📥 Hold</button>
        </main>
    )
}

export default LudoApp;
