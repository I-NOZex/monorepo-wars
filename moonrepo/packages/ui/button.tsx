import styled from 'styled-components';

interface ButtonProps {
  color?: React.CSSProperties['color'];
  children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) => color || 'blue'};
  padding: 8px 16px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export default Button;
