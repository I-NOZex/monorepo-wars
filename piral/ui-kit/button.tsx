import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button<{ $color?: string }>`
  background-color: ${({ $color }) => $color || 'blue'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

interface ButtonProps{
  label: string;
  color?: string;
}

export const Button = ({ label, color, ...props }: ButtonProps) => {
  return (
    <StyledButton $color={color} {...props}>
      {label}
    </StyledButton>
  );
};