import defaultAvatar from '../../../../assets/images/png/defaultuserimage.png'
import { Image } from './userAvatar.styled'

export const UserAvatar = () => {
	return (
		<Image
			className='useravatar-img'
			src={defaultAvatar}
			alt='default avatar'
		></Image>
	)
}
