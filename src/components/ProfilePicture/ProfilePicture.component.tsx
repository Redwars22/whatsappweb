import IProfilePicture from '../../types/ProfilePicture';

import { ProfilePictures } from './ProfilePicture.style.scss';

export function ProfilePictureComponent(props: IProfilePicture) {
  return <img className={ProfilePictures} src={props.source} />;
}
