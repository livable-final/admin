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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 96px;
  min-width: 280px;
  max-width: 360px;
`;
export default Login;
