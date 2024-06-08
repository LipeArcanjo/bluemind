import { ButtonHTMLAttributes } from "react";
import { StyledButton } from './index.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "small" | "large";
    color?: "green" | "blue" | any;
    onClick?: any;
    children: React.ReactNode;
    type?: any;
}

export const Button = ({
    color,
    size,
    onClick,
    type,
    children
}: ButtonProps) => {
    return (
        <StyledButton
            color={color}
            size={size}
            onClick={onClick}
            type={type}
        >
            {children}
        </StyledButton>
    );
};