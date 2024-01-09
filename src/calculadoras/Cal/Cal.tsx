import { useState } from "react";

import './Cal.sass';
import './CalResp.sass';

const Cal = () => {

    const [numero, setNumero] = useState<string>('');

    const um = () => {
        setNumero(numero + '1');
    }

    const dois = () => {
        setNumero(numero + '2');
    }

    const tres = () => {
        setNumero(numero + '3');
    }

    const quatro = () => {
        setNumero(numero + '4');
    }

    const cinco = () => {
        setNumero(numero + '5');
    }

    const seis = () => {
        setNumero(numero + '6');
    }

    const sete = () => {
        setNumero(numero + '7');
    }

    const oito = () => {
        setNumero(numero + '8');
    }

    const nove = () => {
        setNumero(numero + '9');
    }

    const zero = () => {
        setNumero(numero + '0');
    }

    const CE = () => {
        setNumero('');
    }

    const raiz = () => {
        const numRaiz: number = parseFloat(numero)**(1/2);
        const stringRaiz: string = numRaiz.toString();
        setNumero(stringRaiz);
    }

    const porcentagem = () => {
        const numPorcentagem: number = parseFloat(numero) / 100;
        const stringPorcentagem: string = numPorcentagem.toString();
        setNumero(stringPorcentagem);
    }

    const divisao = () => {
        setNumero(numero + '/');
    }

    const vezes = () => {
        setNumero(numero + '*');
    }

    const menos = () => {
        setNumero(numero + '-');
    }

    const mais = () => {
        setNumero(numero + '+');
    }

    const trocarSinal = () => {
        const valorNumerico = parseFloat(numero);
        if (valorNumerico < 0) {
            const positivo = (-1) * valorNumerico;
            setNumero(positivo.toString());
        } else {
            const negativo = (-1) * valorNumerico;
            setNumero(negativo.toString());
        };
    }

    const ponto = () => {
        setNumero(numero + '.');
    }

    const igual = () => {
        setNumero(eval(numero))
    }


    return (
        <div className="calculadora_principal">
            <div className="calc_white">
                <div className="display">
                    <div className="tela_numeros">
                        {numero}
                    </div>
                </div>
                <div className="teclas">
                    <div className="linha1">
                        <button id="1" onClick={CE}>CE</button>
                        <button id="1" onClick={raiz}>&radic;</button>
                        <button id="1" onClick={porcentagem}>%</button>
                        <button id="1" onClick={divisao}>/</button>
                    </div>
                    <div className="linha2">
                        <button id="1" onClick={sete}>7</button>
                        <button id="1" onClick={oito}>8</button>
                        <button id="1" onClick={nove}>9</button>
                        <button id="1" onClick={vezes}>x</button>
                    </div>
                    <div className="linha3">
                        <button id="1" onClick={quatro}>4</button>
                        <button id="1" onClick={cinco}>5</button>
                        <button id="1" onClick={seis}>6</button>
                        <button id="1" onClick={menos}>-</button>
                    </div>
                    <div className="linha4">
                        <button id="1" onClick={um}>1</button>
                        <button id="2" onClick={dois}>2</button>
                        <button id="2" onClick={tres}>3</button>
                        <button id="2" onClick={mais}>+</button>
                    </div>
                    <div className="linha5">
                        <button id="2" onClick={trocarSinal}>+/-</button>
                        <button id="2" onClick={zero}>0</button>
                        <button id="2" onClick={ponto}>.</button>
                        <button id="2" onClick={igual}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cal;
