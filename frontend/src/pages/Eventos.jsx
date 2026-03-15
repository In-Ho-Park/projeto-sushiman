import styles from './Eventos.module.css';
import fotoevento from '../assets/evento.jpg';

const menusEventos = [
  {
    id: 1,
    nome: "Contemporâneo",
    qtd: "500 peças",
    preco: 3500.90,
    destaque: "Ingredientes nobres e experiência gourmet",
    itens: ["Uramaki salmão trufado", "Uramaki atum spicy", "Nigiri enguia (unagi)", "Nigiri vieira", "Nigiri ikura", "Sashimi atum premium"]
  },
  {
    id: 2,
    nome: "Premium",
    qtd: "500 peças",
    preco: 3000.00,
    destaque: "Equilíbrio entre variedade e sofisticação",
    itens: ["Uramaki Filadélfia", "Uramaki Spicy Tuna", "Hot Roll salmão", "Nigiri maçaricado", "Gunkan salmão", "Sashimi salmão"]
  },
  {
    id: 3,
    nome: "Clássico",
    qtd: "500 peças",
    preco: 2500.00,
    destaque: "Ideal para grandes volumes e público variado",
    itens: ["Uramaki Califórnia", "Uramaki Salmão simples", "Kappamaki (pepino)", "Maki salmão", "Nigiri salmão", "Nigiri peixe branco"]
  }
];

export default function Eventos() {
  const handleOrcamento = (nomeCardapio) => {
    const numero = "5511999999999"; // COLOQUE O NÚMERO DO SEU AMIGO AQUI
    const mensagem = encodeURIComponent(`Olá! Gostaria de um orçamento para o Cardápio de Evento: ${nomeCardapio}`);
    window.location.href = `https://wa.me/${numero}?text=${mensagem}`;
  };

  const headerStyle = {
    padding: '100px 20px',
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fotoevento})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    marginBottom: '40px' // Espaço antes de começar os cards
  };

  return (
    <div className={styles.container}>
      {/* 3. A NOVA SEÇÃO COM A FOTO DE FUNDO */}
      <header style={headerStyle}>
        <h1 className={styles.tituloPrincipal} style={{ color: '#d4af37', border: 'none' }}>
          Menus para Eventos
        </h1>
        <p className={styles.subtitulo} style={{ color: '#fff' }}>
          Leve a experiência do Sushi Bar para sua festa
        </p>
      </header>

      {/* O SEU GRID DE MENUS CONTINUA IGUAL ABAIXO */}
      <div className={styles.grid}>
        {menusEventos.map((evento) => (
          <div key={evento.id} className={styles.card}>
            <div className={styles.badge}>{evento.qtd}</div>
            <h2>{evento.nome}</h2>
            <p className={styles.destaque}>{evento.destaque}</p>
            
            <ul className={styles.listaItens}>
              {evento.itens.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <li style={{border: 'none', color: '#d4af37'}}>...e muito mais</li>
            </ul>

            <div className={styles.preco}>
              {evento.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </div>
            
            <button 
              className={styles.btnOrcamento}
              onClick={() => handleOrcamento(evento.nome)}
            >
              Solicitar Orçamento
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}