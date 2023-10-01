import IProfilePicture from '../../types/ProfilePicture';

export function ProfilePictureComponent(props: IProfilePicture) {
  return <img className="" src={props.source} />;
}
