import styled from 'styled-components'
import Container from '../others/Container'
import GetStarted from './GetStarted'

const Hero = () => {
	return (
		<BgImg>
			<Container>
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime</h2>

				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>

				<GetStarted />
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

	h1 {
		font-size: 3.3rem;
		max-width: 550px;
		line-height: 1;
		text-align: center;
	}

	h2 {
		font-size: 1.625rem;
		font-weight: 400;
		margin: 15px 0;
		margin-bottom: 40px;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 20px;
		text-align: center;
	}

	@media (max-width: 992px) {
		h1 {
			font-size: 40px;
		}
		h2 {
			font-size: 25px;
			margin-bottom: 30px;
		}
		p {
			font-size: 18px;
			margin-bottom: 10px;
		}
	}
`

export default Hero
