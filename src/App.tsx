import { FC } from 'react';
import { LeftBarComponent } from './components/LeftBar/LeftBar.component';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <LeftBarComponent />
    </div>
  );
};
