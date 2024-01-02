import * as math from 'mathjs'
import { ChangeEvent, useState } from 'react'
import Int from '../../assets/images/equation.png'

import './Integrais.less'
import './IntegraisResponsivo.sass'

const Integrais = () => {

    const [valor, setValor] = useState<string>('');

    const [area, setArea] = useState<number>(0);

    const [valor_a, setValor_a] = useState<string>('');

    const [valor_b, setValor_b] = useState<string>('');

    const [valor_n, setValor_n] = useState<string>('');

    const obterValor_n = (event: ChangeEvent<HTMLInputElement>) => {
        const input_n = event.target.value;
        setValor_n(input_n);
    }

    const obterValor_a = (event: ChangeEvent<HTMLInputElement>) => {
        const input_a = event.target.value;
        setValor_a(input_a);
    }

    const obterValor_b = (event: ChangeEvent<HTMLInputElement>) => {
        const input_b = event.target.value;
        setValor_b(input_b);
    }


    const mudarValor = (event: ChangeEvent<HTMLInputElement>) => {

        const inputValor = event.target.value;
        setValor(inputValor); 
    };

    const calcularResultado = () => {

        let novaArea: number = 0;

        let a: number = parseFloat(valor_a);
        let b: number = parseFloat(valor_b);
        const n: number = parseFloat(valor_n);

        const delta_x: number = math.abs(b-a) / n;
        
        if (a < b) {

            while (a <= b) {
                novaArea += math.evaluate(valor, { x: a}) * delta_x;
                a = a + delta_x;
            }

            novaArea = parseFloat(novaArea.toFixed(4));

            setArea(novaArea);

        } else if (a == b) {

            novaArea = 0;

            setArea(novaArea);

        } else {
            while (b <= a) {
                novaArea += math.evaluate(valor, {x: b}) * delta_x;
                b = b + delta_x;
            }

            novaArea = parseFloat(novaArea.toFixed(4));

            setArea(-novaArea);
        }

    };



  return (
    <div className='int_principal'>
        <img src={Int} alt="" />
        <div className="integral">
            <div className="funcao">
                <p>Função: </p>
                <input
                    type="text"
                    value={valor}
                    onChange={mudarValor}
                    placeholder='Digite uma função do tipo (3*x)^2'
                    className='input_funcao'
                    title='Digite sua função aqui'
                />
            </div>
            <div className="lim">
                <p>Limite inferior: </p>
                <input
                    type="text"
                    value={valor_a}
                    onChange={obterValor_a}
                    placeholder='a'
                    className='limites'
                    title='Limite inferior'
                />
                <p>Limite superior: </p>
                <input
                    type="text"
                    value={valor_b}
                    onChange={obterValor_b}
                    placeholder='b'
                    title='Limite superior'
                    className='limites'
                />
                <p>Integração: </p>
                <input
                    type="text"
                    value={valor_n}
                    onChange={obterValor_n}
                    title='Quantidade de retângulos'
                    className='input_n'
                    placeholder='n'
                />
            </div>
            <button
                onClick={calcularResultado}
                className='botao_integral'
                title='Calcular integral'
            >
                CALCULAR
            </button>
            <p className='resultado_int'>{area}</p>
        </div>

    </div>
  )
}

export default Integrais