import "./Instructions.css";

function Instructions(){
    return(
        <div className="container">
            <h1 className="Heading">Instructions</h1>
            <ul className="Paragraph">
                <li>1. Clicking on New Game sets all scores to 0 and sets Player 1 as starting player</li>
                <li>2. Current player is shown with highlighted background</li>
                <li>3. Each time player clicks on Roll Dice, the dice generates new random value and the previously displayed dice value gets added to Current score</li>
                <li>4. If dice generates 1 then player switch happens automatically</li>
                <li>5. When User clicks on Save Score, current score gets added to Total and then switches to the other player</li>
                <li>6. The first user who scores a total of 100 points wins the game.</li>
            </ul>
        </div>
    )
}

export default Instructions;