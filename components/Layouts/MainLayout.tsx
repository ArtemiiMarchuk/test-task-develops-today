import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import { IMainLayoutProps } from '../../interfaces/Props';
import { NavBar } from '../NavBar/NavBar';

const Main = styled.main`
    max-width: 100vw;
`;

const MainLayout: FC<IMainLayoutProps> = ({
    children,
    title = 'Blog',
    description = 'this is blog',
    keywords = ['blog'],
}: IMainLayoutProps) => (
    <>
        <Head>
            <title>{title} | Blog</title>
            <meta name="keywords" content={keywords.join(',')} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
        </Head>
        <NavBar />
        <Main>{children}</Main>
    </>
);

export default MainLayout;
