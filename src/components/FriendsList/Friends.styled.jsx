import styled from '@emotion/styled'

//// Used Box instead
// export const List = styled.ul`
// display: flex;
// padding: ${p => p.theme.space[6]}px;
// border: 1px solid ${p => p.theme.colors.ivory};`

export const ListItem = styled.li`
display: flex;
align-items: center;
justify-conten: center;
padding: ${p => p.theme.space[4]}px;
margin-right: auto;
margin-left: auto;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`
export const Span = styled.span`
display: block;
width: 15px;
height: 15px;
border-radius: ${p => p.theme.radii.normal}; 
margin-right: ${p => p.theme.space[2]}px;
background-color: ${props =>  props.status ? props.theme.colors.green  :   props.theme.colors.red }`

export const Name = styled.p`
font-size:  ${p => p.theme.fontSizes.sm};
font-weight: ${p => p.theme.fontWeights.bold}; 
`

export const Image = styled.img`
width: 48px;
`