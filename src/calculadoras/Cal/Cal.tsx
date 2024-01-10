import { useEffect, useRef, useState } from "react";

import './Cal.sass';
import './CalResp.sass';

const Cal = () => {

    const [numero, setNumero] = useState<string>('');

    const meuBotaoUmRef = useRef<HTMLButtonElement>(null);
    const meuBotaoDoisRef = useRef<HTMLButtonElement>(null);
    const meuBotaoTresRef = useRef<HTMLButtonElement>(null);
    const meuBotaoQuatroRef = useRef<HTMLButtonElement>(null);
    const meuBotaoCincoRef = useRef<HTMLButtonElement>(null);
    const meuBotaoSeisRef = useRef<HTMLButtonElement>(null);
    const meuBotaoSeteRef = useRef<HTMLButtonElement>(null);
    const meuBotaoOitoRef = useRef<HTMLButtonElement>(null);
    const meuBotaoNoveRef = useRef<HTMLButtonElement>(null);
    const meuBotaoZeroRef = useRef<HTMLButtonElement>(null);

    const meuBotaoCeRef = useRef<HTMLButtonElement>(null);
    const meuBotaoSomaRef = useRef<HTMLButtonElement>(null);
    const meuBotaoIgualRef = useRef<HTMLButtonElement>(null);
    const meuBotaoPontoRef = useRef<HTMLButtonElement>(null);
    const meuBotaoDivisaoRef = useRef<HTMLButtonElement>(null);
    const meuBotaoVezesRef = useRef<HTMLButtonElement>(null);
    const meuBotaoMenosRef = useRef<HTMLButtonElement>(null);


    useEffect(() => {
        const teclado = (event: KeyboardEvent) => {
            if(event.key === '1' && meuBotaoUmRef.current) {
                um();
            } else if (event.key === '2' && meuBotaoDoisRef.current) {
                dois();
            } else if (event.key === '3' && meuBotaoTresRef.current) {
                tres();
            } else if (event.key === '4' && meuBotaoQuatroRef.current) {
                quatro();
            } else if (event.key === '5' && meuBotaoCincoRef.current) {
                cinco();
            } else if (event.key === '6' && meuBotaoSeisRef.current) {
                seis();
            } else if (event.key === '7' && meuBotaoSeteRef.current) {
                sete();
            } else if (event.key === '8' && meuBotaoOitoRef.current) {
                oito();
            } else if (event.key === '9' && meuBotaoNoveRef.current) {
                nove();
            } else if (event.key === '0' && meuBotaoZeroRef.current) {
                zero();
            } else if (event.key === 'Escape' && meuBotaoCeRef.current) {
                CE();
            } else if (event.key === '+' && meuBotaoSomaRef.current) {
                mais();
            } else if (event.key === 'Enter' && meuBotaoIgualRef.current) {
                igual();
            } else if (event.key === '.' && meuBotaoPontoRef.current) {
                ponto();
            } else if (event.key === '-' && meuBotaoMenosRef.current) {
                menos();
            } else if (event.key === '/' && meuBotaoDivisaoRef.current) {
                divisao();
            } else if (event.key === '*' && meuBotaoVezesRef.current) {
                vezes();
            }
        };

        document.addEventListener('keyup', teclado);

        return () => {
            document.removeEventListener('keyup', teclado);
        };
    }, []);


    const um = () => {
        setNumero((prevNumero) => prevNumero + '1');
    }

    const dois = () => {
        setNumero((prevNumero) => prevNumero + '2');
    }

    const tres = () => {
        setNumero((prevNumero) => prevNumero + '3');
    }

    const quatro = () => {
        setNumero((prevNumero) => prevNumero + '4');
    }

    const cinco = () => {
        setNumero((prevNumero) => prevNumero + '5');
    }

    const seis = () => {
        setNumero((prevNumero) => prevNumero + '6');
    }

    const sete = () => {
        setNumero((prevNumero) => prevNumero + '7');
    }

    const oito = () => {
        setNumero((prevNumero) => prevNumero + '8');
    }

    const nove = () => {
        setNumero((prevNumero) => prevNumero + '9');
    }

    const zero = () => {
        setNumero((prevNumero) => prevNumero + '0');
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
        setNumero((prevNumero) => prevNumero + '/');
    }

    const vezes = () => {
        setNumero((prevNumero) => prevNumero + '*');
    }

    const menos = () => {
        setNumero((prevNumero) => prevNumero + '-');
    }

    const mais = () => {
        setNumero((prevNumero) => prevNumero + '+');
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
        setNumero((prevNumero) => prevNumero + '.');
    }

    const igual = () => {
        setNumero((prevNumero) => eval(prevNumero));
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
                        <button id="1" onClick={CE} ref={meuBotaoCeRef}>CE</button>
                        <button id="1" onClick={raiz}>&radic;</button>
                        <button id="1" onClick={porcentagem}>%</button>
                        <button id="1" onClick={divisao} ref={meuBotaoDivisaoRef}>/</button>
                    </div>
                    <div className="linha2">
                        <button id="1" onClick={sete} ref={meuBotaoSeteRef}>7</button>
                        <button id="1" onClick={oito} ref={meuBotaoOitoRef}>8</button>
                        <button id="1" onClick={nove} ref={meuBotaoNoveRef}>9</button>
                        <button id="1" onClick={vezes} ref={meuBotaoVezesRef}>x</button>
                    </div>
                    <div className="linha3">
                        <button id="1" onClick={quatro} ref={meuBotaoQuatroRef}>4</button>
                        <button id="1" onClick={cinco} ref={meuBotaoCincoRef}>5</button>
                        <button id="1" onClick={seis} ref={meuBotaoSeisRef}>6</button>
                        <button id="1" onClick={menos} ref={meuBotaoMenosRef}>-</button>
                    </div>
                    <div className="linha4">
                        <button id="1" onClick={um} ref={meuBotaoUmRef}>1</button>
                        <button id="2" onClick={dois} ref={meuBotaoDoisRef}>2</button>
                        <button id="2" onClick={tres} ref={meuBotaoTresRef}>3</button>
                        <button id="2" onClick={mais} ref={meuBotaoSomaRef}>+</button>
                    </div>
                    <div className="linha5">
                        <button id="2" onClick={trocarSinal}>+/-</button>
                        <button id="2" onClick={zero} ref={meuBotaoZeroRef}>0</button>
                        <button id="2" onClick={ponto} ref={meuBotaoPontoRef}>.</button>
                        <button id="2" onClick={igual} ref={meuBotaoIgualRef}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cal;
