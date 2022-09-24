import styled from '@emotion/styled'

export const Table = styled.table`
margin-right: auto;
margin-left: auto;
margin-bottom:  ${p => p.theme.space[6]}px;
margin-top:  ${p => p.theme.space[6]}px;
display:flex-inline;
flex-direction: column;
align-items: center;
justify-conten: center;
width: 500px;
text-align: center;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`

export const Head = styled.thead`
background-color: ${p => p.theme.colors.boxColor};
`


export const Body = styled.tbody`
background-color: ${p => p.theme.colors.ivory};
`

