import { useState } from 'react';
import styles from './Contato.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', pedido: '' });

   const enviarPedido = (e) => {
  e.preventDefault();
  
  const numeroTelefone = "5511999999999"; // COLOQUE O NOME DO SEU AMIGO AQUI (com DDD)
  const mensagem = `Olá Chef! Me chamo *${formData.nome}* e gostaria de fazer um pedido: \n\n_${formData.pedido}_`;
  
  // Codifica o texto para o formato de link (URL)
  const url = `https://wa.me/${5548999270100}?text=${encodeURIComponent(mensagem)}`;
  
  // Abre o WhatsApp em uma nova aba
  window.open(url, "_blank");
};

  return (
    <section className={styles.secaoContato}>
      <h2 style={{color: '#fff', textAlign: 'center'}}>Solicitar Orçamento</h2>
      <form className={styles.formulario} onSubmit={enviarPedido}>
        <div className={styles.campo}>
          <label>Seu Nome</label>
          <input 
            type="text" 
            value={formData.nome} 
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            placeholder="Ex: Gabriel"
            required 
          />
        </div>
        <div className={styles.campo}>
          <label>O que você deseja?</label>
          <textarea 
            rows="4" 
            value={formData.pedido}
            onChange={(e) => setFormData({...formData, pedido: e.target.value})}
            placeholder="Ex: Gostaria de um combo para 2 pessoas no sábado..."
            required
          />
        </div>
        <button type="submit" className={styles.botao}>Enviar para o Chef</button>
      </form>
    </section>
  );
}
