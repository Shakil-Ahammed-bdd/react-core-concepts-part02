import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const newRuns = runs + 1;
        setRuns(newRuns)
    }
    const handleDouble = () => {
        const newRuns = runs + 2;
        setRuns(newRuns)
    }
    const handleFour = () => {
        const newRuns = runs + 4;
        setRuns(newRuns)
    }
    const handleSix = () => {
        const newRuns = runs + 6;
        setRuns(newRuns)
    }

    return(
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button> 
            {
                runs > 50 && <p>Your Score : 50</p>
            }
            <button onClick={handleDouble}>Double</button> 
            <button onClick={handleFour}>Four</button> 
            <button onClick={handleSix}>Six</button> 
        </div>
    )
}