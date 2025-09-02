import { create } from 'zustand'
import type {FileFormat} from '../models/Interface'

interface FileStore {
    loading : boolean,
    files : FileFormat[],
    updating : boolean
    setLoading: (loading: boolean) => void,
    setUpdating : () => void
}

export const useFileStore = create<FileStore>((set) => ({
    loading : false,
    files : [],
    updating : false,
    setLoading: (loading : boolean) => set({ loading: loading }),
    setUpdating : () => set((state) => ({ updating: !state.updating })),
}))