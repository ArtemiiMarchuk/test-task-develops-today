import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Audio } from '@agney/react-loading';
import MainLayout from '../components/Layouts/MainLayout';
import { fetchPosts } from '../store/actions/posts';
import PostItem from '../components/PostItem/PostItem';
import { initializeStore } from '../store/store';
import { stateInterface, statePostsInterface } from '../interfaces/store/statesInterfaces';

const HeaderCaption = styled.h1`
    height: 300px;
    max-height: calc(100% - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px;
    font-weight: 500;
    background: black;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: #191b1f;
    min-height: 100vh;
    padding: 30px 0;
`;

const Posts: FC = () => {
    const dispatch = useDispatch();
    const { posts }: statePostsInterface = useSelector((state) => state.posts);

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts());
        }
    }, []);

    return (
        <MainLayout title={'Latest Posts'}>
            <>
                <HeaderCaption>Latest Posts</HeaderCaption>
                <Container>
                    {posts.length === 0 ? (
                        <Audio width={70} />
                    ) : (
                        posts.map((el) => <PostItem key={el.id} title={el.title} body={el.body} id={el.id} />)
                    )}
                </Container>
            </>
        </MainLayout>
    );
};

export const getServerSideProps = async (): Promise<{ props: { initialReduxState: stateInterface } }> => {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    await dispatch(fetchPosts());

    return { props: { initialReduxState: reduxStore.getState() } };
};

export default Posts;
