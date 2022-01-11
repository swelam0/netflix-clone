import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../others/Container'
import Logo from '../others/Logo'
import Lang from './Lang'

const NavBar = () => {
	return (
		<Nav>
			<Container>
				<Link to='/'>
					<Logo />
				</Link>

				<NavLogin>
					<Lang />

					<Link to='/login' className='loginBtn'>
						sign in
					</Link>
				</NavLogin>
			</Container>
		</Nav>
	)
}
const Nav = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 999;

	& > div {
		justify-content: space-between;
		align-items: center;
		padding-top: 30px;
		padding-bottom: 20px;
	}

	.loginBtn {
		background-color: var(--red);
		font-weight: 700;
		border-radius: 5px;
		font-size: 16px;
	}
`

const NavLogin = styled.div`
	display: flex;
	align-items: center;
	color: white;
`

export default NavBar
