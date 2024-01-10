import { ChangeEvent, useState } from 'react'
import './Trex.sass'

const Tres = () => {

    const [valor_a, setValor_a] = useState<string>('');
    const [valor_b, setValor_b] = useState<string>('');
    const [valor_c, setValor_c] = useState<string>('');
    const [valor_d, setValor_d] = useState<string>('');
    const [valor_e, setValor_e] = useState<string>('');
    const [valor_f, setValor_f] = useState<string>('');
    const [valor_g, setValor_g] = useState<string>('');
    const [valor_h, setValor_h] = useState<string>('');
    const [valor_i, setValor_i] = useState<string>('');

    const handleChange_a = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_a(event.target.value);
    }

    const handleChange_b = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_b(event.target.value);
    }

    const handleChange_c = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_c(event.target.value);
    }

    const handleChange_d = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_d(event.target.value);
    }

    const handleChange_e = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_e(event.target.value);
    }

    const handleChange_f = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_f(event.target.value);
    }

    const handleChange_g = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_g(event.target.value);
    }

    const handleChange_h = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_h(event.target.value);
    }

    const handleChange_i = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_i(event.target.value);
    }

    const a = parseFloat(valor_a);
    const b = parseFloat(valor_b);
    const c = parseFloat(valor_c);
    const d = parseFloat(valor_d);
    const e = parseFloat(valor_e);
    const f = parseFloat(valor_f);
    const g = parseFloat(valor_g);
    const h = parseFloat(valor_h);
    const i = parseFloat(valor_i);

    const calcularMatrizTres = (a*((e*i)-(f*h))-(b*((d*i)-(f*g)))+(c*((d*h)-(e*g))));

    return (
        <div>
            <div className="matrizes_tres_principal">
                <h1>Determinante de uma matriz 3x3</h1>
                <div className="matriz_tres">
                    <div className="tres_linha_1">
                        <div className="tres_a">
                            <input
                                type="text"
                                placeholder='a'
                                title='Digite o valor de a'
                                value={valor_a}
                                onChange={handleChange_a}
                            />
                        </div>
                        <div className="tres_b">
                            <input
                                type="text"
                                placeholder='b'
                                title='Digite o valor de b'
                                value={valor_b}
                                onChange={handleChange_b}
                            />
                        </div>
                        <div className="tres_c">
                            <input
                                type="text"
                                placeholder='c'
                                title='Digite o valor de c'
                                value={valor_c}
                                onChange={handleChange_c}
                            />
                        </div>
                    </div>
                    <div className="tres_linha_2">
                        <div className="tres_d">
                            <input
                                type="text"
                                placeholder='d'
                                title='Digite o valor de d'
                                value={valor_d}
                                onChange={handleChange_d}
                            />
                        </div>
                        <div className="tres_e">
                            <input
                                type="text"
                                placeholder='e'
                                title='Digite o valor de e'
                                value={valor_e}
                                onChange={handleChange_e}
                            />
                        </div>
                        <div className="tres_f">
                            <input
                                type="text"
                                placeholder='f'
                                title='Digite o valor de f'
                                value={valor_f}
                                onChange={handleChange_f}
                            />
                        </div>
                    </div>
                    <div className="tres_linha_3">
                        <div className="tres_g">
                            <input
                                type="text"
                                placeholder='g'
                                title='Digite o valor de g'
                                value={valor_g}
                                onChange={handleChange_g}
                            />
                        </div>
                        <div className="tres_h">
                            <input
                                type="text"
                                placeholder='h'
                                title='Digite o valor de h'
                                value={valor_h}
                                onChange={handleChange_h}
                            />
                        </div>
                        <div className="tres_i">
                            <input
                                type="text"
                                placeholder='i'
                                title='Digite o valor de i'
                                value={valor_i}
                                onChange={handleChange_i}
                            />
                        </div>
                    </div>
                    <div className="valor_matriz_tres">
                        <p>O valor do determinante é <span className="resultado_tres">{calcularMatrizTres}</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tres