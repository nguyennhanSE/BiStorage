export interface FileFormat {
    "created_at": number,
    "deleted_at": number,
    "description": string,
    "id": string,
    "is_deleted": boolean,
    "is_folder": boolean,
    "name": string,
    "opened_at": number,
    "owner_id": string,
    "parent_folder_id": string,
    "permissions": [
        {
        "email": string,
        "first_name": string,
        "last_name": string,
        "permission_type": number,
        "user_id": string,
        "user_image": string
        }
    ],
    "storage_detail": {
        "file_size": number,
        "mime_type": string
    },
    "tag_ids": string[],
    "total_size": number,
    "updated_at": number
}

export interface Tag {
    _id : string,
    name : string
}

export interface FileOnS3 {
    size : number,
    mime_type : string,
    is_uploaded : boolean,
    is_uploading : boolean,
    storage_provider : string,
    storage_key : string,
    storage_bucket : string,
}

export interface User {
    _id : string,
    first_name : string,
    last_name : string,
    email : string,
    password : string,
    image : string,
    auth_provider : string,
    created_at : number,
    updated_at : number,
    current_storage_at : number,
    limit_storage_size : number,
}

export interface Comment {
    _id : string,
    file_id : string,
    user_id : string,
    content : string,
    mentions : object,
    created_at : number,
    answer : Answer[]
}

export interface Answer {
    _id : string
}

export interface Notifications {
    _id : string,
    user_id : string,
    type : number,
    title : string,
    message : string,
    action_url : string,
    seen : boolean,
    from_user_id : string,
    created_at : number
}

export interface FilePermission {
    _id : string,
    file_id : string,
    user_id : string,
    permission_type : number,
    can_share : boolean,
    expire_at : number
}

// các interface có body Axios Request:
export interface AddFilePayload {
    "description": string,
    "is_folder": true,
    "name": string,
    "parent_folder_id": string,
    "storage_detail": {
        "size": number
    },
    "tag_ids": string[]
}

export interface FetchFilesParams {
  tag_id?: string | null ;
  parent_folder_id?: string | null;
  is_folder?: boolean | null;
  is_deleted?: boolean | null;
  mime_type?: string | null;
  sort: string;               // bắt buộc
  is_asc?: boolean | null;
  offset?: number | null;
  limit?: number | null;
}

export const defaultFetchFilesParams : FetchFilesParams = {
  tag_id: null,
  parent_folder_id: null,
  is_folder: null,
  is_deleted: null,
  mime_type: null,
  sort: "created_at",
  is_asc: null,
  offset: null,
  limit: null
}