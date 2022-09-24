import styled from '@emotion/styled'

export const Container = styled.div`
width: 350px;
height: 350px;
padding: ${p => p.theme.space[4]}px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.ivory}; 
margin-right: auto;
margin-left: auto;
`

export const Description = styled.div`
text-align: center;
`

export const Image = styled.img`
width: 150px;
`
export const List = styled.ul`
display: flex;
margin-right: auto;
margin-left: auto;
`

export const ListItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
margin-right: auto;
margin-left: auto;
padding: ${p => p.theme.space[2]}px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
width: 80px;
background-color: ${props => props.theme.colors.ivory} ;
}
`
export const Text = styled.p`
font-size:  ${p => p.theme.fontSizes.sm};
font-weight: ${p => p.theme.fontWeights.bold}; 
`
export const SpanText = styled.span`
font-size:  ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold}; 
`
export const SpanNumber = styled.span`
font-size:  ${p => p.theme.fontSizes.m}; 
`


