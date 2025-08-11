import { UserTemp } from '@/components/common/PermissionModal'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UserPermissionStore {
    user: UserTemp | null;
    setUser: (user: UserTemp | null) => void;
}

export const useUserPermissionStore = create<UserPermissionStore>()(
    devtools(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
        }),
        {
            name: 'UserPermissionStore'
        }
    )
);
