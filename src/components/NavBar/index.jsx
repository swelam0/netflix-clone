import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FLexContainer from '../others/FlexContainer'
import Logo from '../others/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
	return (
		<Nav>
			<FLexContainer className='justify-between px-3.5 py-7'>
				<Link to='/'>
					<Logo />
				</Link>

				<NavLogin>
					<LangBtn>
						<div>
							<FontAwesomeIcon icon={faGlobe} size='sm' />
							<span>English</span>
						</div>
						<ul>
							<li>
								<a>English</a>
							</li>
							<li>
								<a>العربيه</a>
							</li>
						</ul>
					</LangBtn>

					<Link to='/login'>Login</Link>
				</NavLogin>
			</FLexContainer>
		</Nav>
	)
}
const Nav = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 999;
`

const NavLogin = styled.div`
	display: flex;
	color: white;
`

const LangBtn = styled.div`
	position: relative;
	margin-right: 30px;
`

export default NavBar
