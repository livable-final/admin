import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type SaveStore = {
  user: string;
  setUserToken: (value: string) => void;
};

const initialUserState = '';

const useSaveStore = create<SaveStore>()(
  persist(
    (set) => ({
      user: initialUserState,
      setUserToken: (value: string) =>
        set({
          user: value,
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSaveStore;
