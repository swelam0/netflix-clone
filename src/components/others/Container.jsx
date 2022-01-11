import styled from 'styled-components'

const Container = ({ children }) => {
	return <ContainerDiv>{children}</ContainerDiv>
}

const ContainerDiv = styled.div`
	position: relative;
	display: flex;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 15px;
`

export default Container
