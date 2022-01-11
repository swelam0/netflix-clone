import styled from 'styled-components'
import Container from '../others/Container'

const index = () => {
	return (
		<BgImg>
			<Container>
				<h1>Login</h1>
			</Container>
		</BgImg>
	)
}

const BgImg = styled.div`
	position: relative;
	background-image: url('/images/bg.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 0;
	}

	& > div {
		color: var(--white);
		z-index: 98;
		padding-top: 70px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}
`

export default index
