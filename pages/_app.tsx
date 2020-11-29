import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { FC } from 'react';
import '../styles/globals.css';
import { useStore } from '../store/store';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <>
            <NextNprogress color="white" startPosition={0.3} stopDelayMs={200} height={2} />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;
