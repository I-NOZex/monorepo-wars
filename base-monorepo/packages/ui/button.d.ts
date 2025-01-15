import { CSSProperties } from 'react';
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    label: string;
    color?: CSSProperties['color'];
}
export declare const Button: ({ label, color, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
