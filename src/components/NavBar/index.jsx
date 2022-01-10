import { Link } from 'react-router-dom'
import Container from '../others/Container'
import Logo from '../others/Logo'

const NavBar = () => {
	return (
		<Container className='justify-between'>
			<Link to='/'>
				<Logo />
			</Link>

			<Link to='/login'>Login</Link>
		</Container>
	)
}

export default NavBar
