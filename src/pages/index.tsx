import { useEffect } from 'react';
import useSaveStore from '@/stores/useSaveStore';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!useSaveStore.getState().user) {
      router.push('/login');
    }
  }, [router]);
  return <div>admin home</div>;
}

export default Home;
