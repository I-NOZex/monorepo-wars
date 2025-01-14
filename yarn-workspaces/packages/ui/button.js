import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledButton = styled.button `
  background-color: ${({ $color }) => $color || 'blue'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
export const Button = ({ label, color, ...props }) => {
    return (_jsx(StyledButton, { "$color": color, ...props, children: label }));
};
