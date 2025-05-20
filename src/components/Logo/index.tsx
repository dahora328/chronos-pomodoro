import { TimerIcon } from 'lucide-react';
import sytles from './styles.module.css';

export function Logo() {
  return (
    <div className={sytles.logo}>
      <a className={sytles.logoLink} href='#'>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
