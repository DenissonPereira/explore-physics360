import { useState, ChangeEvent } from 'react'

import './Temperatura.less'
import './TemperaturaResponsivo.sass'

interface TemperaturaProps {
    sol:boolean;
    brasil: boolean;
}

const Temperatura: React.FC<TemperaturaProps> = ({sol, brasil}) => {

    const [valorCelsiusKelvin, setValorCelsiusKelvin] = useState<string>('');

    const handleChange_celsius_kelvin = (event: ChangeEvent<HTMLInputElement>) => {
        setValorCelsiusKelvin(event.target.value);
    };

    const C_K = parseFloat(valorCelsiusKelvin) + 273.15;

    const [valorCelsiusFahrenheit, setValorCelsiusFahrenheit] = useState<string>('');

    const handleChange_celsius_fahrenheit = (event: ChangeEvent<HTMLInputElement>) => {
        setValorCelsiusFahrenheit(event.target.value);
    };

    const C_F = (parseFloat(valorCelsiusFahrenheit) * (9/5)) + 32;

    const [valorKelvinCelsius, setValorKelvinCelsius] = useState<string>('');

    const handleChange_kelvin_celsius = (event: ChangeEvent<HTMLInputElement>) => {
        setValorKelvinCelsius(event.target.value);
    };

    const K_C = parseFloat(valorKelvinCelsius) - 273.15;

    const [valorKelvinFahrenheit, setValorKelvinFahrenheit] = useState<string>('');

    const handleChange_kelvin_Fahrenheit = (event: ChangeEvent<HTMLInputElement>) => {
        setValorKelvinFahrenheit(event.target.value);
    };

    const K_F = ((9/5)*(parseFloat(valorKelvinFahrenheit) - 273.15)) + 32;

    const [valorFahrenheitCelsius, setValorFahrenheitCelsius] = useState<string>('');

    const handleChange_Fahrenheit_Celsius = (event: ChangeEvent<HTMLInputElement>) => {
        setValorFahrenheitCelsius(event.target.value);
    };

    const F_C = (5/9)*(parseFloat(valorFahrenheitCelsius) - 32);

    const [valorFahrenheitKelvin, setValorFahrenheitKelvin] = useState<string>('');

    const handleChange_Fahrenheit_Kelvin = (event: ChangeEvent<HTMLInputElement>) => {
        setValorFahrenheitKelvin(event.target.value);
    };

    const F_K = ((5/9)*(parseFloat(valorFahrenheitKelvin) - 32)) + 273.15;

  return (
    <div className='temperatura_principal'>
        <h1>{brasil ? 'Temperatura' : 'Temperature'}</h1>
        <div className="temperaturas">
            <div className="celsius">
                <h2>Celsius</h2>
                <div className="inputs">
                    <p>{brasil ? 'Para Kelvin' : 'Convert to Kelvin'}</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valorCelsiusKelvin}
                            onChange={handleChange_celsius_kelvin}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Celsius para Kelvin'
                        />
                    </div>
                    <p className='resultado'>{C_K.toPrecision(5)} K.</p>
                    <p>{brasil ? 'Para Fahrenheit' : 'Convert to Fahrenheit'}</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valorCelsiusFahrenheit}
                            onChange={handleChange_celsius_fahrenheit}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Celsius para Fahrenheit'
                        />
                    </div>
                    <p className='resultado'>{C_F.toPrecision(3)} &ordm;F.</p>
                </div>
            </div>
            <div className="kelvin">
                <h2>Kelvin</h2>
                <div className="inputs">
                    <p>{brasil ? 'Para Celsius: ' : 'Convert to Celsius: '}</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valorKelvinCelsius}
                            onChange={handleChange_kelvin_celsius}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Kelvin para Celsius'
                        />
                    </div>
                    <p className='resultado'>{K_C.toPrecision(4)} &ordm;C.</p>
                    <p>{brasil ? 'Para Fahrenheit: ' : 'Convert to Fahrenheit: '}</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valorKelvinFahrenheit}
                            onChange={handleChange_kelvin_Fahrenheit}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Kelvin para Fahrenheit'
                        />
                    </div>
                    <p className='resultado'>{K_F.toPrecision(4)} &ordm;F.</p>
                </div>
            </div>
            <div className="fahrenheit">
                <h2>Fahrenheit</h2>
                <div className="inputs">
                    <p>{brasil ? 'Para Celsius: ' : 'Convert to Celsius: '}</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valorFahrenheitCelsius}
                            onChange={handleChange_Fahrenheit_Celsius}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Fahrenheit para Celsius'
                        />
                    </div>
                    <p className='resultado'>{F_C.toPrecision(4)} &ordm;C.</p>
                    <p>{brasil ? 'Para Kelvin: ' : 'Convert to Kelvin: '}</p>
                    <div className={sol ? '' : 'mudar_input'}>
                        <input
                            type="text"
                            value={valorFahrenheitKelvin}
                            onChange={handleChange_Fahrenheit_Kelvin}
                            className='input'
                            placeholder='Digite aqui...'
                            title='Fahrenheit para Kelvin'
                        />
                    </div>
                    <p className='resultado'>{F_K.toPrecision(5)} K.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Temperatura