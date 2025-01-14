// packages/ui/button.tsx

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

export const Button = ({
  label,
  color,
  ...props
}: {
  label: string;
  color?: CSSProperties['color'];
} & React.ComponentProps<'button'>) => {
  return (
    <StyledButton $color={color} {...props}>
      {label}
    </StyledButton>
  );
};
