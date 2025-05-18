import { TimerIcon } from 'lucide-react';
import { Heading } from './assets/components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.log('oi');
  return (
    <>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
