import { ChangeEvent, useState } from 'react'
import './Bissec.sass'
import { abs } from 'mathjs';
import * as math from 'mathjs';

const Bissec = () => {

  const [valor_a, setValor_a] = useState<string>('');
  const [valor_b, setValor_b] = useState<string>('');
  const [valor_tol, setValor_tol] = useState<string>('');
  const [funcao, setFunction] = useState<string>('');
  const [raiz, setRaiz] = useState<number>(0);

  const handleChange_a = (event: ChangeEvent<HTMLInputElement>) => {
    const input_a = event.target.value;
    setValor_a(input_a);
  }

  const handleChange_b = (event: ChangeEvent<HTMLInputElement>) => {
    const input_b = event.target.value;
    setValor_b(input_b);
  }

  const handleChange_tol = (event: ChangeEvent<HTMLInputElement>) => {
    const input_tol = event.target.value;
    setValor_tol(input_tol);
  }

  const handleChange_funcao = (event: ChangeEvent<HTMLInputElement>) => {
    const input_funcao = event.target.value;
    setFunction(input_funcao);
  }

  let a = parseFloat(valor_a);
  let b = parseFloat(valor_b);
  const tol = parseFloat(valor_tol);

  const calcularResultadoBi = () => {

    let interacao: number = 1;

    while (abs(b - a) / 2 > tol) {
      var m: number = (a + b) / 2;
      var funcao_m = math.evaluate(funcao, { x: m });
      if (funcao_m == 0) {
        break;
      } else if ((math.evaluate(funcao, { x: a }) * funcao_m) < 0) {
        b = m;
      } else {
        a = m;
      }
      interacao += 1;
    }

    let raiz = (a + b) / 2;

    setRaiz(parseFloat(raiz.toFixed(4)));
  }



  return (
    <div>
      <div className="principal_bis">
        <div className="funcao">
          <p>Digite a função: </p>
          <input
            type="text"
            value={funcao}
            onChange={handleChange_funcao}
            placeholder='Funcão do tipo x^2 + sin(x)...'
            title='Digite a função'
          />
        </div>
        <div className="dados">
          <div className="a">
            <p>a: </p>
            <input
              type="text"
              value={valor_a}
              placeholder='a'
              onChange={handleChange_a}
              title='Digite o valor de a'
            />
          </div>
          <div className="b">
            <p>b: </p>
            <input
              type="text"
              value={valor_b}
              placeholder='b'
              onChange={handleChange_b}
              title='Digite o valor de b'
            />
          </div>
          <div className="tol">
            <p>Tolerância: </p>
            <input
              type="text"
              value={valor_tol}
              placeholder='Tolerância'
              onChange={handleChange_tol}
              title='Digite o valor da tolerância'
            />
          </div>
        </div>
        <div className="resultados">
          <button onClick={calcularResultadoBi}>Calcular raiz</button>
          <p className='p_resultado'>O valor da raiz é: <span>{raiz}</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default Bissec