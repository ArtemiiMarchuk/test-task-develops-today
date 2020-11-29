import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { IInput } from '../../interfaces/Props';

const InputElement = styled.input`
    padding: 5px;
    width: 300px;
    border: 2px solid white;
    background: black;
    color: white;
    border-radius: 2px;
    margin-bottom: 20px;
    outline: none;

    ${(props) =>
        !props.isValid &&
        `
      border: 2px solid red;
    `};
`;

export const Input: FC<IInput> = ({ type = 'text', isValid, placeholder, onChange, value }: IInput) => (
    <InputElement
        type={type}
        isValid={isValid}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        value={value}
    />
);
