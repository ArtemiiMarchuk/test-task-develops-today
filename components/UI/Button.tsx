import { FC } from 'react';
import styled from 'styled-components';
import { IButton } from '../../interfaces/Props';

const StyledButton = styled.button`
    background: black;
    color: white;
    font-size: 15px;
    padding: 10px 20px;
    margin-top: 40px;
    border: 2px solid white;
    border-radius: 2px;
    cursor: pointer;

    ${(props) =>
        props.disabled &&
        `
      cursor: not-allowed;
    `};
`;

export const Button: FC<IButton> = ({ disabled, text, onClick }: IButton) => (
    <StyledButton disabled={disabled} onClick={onClick}>
        {text}
    </StyledButton>
);
