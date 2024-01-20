import { derivative, parse } from 'mathjs'
import { useState } from 'react'
import ImagemDerivada from '../../assets/derivada.png'

import './Deri.sass'
import './DeriResponsivo.sass'

const Deri = () => {


    const [funcao, setFuncao] = useState<string>('');
    const [derivada, setDerivada] = useState<string>('');

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
    <div className='derivadas_principal'>
        <h1>Calculadora de Derivadas</h1>
        <img src={ImagemDerivada} />
        <div className="inputs_derivadas">
            <h3>Digite a função:</h3>
            <input 
                type="text" 
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
            />
            <button onClick={calcular}>CALCULAR</button>
            <p>O resultado é: <span>{derivada}</span>.</p>
        </div>
    </div>
  )
}

export default Deri