import React from 'react';

const Cal = () => {
    const display = document.getElementsByClassName('tela_numeros')[0];

    function um() {
        display.textContent = display.textContent + '1';
    }

    function dois() {
        display.textContent = display.textContent + '2';
    }

    return (
        <div className="calculadora_principal">
            <div className="calc">
                <div className="display">
                    <div className="tela_numeros"></div>
                </div>
                <div className="teclas">
                    <button id="1" onClick={um}>1</button>
                    <button id="2" onClick={dois}>2</button>
                </div>
            </div>
        </div>
    );
}

export default Cal;
