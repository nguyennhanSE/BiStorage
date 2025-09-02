import { GoHome } from "react-icons/go";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineSdStorage } from "react-icons/md";
import { RiFolderSharedLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { RiDeleteBin7Line } from "react-icons/ri";
import { SiImagedotsc } from "react-icons/si";
import { MdVideoStable } from "react-icons/md";
import { LuFileAudio2 } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { GiMeepleCircle } from "react-icons/gi";
import { RiWechatChannelsLine } from "react-icons/ri";

export const generalInSidebar = [
    { name: 'Dashboard', icon: GoHome, path: '/dashboard' },
    { name: 'Statistics', icon: BsFillClipboardDataFill, path: '/statistics' },
    { name: 'BiChatBox', icon: RiWechatChannelsLine, path: '/bichatbox' },
    { name: 'Workspace', icon: BsPersonWorkspace, path: '/workspace' },
];

export const filesInSidebar = [
    {name : 'Storage', icon : MdOutlineSdStorage,path : '/storage'},
    {name : 'Shared', icon : RiFolderSharedLine,path : '/shared'},
    {name : 'Recent', icon : IoTimerOutline,path : '/recent'},
    {name : 'Deleted', icon : RiDeleteBin7Line,path : '/deleted'},
]

export const dataInSpace = [
    {name : 'Images', icon : SiImagedotsc },
    {name : 'Videos', icon : MdVideoStable},
    {name : 'Audio', icon : LuFileAudio2},
    {name : 'Documents', icon : CgFileDocument},
    {name : 'Other', icon : GiMeepleCircle}
]

export const generalInStatisticsSidebar = [
    { name: 'Dashboard', icon: GoHome, path: '/dashboard' },
    { name: 'Statistics', icon: BsFillClipboardDataFill, path: '/statistics' },
];


export function formatSize(bytes: number) {
    if (bytes >= 1024 * 1024) return Math.round(bytes / (1024 * 1024)) + 'mb';
    if (bytes >= 1024) return Math.round(bytes / 1024) + 'kb';
    return bytes + 'b';
}

export function formatDateFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function timeAgo(iso?: string) {
    if (!iso) return '—';
    // Parse chuỗi dd/MM/yyyy
    const [day, month, year] = iso.split('/').map(Number);
    const date = new Date(year, month - 1, day);

    const diff = Date.now() - date.getTime();
    if (diff < 0) return 'in the future';

    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins} min${mins > 1 ? 's' : ''} ago`;

    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hour${hrs > 1 ? 's' : ''} ago`;

    const days = Math.floor(hrs / 24);
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;

    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? 's' : ''} ago`;
}