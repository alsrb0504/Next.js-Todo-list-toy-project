import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import wrapper from '../store/configureStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp);
