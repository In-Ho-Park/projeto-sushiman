import styles from './Cardapio.module.css';

export default function Cardapio({ itens }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Sushiman Pro</h1>
        <p className={styles.subtitulo}>Experiência Omakase em sua casa</p>
      </header>

      <div className={styles.grid}>
        {itens.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.info}>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
            </div>
            <div className={styles.preco}>
              R$ {item.preco.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}