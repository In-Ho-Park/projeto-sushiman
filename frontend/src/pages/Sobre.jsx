import React from 'react';
import fotoFacas from '../assets/facas.jpg'; // Importando a nova foto

export default function Sobre() {
  const heroStyle = {
    padding: '100px 20px',
    textAlign: 'center',
    // O segredo está aqui: Crases + Linear Gradient para escurecer
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fotoFacas})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Faz a foto ficar parada enquanto rola o texto
    color: 'white',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const textoStyle = {
    backgroundColor: '#000', // Fundo preto para a parte do texto abaixo da foto
    padding: '50px 20px',
    color: '#fff',
    lineHeight: '1.6'
  };

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      {/* SEÇÃO COM A FOTO DE FUNDO */}
      <section style={heroStyle}>
        <h1 style={{ color: '#d4af37', fontSize: '3rem' }}>O Chef e sua Arte</h1>
        <p>A precisão japonesa em cada corte.</p>
      </section>

      {/* SEÇÃO DO CONTEÚDO DO CURRÍCULO */}
      <section style={textoStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#d4af37' }}>Trajetória</h2>
          <p>
            Especialista em sushis contemporâneos com foco em eventos privados. 
            Utilizo técnicas tradicionais de corte com facas artesanais japonesas 
            para garantir a melhor textura do peixe.
          </p>
          
          <h3 style={{ color: '#d4af37', marginTop: '30px' }}>Habilidades</h3>
          <ul>
            <li>Manuseio de facas Yanagiba e Deba</li>
            <li>Seleção de pescados frescos no mercado local</li>
            <li>Higienização e segurança alimentar rigorosa</li>
          </ul>
        </div>
      </section>
    </main>
  );
}