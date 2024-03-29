import React, { ChangeEvent, useState } from 'react'
import './Energia.less'
import './EnergiaResponsivo.sass'

interface EnergiaProps {
    sol: boolean;
    brasil: boolean;
}

const Energia: React.FC<EnergiaProps> = ({sol, brasil}) => {

    const [jouleCalorias, setJouleCalorias] = useState<string>('');

    const handleChange_jc = (event: ChangeEvent<HTMLInputElement>) => {
        setJouleCalorias(event.target.value);
    };

    const J_C = parseFloat(jouleCalorias) / 4.184;

    const [caloriasJoule, setCaloriasJoule] = useState<string>('');

    const handleChange_cj = (event: ChangeEvent<HTMLInputElement>) => {
        setCaloriasJoule(event.target.value);
    };

    const C_J = parseFloat(caloriasJoule) * 4.184;

  return (
    <div className='energia_principal'>
        <h1>{brasil ? 'Energia' : 'Energy'}</h1>
        <div className="energia2">
            <h2>{brasil ? 'Joule e Calorias' : 'Joule and Calories'}</h2>
            <div className="energia">
                <p>J:</p>
                <div className={sol ? '' : 'mudar_input'}>
                    <input
                        type="text"
                        value={jouleCalorias}
                        onChange={handleChange_jc}
                        placeholder='Digite aqui...'
                        className='input'
                        title='Joules para Calorias'
                    />
                </div>
                <p className='resultado'>{J_C.toPrecision(5)} cal.</p>
                <p>cal:</p>
                <div className={sol ? '' : 'mudar_input'}>
                    <input
                        type="text"
                        value={caloriasJoule}
                        onChange={handleChange_cj}
                        placeholder='Digite aqui...'
                        className='input input_energia'
                        title='Calorias para Joules'
                    />
                </div>
                <p className='resultado'>{C_J.toPrecision(5)} J.</p>
            </div>
        </div>
    </div>
  )
}

export default Energia