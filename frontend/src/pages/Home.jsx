import Cardapio from '../components/Cardapio';
import sushizao from '../assets/hero-bg.jpg'; 


const cardapioEstatico = [
  { nome: "Combo Clássico", descricao: "500 peças de sushi", preco: 2500.00 },
  { nome: "Combo Premium", descricao: "500 peças de sushi variadas", preco: 3000.00 },
  { nome: "Combo Contemporâneo", descricao: "500 peças de sushi contemporâneo", preco: 3500.00 },
]

const heroStyle = {
  padding: '100px 20px',
  textAlign: 'center',
  // AJUSTE 1: Usei CRASE (`) aqui para a variável ${sushizao} funcionar
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${sushizao})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  minHeight: '300px' // Garante que a imagem tenha espaço para aparecer
};

export default function Home() {
  return (
    <main style={{ background: '#000' }}>
      {/* AJUSTE 2: Troquei o estilo manual pelo heroStyle que você criou */}
      <section style={heroStyle}>
        <h1 style={{ color: '#d4af37', fontSize: '2.5rem' }}>Bem-vindo ao Sushi em Casa</h1>
        <p style={{ color: '#fff' }}>O melhor da culinária japonesa no conforto do seu lar.</p>
      </section>
      
      <Cardapio itens={cardapioEstatico} />
    </main>
  );
}