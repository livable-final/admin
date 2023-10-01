import { css } from '@emotion/react';
import useSaveStore from '@/stores/useSaveStore';
import { useRouter } from 'next/router';
import Button from '../common/Button';

function AuthForm() {
  const ADMIN_TOKEN = process.env.ADMIN_TOKEN as string;
  const { setUserToken } = useSaveStore();
  const router = useRouter();

  const onClickCategoryHandler = () => {
    setUserToken(ADMIN_TOKEN);
    router.reload();
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
