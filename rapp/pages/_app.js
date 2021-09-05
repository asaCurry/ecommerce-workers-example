import 'tailwindcss/tailwind.css';
import '../styles/global_styles.scss';

import { store } from '../store/store'
import { Provider } from 'react-redux'

import Layout from '@layout/general';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>

    )
}