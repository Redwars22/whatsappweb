import IProfilePicture from '../../types/ProfilePicture';

import * as styles from './ProfilePicture.style.scss';

export function ProfilePictureComponent(props: IProfilePicture) {
  return <img className={styles.ProfilePictures} src={props.source} />;
}
