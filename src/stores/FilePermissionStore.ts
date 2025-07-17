import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Tag } from '../models/Interface'

export interface PermissionFileType {
  _id: string
  name: string
  total_size: number
  owner_id: string
  is_folder: boolean
  parent_folder_id: string
  created_at: string
  updated_at: string
  opened_at: string
  description: string
  is_deleted: boolean
  deleted_at: string
  tag_ids: Tag[]
  storage_detail: {
    size: number
    mime_type: string
    is_uploaded: boolean
    is_uploading: boolean
    storage_provider: string
    storage_key: string
    storage_bucket: string
  }
  child: PermissionFileType[]
}

interface FilePermissionStore {
  loading: boolean
  parents: PermissionFileType[]
  setLoading: (loading: boolean) => void
  setParents: (files: PermissionFileType[]) => void
}

export const useFilePermissionStore = create<FilePermissionStore>()(
  devtools(
    (set) => ({
      loading: false,
      parents: [],
      setLoading: (loading) => set({ loading }),
      setParents: (files) => set({ parents: files })
    }),
    { name: 'FilePermissionStore' }
  )
)
