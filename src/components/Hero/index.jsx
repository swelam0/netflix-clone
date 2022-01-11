import styled from 'styled-components'
import FLexContainer from '../others/FlexContainer'

const Hero = () => {
	return (
		<BgImg>
			<FLexContainer className='relative z-20 py-24'>
				<h1 className='text-white'>Hero section</h1>
			</FLexContainer>
		</BgImg>
	)
}

const BgImg = styled.div`
	position: relative;
	min-height: 100vh;
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
	}
`

export default Hero
