import styled from 'styled-components'

const Logo = () => {
	return (
		<Image>
			<img src='/images/logo.png' alt='logo' />
		</Image>
	)
}

const Image = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 133px;

	img {
		width: 100%;
	}

	@media (max-width: 992px) {
		width: 100%;
		margin-right: 20px;
	}
`

export default Logo
