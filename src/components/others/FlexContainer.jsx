import styled from 'styled-components'

const FLexContainer = ({ children, className }) => {
	return <ContainerDiv className={className}>{children}</ContainerDiv>
}

const ContainerDiv = styled.div`
	display: flex;
	max-width: 1280px;
	margin: 0 auto;
`

export default FLexContainer
