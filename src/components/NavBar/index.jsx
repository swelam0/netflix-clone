import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import FLexContainer from '../others/FlexContainer'
import Logo from '../others/Logo'

const NavBar = () => {
	return (
		<Nav>
			<FLexContainer className='justify-between px-3.5 py-7'>
				<Link to='/'>
					<Logo />
				</Link>

				<Link to='/login'>Login</Link>
			</FLexContainer>
		</Nav>
	)
}
const Nav = styled.div`
	${tw`
		absolute
		top-0
		right-0
		left-0
		z-10
	`}
`

export default NavBar
