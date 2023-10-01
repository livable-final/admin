import theme from '@/styles/theme';
import Layout from '@/components/common/Layout';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);

  let url = '';
  if (typeof window !== 'undefined') {
    url = window.location.pathname;
  }
  useEffect(() => {
    if (url === '/login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [url]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isLogin ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
