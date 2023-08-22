
import React, { useState } from 'react';

function App() {
    const [color1, setColor1] = useState('red');

    const [color2, setColor2] = useState('blue');

    const swapColors = () => {
        setColor1(color2);
        setColor2(color1);
    };

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color1,
                }}
                onClick={swapColors}
            />
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color2,
                }}
                onClick={swapColors}
            />
        </div>
    );
}

export default App;
