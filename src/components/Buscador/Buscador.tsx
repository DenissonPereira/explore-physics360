import React, { useEffect, useRef, useState } from 'react';
import palavrasChaves from '../../scripts/palavras';
import './Buscador.sass';
import './BuscadorResponsivo.sass';

const Buscador: React.FC = () => {
  const [key, setKey] = useState<string>('');

  const pesquisar = () => {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const keyword = searchInput.value.toLowerCase();

    if (palavrasChaves[keyword]) {
      const novaAba = window.open('', '_blank');
      if (novaAba) {
        novaAba.location.href = palavrasChaves[keyword];
      } else {
        alert('Não foi possível abrir uma nova aba. Verifique as configurações do seu navegador.');
      }
    } else {
      alert('Palavra-chave não encontrada!');
    }
  };

  const meuBotaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && meuBotaoRef.current) {
        meuBotaoRef.current.click();
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []); 

  return (
    <div className='buscador_principal'>
      <p className='texto_titulo'>Explore <span className='explore'>Physics </span>360</p>
      <div className='buscar'>
        <input
          title='Pesquise aqui'
          type='search'
          id='searchInput'
          className='barra_pesquisa'
          placeholder='     Pesquise aqui...'
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          title='Ir'
          className='btn_ir glow-on-hover'
          id='meuBotao'
          ref={meuBotaoRef} 
          onClick={pesquisar}
        >
          Ir
        </button>
      </div>
    </div>
  );
};

export default Buscador;
