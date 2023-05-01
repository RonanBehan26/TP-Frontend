import styled from 'styled-components'

export const Box = styled.div`

padding-top: 10px;
padding-bottom: 10px;
background: green;
bottom: 0;
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
background: black;
	display: flex;
	width: 1000px;
	margin: 0 auto;
    textAlignVertical: "center"
    
`

export const Row = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 12px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;

export const Heading = styled.p`
font-size: 24px;
color: #ffb3b3;
margin-bottom: 0px;
`;

// export const Column = styled.div`
// display: flex;
// flex-direction: column;
// text-align: left;

// `;

// export const Box = styled.div`
// padding: 80px;
// background: black;
// position: fixed;
// bottom: 0;
// width: 100%;

// @media (max-width: 1000px) {
// 	padding: 70px 30px;
// }
// `;

// export const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	max-width: 1000px;
// 	margin: 0 auto;
// 	/* background: red; */
// `

// export const Row = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fill,
// 						minmax(185px, 1fr));
// grid-gap: 20px;

// @media (max-width: 1000px) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
// `;