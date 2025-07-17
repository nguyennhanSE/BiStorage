import { create } from 'zustand'
import type {FileFormat} from '../models/Interface'

interface FileStore {
    loading : boolean,
    files : FileFormat[],
    setLoading: (loading: boolean) => void,
}

export const useFileStore = create<FileStore>((set) => ({
    loading : false,
    files : [],
    setLoading: (loading : boolean) => set({ loading: loading }),
}))