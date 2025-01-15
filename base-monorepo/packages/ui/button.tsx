import { CSSProperties } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ $color?: CSSProperties['color'] }>`
  background-color: ${({ $color }) => $color || 'blue'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
  color?: CSSProperties['color'];
}

export const Button = ({ label, color, ...props }: ButtonProps) => {
  return (
    <StyledButton $color={color} {...props}>
      {label}
    </StyledButton>
  );
};
