import { derivative, parse } from 'mathjs'
import React, { useEffect, useState } from 'react'
import ImagemDerivada from '../../assets/derivada.png'

import './Deri.sass'
import './DeriResponsivo.sass'

interface DeriProps {
    brasil: boolean;
}


const Deri: React.FC<DeriProps> = ({brasil}) => {


    const [funcao, setFuncao] = useState<string>('');
    const [derivada, setDerivada] = useState<string>('');
    const [titulo, setTitulo] = useState<string>('Calkculadora de Derivadas');
    const [digitarFuncao, setDigitarFuncao] = useState<string>('Digite a função: ');
    const [resultado, setResultado] = useState<string>('O resultado é: ');
    const [calcular_botao, setCalcular_botao] = useState<string>('CALCULAR: ');

    const calcular = () => {
        try {
            const compilandoFuncao = parse(funcao);


            const resultado = derivative(compilandoFuncao, 'x');
            
            setDerivada(resultado.toString());

        } catch (error) {
            console.error('Erro ao avaliar função', error);
        }
    }

    useEffect(() => {
        if (brasil == false) {
            setTitulo('Differentiation Calculator');
            setDigitarFuncao('Enter the function:');
            setResultado('The result is: ');
            setCalcular_botao('CALCULATE');
        } else {
            setTitulo('Calculadora de Derivadas');
            setDigitarFuncao('Digite a função:')
            setResultado('O resultado é: ');
            setCalcular_botao('CALCULAR');
        }
    }, [brasil]);

  return (
    <div className='derivadas_principal'>
        <h1>{titulo}</h1>
        <img src={ImagemDerivada} />
        <div className="inputs_derivadas">
            <h3>{digitarFuncao}</h3>
            <input 
                type="text" 
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
            />
            <button onClick={calcular}>{calcular_botao}</button>
            <p>{resultado}<span>{derivada}</span>.</p>
        </div>
    </div>
  )
}

export default Deri