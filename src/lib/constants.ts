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

