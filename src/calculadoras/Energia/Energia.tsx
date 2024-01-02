import { ChangeEvent, useState } from 'react'
import './Energia.less'
import './EnergiaResponsivo.sass'

const Energia = () => {

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
        <h1>Energia</h1>
        <div className="energia2">
            <h2>Joule e Calorias</h2>
            <div className="energia">
                <p>J:</p>
                <input
                    type="text"
                    value={jouleCalorias}
                    onChange={handleChange_jc}
                    placeholder='Digite aqui...'
                    className='input'
                    title='Joules para Calorias'
                />
                <p className='resultado'>{J_C.toPrecision(5)} cal.</p>
                <p>cal:</p>
                <input
                    type="text"
                    value={caloriasJoule}
                    onChange={handleChange_cj}
                    placeholder='Digite aqui...'
                    className='input'
                    title='Calorias para Joules'
                />
                <p className='resultado'>{C_J.toPrecision(5)} J.</p>
            </div>
        </div>
    </div>
  )
}

export default Energia