import { ChangeEvent, useState } from 'react';
import './Quatro.sass';

const Quatro = () => {
    const [valor_a, setValor_a] = useState<string>('');
    const [valor_b, setValor_b] = useState<string>('');
    const [valor_c, setValor_c] = useState<string>('');
    const [valor_d, setValor_d] = useState<string>('');
    const [valor_e, setValor_e] = useState<string>('');
    const [valor_f, setValor_f] = useState<string>('');
    const [valor_g, setValor_g] = useState<string>('');
    const [valor_h, setValor_h] = useState<string>('');
    const [valor_i, setValor_i] = useState<string>('');
    const [valor_j, setValor_j] = useState<string>('');
    const [valor_k, setValor_k] = useState<string>('');
    const [valor_l, setValor_l] = useState<string>('');
    const [valor_m, setValor_m] = useState<string>('');
    const [valor_n, setValor_n] = useState<string>('');
    const [valor_o, setValor_o] = useState<string>('');
    const [valor_p, setValor_p] = useState<string>('');

    const handleChange_a = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_a(event.target.value);
    };

    const handleChange_b = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_b(event.target.value);
    };

    const handleChange_c = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_c(event.target.value);
    };

    const handleChange_d = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_d(event.target.value);
    };

    const handleChange_e = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_e(event.target.value);
    };

    const handleChange_f = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_f(event.target.value);
    };

    const handleChange_g = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_g(event.target.value);
    };

    const handleChange_h = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_h(event.target.value);
    };

    const handleChange_i = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_i(event.target.value);
    };

    const handleChange_j = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_j(event.target.value);
    };

    const handleChange_k = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_k(event.target.value);
    };

    const handleChange_l = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_l(event.target.value);
    };

    const handleChange_m = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_m(event.target.value);
    };

    const handleChange_n = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_n(event.target.value);
    };

    const handleChange_o = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_o(event.target.value);
    };

    const handleChange_p = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_p(event.target.value);
    };


    const a = parseFloat(valor_a);
    const b = parseFloat(valor_b);
    const c = parseFloat(valor_c);
    const d = parseFloat(valor_d);
    const e = parseFloat(valor_e);
    const f = parseFloat(valor_f);
    const g = parseFloat(valor_g);
    const h = parseFloat(valor_h);
    const i = parseFloat(valor_i);
    const j = parseFloat(valor_j);
    const k = parseFloat(valor_k);
    const l = parseFloat(valor_l);
    const m = parseFloat(valor_m);
    const n = parseFloat(valor_n);
    const o = parseFloat(valor_o);
    const p = parseFloat(valor_p);

    const m_1 = f * k * p + g * l * n + h * j * o - h * k * n - g * j * p - f * l * o;

    const m_2 = e * k * p + g * l * m + h * j * o - h * k * m - g * j * p - e * l * o;

    const m_3 = e * j * p + f * l * m + h * i * o - h * j * m - f * i * p - e * l * o;

    const m_4 = e * j * o + f * k * m + g * i * n - g * j * m - f * i * o - e * k * n;

    const calcularMatrizQuatro = a * m_1 - b * m_2 + c * m_3 - d * m_4;


    return (
        <div>
            <div className="matrizes_quatro_principal">
                <h1>Determinante de uma matriz 4x4</h1>
                <div className="matriz_quatro">
                    <div className="quatro_linha_1">
                        <div className="quatro_a">
                            <input
                                type="text"
                                placeholder='a'
                                title='Digite o valor de a'
                                value={valor_a}
                                onChange={handleChange_a}
                            />
                        </div>
                        <div className="quatro_b">
                            <input
                                type="text"
                                placeholder='b'
                                title='Digite o valor de b'
                                value={valor_b}
                                onChange={handleChange_b}
                            />
                        </div>
                        <div className="quatro_c">
                            <input
                                type="text"
                                placeholder='c'
                                title='Digite o valor de c'
                                value={valor_c}
                                onChange={handleChange_c}
                            />
                        </div>
                        <div className="quatro_d">
                            <input
                                type="text"
                                placeholder='d'
                                title='Digite o valor de d'
                                value={valor_d}
                                onChange={handleChange_d}
                            />
                        </div>
                    </div>
                    <div className="quatro_linha_2">
                        <div className="quatro_e">
                            <input
                                type="text"
                                placeholder='e'
                                title='Digite o valor de e'
                                value={valor_e}
                                onChange={handleChange_e}
                            />
                        </div>
                        <div className="quatro_f">
                            <input
                                type="text"
                                placeholder='f'
                                title='Digite o valor de f'
                                value={valor_f}
                                onChange={handleChange_f}
                            />
                        </div>
                        <div className="quatro_g">
                            <input
                                type="text"
                                placeholder='g'
                                title='Digite o valor de g'
                                value={valor_g}
                                onChange={handleChange_g}
                            />
                        </div>
                        <div className="quatro_h">
                            <input
                                type="text"
                                placeholder='h'
                                title='Digite o valor de h'
                                value={valor_h}
                                onChange={handleChange_h}
                            />
                        </div>
                    </div>
                    <div className="quatro_linha_3">
                        <div className="quatro_i">
                            <input
                                type="text"
                                placeholder='i'
                                title='Digite o valor de i'
                                value={valor_i}
                                onChange={handleChange_i}
                            />
                        </div>
                        <div className="quatro_j">
                            <input
                                type="text"
                                placeholder='j'
                                title='Digite o valor de j'
                                value={valor_j}
                                onChange={handleChange_j}
                            />
                        </div>
                        <div className="quatro_k">
                            <input
                                type="text"
                                placeholder='k'
                                title='Digite o valor de k'
                                value={valor_k}
                                onChange={handleChange_k}
                            />
                        </div>
                        <div className="quatro_l">
                            <input
                                type="text"
                                placeholder='l'
                                title='Digite o valor de l'
                                value={valor_l}
                                onChange={handleChange_l}
                            />
                        </div>
                    </div>
                    <div className="quatro_linha_4">
                        <div className="quatro_m">
                            <input
                                type="text"
                                placeholder='m'
                                title='Digite o valor de m'
                                value={valor_m}
                                onChange={handleChange_m}
                            />
                        </div>
                        <div className="quatro_n">
                            <input
                                type="text"
                                placeholder='n'
                                title='Digite o valor de n'
                                value={valor_n}
                                onChange={handleChange_n}
                            />
                        </div>
                        <div className="quatro_o">
                            <input
                                type="text"
                                placeholder='o'
                                title='Digite o valor de o'
                                value={valor_o}
                                onChange={handleChange_o}
                            />
                        </div>
                        <div className="quatro_p">
                            <input
                                type="text"
                                placeholder='p'
                                title='Digite o valor de p'
                                value={valor_p}
                                onChange={handleChange_p}
                            />
                        </div>
                    </div>
                    <div className="valor_matriz_quatro">
                        <p>O valor do determinante é <span className="resultado_quatro">{calcularMatrizQuatro}</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quatro;
