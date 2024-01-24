import React, { ChangeEvent, useState } from 'react'

import './Dois.sass'
import './DoisLed.less'

interface DoisProps {
    sol: boolean;
}

const Dois: React.FC<DoisProps> = ({sol}) => {

    const [a, setA] = useState<string>('');

    const handleChange_a = (event: ChangeEvent<HTMLInputElement>) => {
        setA(event.target.value);
    }

    const [b, setB] = useState<string>('');

    const handleChange_b = (event: ChangeEvent<HTMLInputElement>) => {
        setB(event.target.value);
    }

    const [c, setC] = useState<string>('');

    const handleChange_c = (event: ChangeEvent<HTMLInputElement>) => {
        setC(event.target.value);
    }

    const [d, setD] = useState<string>('');

    const handleChange_d = (event: ChangeEvent<HTMLInputElement>) => {
        setD(event.target.value);
    }

    const valor_a: number = parseFloat(a);
    const valor_b: number = parseFloat(b);
    const valor_c: number = parseFloat(c);
    const valor_d: number = parseFloat(d);

    const matrizDoisCalcular = (valor_a * valor_d) - (valor_c * valor_b);

    return (
        <div>
            <div className="matrizes_principais">
                <h1>Determinante de uma matriz 2x2</h1>
                <div className={sol ? '' : 'matrix2_2'}>
                    <div className="matrizes_linha_1">
                        <div className="elemento_a">
                            <input
                                type="text"
                                value={a}
                                onChange={handleChange_a}
                                placeholder='a'
                                title='Digite o valor de a'
                            />
                        </div>
                        <div className="elemento_b">
                            <input
                                type="text"
                                value={b}
                                onChange={handleChange_b}
                                placeholder='b'
                                title='Digite o valor de b'
                            />
                        </div>
                    </div>
                    <div className="matrizes_linha_2">
                        <div className="elemento_C">
                            <input
                                type="text"
                                value={c}
                                onChange={handleChange_c}
                                placeholder='c'
                                title='Digite o valor de c'
                            />
                        </div>
                        <div className="elemento_d">
                            <input
                                type="text"
                                value={d}
                                onChange={handleChange_d}
                                placeholder='d'
                                title='Digite o valor de d'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="valor_matriz">
                <p>O valor do determinante é <span className="resultado_dois">{matrizDoisCalcular}</span>.</p>
            </div>
        </div>
    )
}

export default Dois