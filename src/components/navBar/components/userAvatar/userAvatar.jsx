import defaultAvatar from '../../../../assets/images/png/defaultuserimage.png'
import { Image } from './userAvatar.styled'
import React from 'react'

export const UserAvatar = () => {
	return (
		<Image
			className='useravatar-img'
			src={defaultAvatar}
			alt='default avatar'></Image>
	)
}
