import styled from "styled-components"

interface TextProps {
  variant?: 'paragraph' | 'title' | 'subtitle'
}

const TextComponent = styled.span<TextProps>`
`

export default TextComponent