import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import sytles from './styles.module.css';

export function Menu() {
  return (
    <nav className={sytles.menu}>
      <a className={sytles.menuLink} href='#'>
        <HouseIcon />
      </a>
      <a className={sytles.menuLink} href='#'>
        <HistoryIcon />
      </a>
      <a className={sytles.menuLink} href='#'>
        <SettingsIcon />
      </a>
      <a className={sytles.menuLink} href='#'>
        <SunIcon />
      </a>
    </nav>
  );
}
