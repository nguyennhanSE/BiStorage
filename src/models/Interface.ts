export interface FileFormat {
    _id : string,
    name : string,
    total_size : number,
    owner_id : string,
    is_folder : boolean,
    parent_folder_id : string,
    created_at : string,
    updated_at : string,
    opened_at : string,
    description : string,
    is_deleted : boolean,
    deleted_at : string,
    tag_ids : Tag[],
    storage_detail : FileOnS3
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
    description: string;
    has_password: boolean;
    is_folder: boolean;
    is_secure: boolean;
    name: string;
    parent_folder_id: string;
    password: string;
    storage_detail: {
      mime_type: string;
      size: string;
    };
    tags: string[];
    upload_lock_value: string;
}

export interface FetchFilesParams {
    is_deleted: boolean;
    is_folder?: boolean;
    sort_by: string;
    is_asc: boolean;
    offset: number;
    limit: number;
  }