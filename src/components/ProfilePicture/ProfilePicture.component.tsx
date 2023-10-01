import IProfilePicture from '../../types/ProfilePicture';

import './style.css';

export function ProfilePictureComponent(props: IProfilePicture) {
  return <img className={'profile-picture'} src={props.source} />;
}
