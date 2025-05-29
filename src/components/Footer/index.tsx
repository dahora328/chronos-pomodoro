import sytles from './styles.module.css';

export function Footer() {
  return (
    <footer className={sytles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
