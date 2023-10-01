import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { LeftBarHeaderComponent } from '../LeftBar/LeftBarHeader.component';

export function LeftBarComponent() {
  return (
    <>
      <LeftBarHeaderComponent />
      <div>
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={''}
          title={''}
        />
      </div>
    </>
  );
}
