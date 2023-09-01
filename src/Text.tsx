import React, { useState } from "react"

export default function MyText() {

    const [isVisible, setIsVisible] = useState<boolean>(true)
    
    const toggleVisible = (): void => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            {isVisible? <div>freddy fazbear</div>: null}
            <button onClick={toggleVisible}>toggle text</button>
        </div>
    )
}

