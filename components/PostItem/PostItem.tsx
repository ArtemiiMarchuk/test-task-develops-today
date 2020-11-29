import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { IPost } from '../../interfaces/Post';

const PostBlock = styled.a`
    width: 200px;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid white;
    border-radius: 2px;
    padding: 15px;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 30px;

    :hover {
        border: none;
    }

    h2 {
        color: white;
        font-size: 23px;
        font-weight: 400;
        text-align: center;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    h3 {
        color: white;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
`;

const PostItem: FC<IPost> = ({ title, id, body }: IPost) => (
    <Link href={`/posts/${id}`}>
        <PostBlock>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </PostBlock>
    </Link>
);

export default PostItem;
