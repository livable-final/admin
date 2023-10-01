import AuthForm from '@/components/auth/AuthForm';
import useSaveStore from '@/stores/useSaveStore';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Login() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = useSaveStore.getState().user;
    setUserToken(token);
  }, []);

  if (userToken) router.push('/');

  return (
    <div css={containerStyles}>
      <AuthForm />
    </div>
  );
}

const containerStyles = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Login;
