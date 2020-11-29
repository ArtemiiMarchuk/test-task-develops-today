import { FC, useState } from 'react';
import styled from 'styled-components';
import { Audio } from '@agney/react-loading';
import { useSelector, useDispatch } from 'react-redux';
import MainLayout from '../../components/Layouts/MainLayout';
import { Button } from '../../components/UI/Button';
import { TextArea } from '../../components/UI/TextArea';
import { Input } from '../../components/UI/Input';
import { createContent, createPost, createTitle } from '../../store/actions/create';
import { stateCreateInterface } from '../../interfaces/store/statesInterfaces';

const HeaderCaption = styled.h1`
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color: white;
    margin-bottom: 100px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    min-height: calc(100vh - 64px);
    padding: 50px 0;
`;

const CreatePost: FC = () => {
    const { title, content, allowCreate }: stateCreateInterface = useSelector((state) => state.create);
    const dispatch = useDispatch();
    const [isClickedInput, setIsClickedInput] = useState<boolean>(false);
    const [isClickedTextArea, setIsClickedTextArea] = useState<boolean>(false);

    const validText = (text: string): boolean => {
        return text.trim().length > 0;
    };

    const handleInput = (value: string): void => {
        setIsClickedInput(true);
        dispatch(createTitle(value));
    };

    const handleTextArea = (value: string): void => {
        setIsClickedTextArea(true);
        dispatch(createContent(value));
    };

    const handleCreate = (): void => {
        dispatch(createPost());
    };

    return (
        <MainLayout title={'Create Post'}>
            <Container>
                <HeaderCaption>Create Post</HeaderCaption>
                {allowCreate ? (
                    <>
                        <Input
                            value={title}
                            onChange={handleInput}
                            placeholder={'Post Title'}
                            isValid={validText(title) || !isClickedInput}
                        />
                        <TextArea
                            rows={20}
                            cols={80}
                            onChange={handleTextArea}
                            placeholder={'Post Content'}
                            isValid={validText(content) || !isClickedTextArea}
                            value={content}
                        />
                        <Button
                            disabled={!validText(title) || !validText(content)}
                            onClick={handleCreate}
                            text={'Create Post'}
                        />
                    </>
                ) : (
                    <Audio width={70} color={'white'} />
                )}
            </Container>
        </MainLayout>
    );
};

export default CreatePost;
