import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components'
import Container from '../others/Container'

const GetStarted = () => {
	return (
		<Container>
			<EmailForm>
				<input type='text' placeholder='Email address' />
				<button>
					<span>get started</span>
					<FontAwesomeIcon icon={faAngleRight} size='1x' />
				</button>
			</EmailForm>
		</Container>
	)
}

const EmailForm = styled.div`
	display: flex;
	width: 100vw;
	max-width: 660px;
	border-radius: 5px;
	overflow: hidden;

	input {
		width: 100%;
		height: 100%;
		height: 50px;
		padding: 5px 20px;
		font-size: 18px;
		color: var(--black);

		&::placeholder {
			color: var(--gray);
		}
	}

	button {
		background-color: var(--red);
		color: var(--white);
		font-size: 20px;
		font-weight: 700;
		min-width: max-content;
		height: 60px !important;
		padding: 0 20px;

		span {
			margin-right: 10px;
		}
	}

	@media (max-width: 992px) {
		max-width: 80vw;
		margin-top: 40px;
	}
`

export default GetStarted
