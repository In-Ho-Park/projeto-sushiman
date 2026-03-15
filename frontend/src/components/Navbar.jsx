import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/eventos" className={styles.link}>Eventos</Link>
      <Link to="/trabalho" className={styles.link}>Galeria</Link>
      <Link to="/sobre" className={styles.link}>O Chef</Link>
    </nav>
  );
}