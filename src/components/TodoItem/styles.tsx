import styled from "styled-components"

export const StyledTitle = styled.span<{ isCompleted: boolean }>`
font-style: ${(props) => props.isCompleted ? 'italic' : null};
color: ${(props) => props.isCompleted ? '#d35e0f' : null};
opacity:  ${(props) => props.isCompleted ? '0.4' : null};
text-decoration: ${(props) => props.isCompleted ? 'line-through' : null};
`