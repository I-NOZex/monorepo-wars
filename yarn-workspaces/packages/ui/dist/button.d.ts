import { CSSProperties } from 'react';
export declare const Button: ({ label, color, ...props }: {
    label: string;
    color?: CSSProperties["color"];
} & React.ComponentProps<"button">) => import("react").JSX.Element;
