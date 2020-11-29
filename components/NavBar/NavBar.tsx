import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ILink } from '../../interfaces/Props';

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height 64px;
    background: black;
    border-bottom: 2px solid white;
    
    a {
        color: white;
        font-size: 20px;
        font-weight: 500;
    }
`;

export const NavBar: FC = () => {
    const links: ILink[] = [
        { text: 'Latest Posts', path: '/' },
        { text: 'Create Post', path: '/posts/new' },
    ];

    return (
        <>
            <Nav>
                {links.map((link, key) => (
                    <Link href={link.path} key={key}>
                        <a>{link.text}</a>
                    </Link>
                ))}
            </Nav>
        </>
    );
};
