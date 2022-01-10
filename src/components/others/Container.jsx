import styled from 'styled-components'
import tw from 'twin.macro'

const Container = ({ children, className }) => {
	return <ContainerDiv className={className}>{children}</ContainerDiv>
}

const ContainerDiv = styled.div`
	${tw`
		flex
		items-center
		py-7
		px-3.5
		max-w-7xl
		mx-auto
	`}
`

export default Container
