import React, { useState } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import * as math from 'mathjs';

import './Graf.sass'

interface DataPoint {
  x: number;
  y: number;
}

const GraficoPersonalizado: React.FC = () => {
  const [funcao, setFuncao] = useState('');
  const [dados, setDados] = useState<DataPoint[]>([]);
  const [mostrarGrafico, setMostrarGrafico] = useState<boolean>(false);
  const [valor_a, setValorA] = useState<string>('');
  const [valor_b, setValorB] = useState<string>('');

  const [tamanho, setTamanho] = useState<number>(0);

  const [cor, setCor] = useState<string>('black');

  const gerarDados = () => {
    try {
      const evaluate = math.compile(funcao);
      const newData: DataPoint[] = [];

      for (let x = parseFloat(valor_a); x <= parseFloat(valor_b); x += 0.1) {
        const y = evaluate.evaluate({ x });
        newData.push({ x, y });
      }

      setDados(newData);
      setMostrarGrafico(true);
    } catch (error) {
      console.error('Erro ao avaliar a função:', error);
    }
  };

  const diminuir = () => {
    setTamanho((tamanho) => tamanho + 5);
  }

  const aumentar = () => {
    setTamanho((tamanho) => tamanho - 5);
  }

  return (
    <div className='graficos_principais'>
      <h1>Gáficos</h1>
      <h2>Plote o gráfico de qualquer função</h2>
      <div className="funcao_e_grafico">
        <div className="dados_dos_graficos_col1">
          <label className='graficos_valores'>
            <div className="graficos_funcao">
              <h3>Função:</h3>
              <input
                type="text"
                title='Digite a função desejada'
                placeholder='x^2...'
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
              />
            </div>
            <div className='graficos_input_valores'>
              <div className="graficos_a">
                <h3>Valor de a:</h3>
                <input
                  type="text"
                  title='Digite o valor inicial'
                  value={valor_a}
                  onChange={(e) => setValorA(e.target.value)}
                />
              </div>
              <div className="graficos_b">
                <h3>Valor de b: </h3>
                <input
                  type="text"
                  title='Digite o valor final'
                  value={valor_b}
                  onChange={(e) => setValorB(e.target.value)}
                />
              </div>
            </div>
          </label>
          <div className="botao_grafico">
            <button 
              onClick={gerarDados}
              title='Clique aqui para gerar o gráfico'
            >Gerar Gráfico
          </button>
          </div>
        </div>
        <div className="grafico_col2">
          <div className="botoes_aumentar_diminuir">
            <h3>Tamanho do gráfico:</h3>
            <button onClick={diminuir}>DIMINUIR</button>
            <button onClick={aumentar}>AUMENTAR</button>
            <h3>Cor:</h3>
            <input type="color" name="" id="" value={cor} onChange={(e) => setCor(e.target.value)} />
          </div>
          {mostrarGrafico && (
            <div className="grafico_victory">
              <VictoryChart theme={VictoryTheme.material} padding={{ top: tamanho, bottom: tamanho, left: tamanho, right: tamanho }}>
                <VictoryAxis />
                <VictoryAxis dependentAxis />
                <VictoryLine data={dados} style={{ data: { stroke: cor } }} />
              </VictoryChart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraficoPersonalizado;
