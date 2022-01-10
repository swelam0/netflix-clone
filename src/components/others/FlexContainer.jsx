import styled from 'styled-components'
import tw from 'twin.macro'

const FLexContainer = ({ children, className }) => {
	return <ContainerDiv className={className}>{children}</ContainerDiv>
}

const ContainerDiv = styled.div`
	${tw`
		flex
		max-w-7xl
		mx-auto
	`}
`

export default FLexContainer
