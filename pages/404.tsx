import { FC } from 'react';
import styled from 'styled-components';
import MainLayout from '../components/Layouts/MainLayout';

const ErrorMsg = styled.h1`
    color: red;
    text-align: center;
`;

const ErrorPage: FC = () => (
    <MainLayout>
        <ErrorMsg>Sorry, page not found</ErrorMsg>
    </MainLayout>
);

export default ErrorPage;
