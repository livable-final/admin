import { css } from '@emotion/react';
import useSaveStore from '@/stores/useSaveStore';
import { useRouter } from 'next/router';

function AuthForm() {
  const router = useRouter();
  const ADMIN_TOKEN = process.env.ADMIN_TOKEN as string;
  const { setUserToken } = useSaveStore();

  const onClickCategoryHandler = () => {
    setUserToken(ADMIN_TOKEN);
    router.push('/');
  };

  return (
    <div css={purposeContainerStyles}>
      <div css={categoryContainerStyles}>
        <div css={categoryWrapperStyles}>
          <button type="button" onClick={onClickCategoryHandler}>
            관리자
          </button>
        </div>
      </div>
    </div>
  );
}

const purposeContainerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 230px;
`;

const categoryContainerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const categoryWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  min-width: 280px;
  max-width: 360px;
  padding: 0 4px 0;
`;

export default AuthForm;
