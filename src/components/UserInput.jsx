import { useState } from "react"

export default function UserInput({userInput, onInputChange}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Invesment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.initialInvesment}
                        onChange={(event) => onInputChange('initialInvesment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Annual Invesment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.annualInvesment}
                        onChange={(event) => onInputChange('annualInvesment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.expectedReturn}
                        onChange={(event) => onInputChange('expectedReturn', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.duration}
                        onChange={(event) => onInputChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}