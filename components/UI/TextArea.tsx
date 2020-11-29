import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { ITextArea } from '../../interfaces/Props';

const TextAreaElement = styled.textarea`
    border: 2px solid white;
    background: black;
    color: white;
    border-radius: 2px;
    padding: 10px;
    outline: none;

    ${(props) =>
        !props.isValid &&
        `
      border: 2px solid red;
    `};
`;

export const TextArea: FC<ITextArea> = ({ cols, rows, onChange, isValid, value, placeholder }: ITextArea) => (
    <TextAreaElement
        cols={cols}
        rows={rows}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        isValid={isValid}
        placeholder={placeholder}
        value={value}
    />
);
