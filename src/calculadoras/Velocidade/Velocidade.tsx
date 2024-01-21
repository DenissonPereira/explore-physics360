import { useState, ChangeEvent, useEffect } from 'react';

import './Velocidade.less'
import './VelocidadeLed.less'
import './VelocidadeResponsivo.sass'

interface VelocidadeProps {
    sol: boolean;
    brasil: boolean;
}

const Velocidade: React.FC<VelocidadeProps> = ({sol, brasil}) => {
    const [valor_ms, setValor] = useState<string>('');
    const [tituloVelocidade, setTituloVelocidade] = useState<string>('Velocidade');

    const handleChange_ms = (event: ChangeEvent<HTMLInputElement>) => {
        setValor(event.target.value);
    };

    const Km = parseFloat(valor_ms) * 3.6;

    const [valor_km, setValor_km] = useState<string>('');

    const handleChange_km = (event: ChangeEvent<HTMLInputElement>) => {
        setValor_km(event.target.value);
    };

    useEffect(() => {
        if (!brasil) {
            setTituloVelocidade('Velocity');
        } else {
            setTituloVelocidade('Velocidade');
        }
    }, [brasil]);

    const m = parseFloat(valor_km) / 3.6;

    return (
        <div className='metros_principal'>
            <h1>{tituloVelocidade}</h1>
            <h2>m/s e k/h</h2>
            <div className="metros">
                <div className="conteudo_metros">
                    <p>m/s:</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valor_ms}
                            onChange={handleChange_ms}
                            className='input'
                            placeholder='Digite aqui...'
                            title='m/s para Km/h'
                        />
                    </div>
                    <p>Km/h:</p>
                    <p className='resultado'>{Km.toPrecision(4)} Km/h.</p>
                </div>
                <div className="conteudo_quilometros">
                    <div>
                        <p>Km/h:</p>
                    </div>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valor_km}
                            onChange={handleChange_km}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Km/h para m/s'
                        />
                    </div>
                    <p>m/s:</p>
                    <p className='resultado'>{m.toPrecision(4)} m/s.</p>
                </div>
            </div>
        </div>
    );
};

export default Velocidade;
