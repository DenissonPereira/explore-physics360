import { derivative, parse } from 'mathjs'
import { useEffect, useState } from 'react'
import ImagemDerivada from '../../assets/derivadaBlack.png'

import './Deri.sass'
import './DeriResponsivo.sass'
import './DeriAnimada.less'

interface DeriBlackProps {
    brasil: boolean;
}

const DeriBlack: React.FC<DeriBlackProps> = ({brasil}) => {


    const [funcao, setFuncao] = useState<string>('');
    const [derivada, setDerivada] = useState<string>('');
    const [titulo, setTitulo] = useState<string>('Calkculadora de Derivadas');
    const [digitarFuncao, setDigitarFuncao] = useState<string>('Digite a função: ');
    const [resultado, setResultado] = useState<string>('O resultado é: ');

    useEffect(() => {
        if(brasil == false) {
            setTitulo('Differentiation Calculator');
            setDigitarFuncao('Enter the function:');
            setResultado('The result is: ');
        } else {
            setTitulo('Calculadora de Derivadas');
            setDigitarFuncao('Digite a função: ');
            setResultado('O resultado é: ');
        }
    }, [brasil])
  

    const calcular = () => {
        try {
            const compilandoFuncao = parse(funcao);


            const resultado = derivative(compilandoFuncao, 'x');
            
            setDerivada(resultado.toString());

        } catch (error) {
            console.error('Erro ao avaliar função', error);
        }
    }


  return (
    <div className='derivadas_principal_black'>
        <h1>{titulo}</h1>
        <div className="imagem_derivada"><img src={ImagemDerivada} /></div>
        <div className="inputs_derivadas_black">
            <h3>{digitarFuncao}</h3>
            <input 
                type="text" 
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
            />
            <button onClick={calcular} className='glow' title='Calcular derivada'>CALCULAR</button>
            <p>{resultado}<span>{derivada}</span>.</p>
        </div>
    </div>
  )
}

export default DeriBlack