import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { LeftBarHeaderComponent } from '../LeftBar/LeftBarHeader.component';

import './style.css';

export function LeftBarComponent() {
  return (
    <div className="left-bar">
      <LeftBarHeaderComponent />
    </div>
  );
}
