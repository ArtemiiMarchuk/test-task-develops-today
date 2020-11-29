import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MainLayout from '../../components/Layouts/MainLayout';
import { stateInterface, statePostsInterface } from '../../interfaces/store/statesInterfaces';
import { initializeStore } from '../../store/store';
import { fetchPostItem } from '../../store/actions/posts';
import { NextPageContext } from 'next';

const PostBlock = styled.div`
    min-height: calc(100vh - 64px);
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    h1 {
        font-size: 25px;
        font-weight: 500;
        color: white;
        border-bottom: 2px solid white;
        padding-bottom: 100px;
        margin-bottom: 100px;
    }

    h2 {
        font-size: 18px;
        font-weight: 400;
        color: white;
    }
`;

const Post: FC = () => {
    const { activePost }: statePostsInterface = useSelector((state) => state.posts);

    return (
        <MainLayout title={activePost.title}>
            <PostBlock>
                <h1>{activePost.title}</h1>
                <h2>{activePost.body}</h2>
            </PostBlock>
        </MainLayout>
    );
};

export const getServerSideProps = async ({
    query,
}: NextPageContext): Promise<{ props: { initialReduxState: stateInterface } }> => {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    await dispatch(fetchPostItem(Number(query.postId)));

    return { props: { initialReduxState: reduxStore.getState() } };
};

export default Post;
