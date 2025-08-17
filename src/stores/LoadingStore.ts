import { create } from 'zustand'

interface LoadingStore {
    loading : boolean,
    setLoading: (loading: boolean) => void,
}

interface LoginExpiredStore {
    loginExpired: boolean,
    setLoginExpired: (loginExpired: boolean) => void,
}

export const useLoadingStore = create<LoadingStore>((set) => ({
    loading : false,
    setLoading: (loading : boolean) => set({ loading: loading }),
}))

export const useLoginExpiredStore = create<LoginExpiredStore>((set) => ({
    loginExpired: false,
    setLoginExpired: (loginExpired: boolean) => set({ loginExpired }),
}))