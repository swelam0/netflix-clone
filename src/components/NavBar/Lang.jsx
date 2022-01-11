import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Lang = () => {
	return (
		<LangBtn>
			<div>
				<FontAwesomeIcon icon={faGlobe} size='sm' />
				<span>English</span>
				<FontAwesomeIcon icon={faCaretDown} />
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
	)
}

const LangBtn = styled.div`
	position: relative;
	margin-right: 30px;

	& > div {
		font-size: 16px;
		border: 1px solid white;
		border-radius: 5px;
		cursor: pointer;
		min-width: 80px;
		min-height: 34px;
		display: flex;
		align-items: center;
		padding: 0 10px;

		span {
			margin: 0 10px;
		}
	}

	& > ul {
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		padding: 10px;
		background-color: rgb(255 255 255 / 17%);
		border-radius: 10px;
		transition: all 0.5s ease;
		opacity: 0;
		visibility: hidden;

		li {
			margin: 10px 5px;
			font-size: 16px;
			cursor: pointer;
		}
	}

	&:hover {
		& > ul {
			top: 120%;
			visibility: visible;
			opacity: 1;
		}
	}
`

export default Lang
