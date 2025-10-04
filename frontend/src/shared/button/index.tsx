import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonColor = 'blue' | 'red' | 'green' | 'gray';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  children: React.ReactNode;
}

const colorMap: Record<ButtonColor, { bg: string; text: string; border: string }> = {
  blue: { bg: '#3b82f6', text: '#ffffff', border: '#3b82f6' },
  red: { bg: '#ef4444', text: '#ffffff', border: '#ef4444' },
  green: { bg: '#10b981', text: '#ffffff', border: '#10b981' },
  gray: { bg: '#6b7280', text: '#ffffff', border: '#6b7280' },
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $color: ButtonColor;
  disabled?: boolean;
}>`
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $variant, $color, disabled }) => {
    const { bg, text, border } = colorMap[$color];

    if (disabled) {
      return css`
        opacity: 0.6;
        cursor: not-allowed;
        background-color: ${bg};
        color: ${text};
        border: none;
      `;
    }

    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${bg};
          color: ${text};
          border: none;

          &:hover {
            opacity: 0.85;
          }
        `;
      case 'secondary':
        return css`
          background-color: transparent;
          color: ${bg};
          border: 1px solid ${bg};

          &:hover {
            background-color: ${bg};
            color: ${text};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${bg};
          border: 1px dashed ${border};

          &:hover {
            background-color: ${bg};
            color: ${text};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  color = 'blue',
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $color={color} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};
