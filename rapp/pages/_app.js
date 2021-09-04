import 'tailwindcss/tailwind.css';
import '../styles/global_styles.scss';

import Layout from '@layout/general';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}