import { css } from '@emotion/react';
import useSaveStore from '@/stores/useSaveStore';
import { useRouter } from 'next/router';
import Button from '../common/Button';

function AuthForm() {
  const router = useRouter();
  const ADMIN_TOKEN = process.env.ADMIN_TOKEN as string;
  const { setUserToken } = useSaveStore();

  const onClickCategoryHandler = () => {
    setUserToken(ADMIN_TOKEN);
    router.push('/');
  };

  return (
    <div css={categoryWrapperStyles}>
      <Button
        content="관리자 로그인"
        variant="blue"
        onClick={onClickCategoryHandler}
      />
    </div>
  );
}

const categoryWrapperStyles = css``;

export default AuthForm;
