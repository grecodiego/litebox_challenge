import defaultAvatar from '../../../../assets/images/png/defaultuserimage.png'
import styled from 'styled-components'

export const UserAvatar = () => {
	return (
		<Image
			className='useravatar-img'
			src={defaultAvatar}
			alt='default avatar'
		></Image>
	)
}

const Image = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	display: flex;
	vertical-align: middle;
	background-color: green;
	object-fit: cover;
	object-position: center;
`
