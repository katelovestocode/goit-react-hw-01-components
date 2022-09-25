import styled from '@emotion/styled'


//// Used Box instead
// export const Container = styled.section`
// padding:  ${p => p.theme.space[6]}px;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-conten: center;`

export const Title = styled.h2`
font-size: ${p => p.theme.fontSizes.sm};`

export const List = styled.ul`
display: flex;`

export const ListItem = styled.li`
display: flex;
flex-direction: column;
padding: ${p => p.theme.space[3]}px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.boxColor};`

export const Label = styled.span`
margin-bottom: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.sm};
font-weight: ${p => p.theme.fontWeights.bold};`


export const Percentage = styled.span`
margin-bottom: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`