'use client'

import { filesInSidebar, formatDateFromTimestamp, formatSize, generalInSidebar, timeAgo} from '@/lib/constants';
import { useLoadingStore } from '@/stores/LoadingStore';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
// import Link from 'next/link';
gsap.registerPlugin(Flip);

import "./adjust.css"
const Page = () => {
  const [hasFiles, setHasFiles] = useState<boolean>(false);
  const [files, setFiles] = useState<FileFormat[]>([]);
  useEffect(() => {
      const links = document.querySelectorAll<HTMLElement>('.nav-item');
      links.forEach(link => {
          link.style.cursor = 'pointer';
          const hasUnderline = !!link.querySelector('.active-nav'); 
          if (hasUnderline) link.style.color = '#0d9488';
      });
      const underline = document.querySelector<HTMLElement>('.active-nav');
      if (!underline) return;

      const onClick = (e: Event) => {
          const el = (e.currentTarget as HTMLElement);
          const state = Flip.getState(underline);
          gsap.to(links, { color: '#252525', duration: 0.2 });
          gsap.to(el, { color: '#0d9488', duration: 0.2 });

          el.appendChild(underline);
          Flip.from(state, {
          duration: 0.6,
          ease: 'power2.out',
          absolute: true,
          });
  };
      links.forEach(link => link.addEventListener('click', onClick));
      return () => links.forEach(link => link.removeEventListener('click', onClick));
  }, []);

  const {fetchFiles} = useFileHook();
  useEffect(()=> {
    const payload : FetchFilesParams = {
      is_deleted : true,
      sort : 'updated_at',
      is_asc : true,
      offset : 0,
      limit : 10
    }
    const fetch = async() => {
      const data = await fetchFiles(payload);
      if (data.length > 0) {
        // setHasFiles(true);
        setFiles(data);
      }
    }
    fetch();
  },[])

  return (
      <section className='w-full h-full min-h-screen'>
          <div className="fixed top-0 left-0 h-screen w-[18%] bg-[#f9f8f5] z-50 border-r border-gray-800">
              <Sidebar />
          </div>
          <div className="ml-[18%] w-[82%] min-h-screen grid grid-rows-[10%_90%]">
              <div className="px-10 bg-[#f9f8f5] flex items-center">
                  <nav>
                      <div className="flex space-x-10">
                          <div className='nav-item'>
                              <div>Files</div>
                              <div className='active-nav'></div>
                          </div>
                          <div className='nav-item'>
                              <div>Folders</div>
                          </div>
                          <div className='nav-item'>
                              <div>Images</div>
                          </div>
                      </div>
                  </nav>
              </div>
              <div className="px-10 bg-white pt-10 w-full h-full">
                  {hasFiles ? <FileGrid files={files} /> : 
                  <div className='h-full w-full justify-center flex flex-col items-center gap-2'>
                      <Image width={300} height={300} src='/bin/bin-avt.png' alt='No files found' />
                      <span className='no-file-span'>Seems like there are no files deleted recently</span>
                  </div>
                  }
              </div>
          </div>
      </section>
  );
};

export default Page;

const Sidebar = () => { 
    const [chosenPage, setChosenPage] = useState("deleted");
    // const {resetBreadcrumb} = useBreadCrumbStore();
    const {setLoading} = useLoadingStore();
    const router = useRouter();
    const pathName = usePathname();
    const getPathName = (path : string) => {
        const segments = path.split('/');
        return segments[1] || 'dashboard';
    }
    useEffect(() => {
        setLoading(false);
        setChosenPage(getPathName(pathName));
    },[pathName,setLoading])
    const handleNavigatePage = (url : string) => {
        if (url === pathName){
            return;
        }
        setLoading(true);
        router.push(url);
    }
    return(
        <section className="w-full h-full flex gap-2 py-7 px-5 overflow-auto custom-scrollbar">
            <div className="flex flex-col gap-10 w-full">
                {/* Header */}
                <div className="w-full flex gap-2 px-2">
                    <Image width={30} height={30} alt="avatar" src='/brandAvt.png' className="rounded-full"></Image>
                    <span className="text-lg font-bold text-black">BiStorage</span>
                </div>
                {/* Pages */}
                <div className="w-full flex flex-col gap-10">
                    {/* General */}
                    <div key='general' className="w-full flex flex-col gap-2">
                        <span className="text-sm text-gray-500 px-2 font-semibold">General</span>
                        {generalInSidebar.map((x,index) => {
                        const chosen = x.name.toLocaleLowerCase() === chosenPage;
                        return (
                            <div onClick={()=>handleNavigatePage(x.path)} className={`w-full flex gap-3 px-4 py-2 cursor-pointer ${chosen ? 'bg-black rounded-lg text-white' : ' hover:border hover:rounded-lg hover:bg-[#f0ede6] text-black'}`} key={index}>
                                {x.icon && <x.icon size={18} color={`${chosen ? '#fff' : '#000'}`} />}
                                <span className={`text-sm font-semibold`}>{x.name}</span>
                            </div>
                        );
                        })}
                    </div>  
                    {/* Files */}
                    <div key='files' className="w-full flex flex-col gap-2">
                        <span className="text-sm text-gray-500 px-2 font-semibold">Files</span>
                        {filesInSidebar.map((x,index) => {
                            const chosen = x.name.toLocaleLowerCase() === chosenPage;
                            return(
                            <div onClick={()=>handleNavigatePage(x.path)} className={`w-full flex gap-3 px-4 py-2 cursor-pointer ${chosen ? 'bg-black rounded-lg text-white' : ' hover:border hover:rounded-lg hover:bg-[#f0ede6] text-black'}`} key={index}>
                                {x.icon && <x.icon size={18} />}
                                <span className="text-sm font-semibold">{x.name}</span>
                            </div>
                            )
                        })}
                    </div>  
                    {/* Tags */}
                </div>

            </div>
        </section>
    )
}


// type FileItem = {
//   id: string;
//   name: string;        // ví dụ: "Doc-123472578.pdf"
//   sizeBytes: number;   // ví dụ: 5 * 1024 * 1024
//   createdAt: string;   // ISO date
//   lastOpenedAt?: string; // ISO date
//   href?: string;       // link nội bộ tới trang file
//   ext?: string;        // "pdf" | "xlsx" | "doc" | "pptx" ...
// };

const extMap: Record<string, { label: string; color: string }> = {
  pdf:  { label: 'P', color: 'text-red-500' },
  xlsx: { label: 'X', color: 'text-green-500' },
  xls:  { label: 'X', color: 'text-green-500' },
  doc:  { label: 'W', color: 'text-blue-500' },
  docx: { label: 'W', color: 'text-blue-500' },
  ppt:  { label: 'P', color: 'text-orange-500' },
  pptx: { label: 'P', color: 'text-orange-500' },
  default: { label: 'F', color: 'text-gray-400' },
};


// function formatDate(iso: string) {
//   const d = new Date(iso);
//   return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
// }


function getExt(name: string, fallback?: string) {
  if (fallback) return fallback.toLowerCase();
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : 'default';
}

function FileIcon({ ext }: { ext: string }) {
  const meta = extMap[ext] ?? extMap.default;
  return (
    <div className="w-full h-36 rounded-xl bg-gray-100 grid place-items-center">
      <div className={`text-6xl font-semibold ${meta.color}`}>{meta.label}</div>
    </div>
  );
}

// const MOCK_FILES = [
//   {
//     id: '1',
//     name: 'Doc-123472578.pdf',
//     sizeBytes: 5 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date().toISOString(),
//     href: '/files/1',
//   },
//   {
//     id: '2',
//     name: 'Doc-25783.xlsx',
//     sizeBytes: 2 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date(Date.now() - 2 * 24 * 3600e3).toISOString(),
//     href: '/files/2',
//   },
//   {
//     id: '3',
//     name: 'abc-25783.doc',
//     sizeBytes: 7 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date(Date.now() - 30 * 24 * 3600e3).toISOString(),
//     href: '/files/3',
//   },
//   {
//     id: '4',
//     name: 'xyz-25783.pptx',
//     sizeBytes: 12 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date(Date.now() - 2 * 24 * 3600e3).toISOString(),
//     href: '/files/4',
//   },
//   {
//     id: '5',
//     name: 'abd-25783.doc',
//     sizeBytes: 10 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date(Date.now() - 31 * 24 * 3600e3).toISOString(),
//     href: '/files/5',
//   },
//   {
//     id: '6',
//     name: 'abc-123472578.pptx',
//     sizeBytes: 58 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date().toISOString(),
//     href: '/files/6',
//   },
//   {
//     id: '7',
//     name: 'list-25783.xlsx',
//     sizeBytes: 2 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date(Date.now() - 2 * 24 * 3600e3).toISOString(),
//     href: '/files/7',
//   },
//   {
//     id: '8',
//     name: 'Themes-123472578.pdf',
//     sizeBytes: 15 * 1024 * 1024,
//     createdAt: '2020-12-13T00:00:00.000Z',
//     lastOpenedAt: new Date().toISOString(),
//     href: '/files/8',
//   },
// ];
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { MdOutlineFolderDelete } from "react-icons/md";
import { FetchFilesParams, FileFormat } from '@/models/Interface';
import { useFileHook } from '@/hooks/FileHook';

function FileGrid({ files }: { files: FileFormat[] }) {
  const { recoverFile, permanentDeleteFile } = useFileHook();
  const handleRecover = async(fileId: string) => {
    const destination = "";
    await recoverFile(fileId,destination);
  }
  const handlePermanentDelete = async(fileId: string) => {
    await permanentDeleteFile(fileId);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {files.map((f) => {
        const ext = f.storage_detail.mime_type.split('/')[1] || getExt(f.name);
        return (
          <div
            key={f.id}
            className="card shadow-sm p-4 hover:shadow-md transition"
          >
            <FileIcon ext={ext} />
            <div className="mt-3 flex items-center justify-between text-black text-sm">
              <div>Created on {formatDateFromTimestamp(f.created_at)}</div>
              <div className="text-teal-600/60">{formatSize(f.total_size)}</div>
            </div>
            <div className="mt-2">
                <span className="text-[17px] font-semibold text-white">{f.name}</span>
            </div>
            <div className="mt-1  flex justify-between items-center">
                <div className='text-sm text-gray-500'>
                    You deleted <span className="text-white">{timeAgo(formatDateFromTimestamp(f.updated_at))}</span>
                </div>
                <div className='text-sm flex gap-2'>
                    <div className="relative group">
                        <IoArrowUndoCircleOutline onClick={() => handleRecover(f.id)} size={20} className="cursor-pointer hover:text-white"/>
                        <div
                            className="
                            absolute -top-14 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-normal ">
                            Restore file
                            <div
                            className="absolute left-1/2 top-full -translate-x-1/2
                                        border-4 border-transparent border-t-black"
                            />
                        </div>
                    </div>
                    <div className="relative group">
                        <MdOutlineFolderDelete onClick={() => handlePermanentDelete(f.id)} size={20} className="cursor-pointer hover:text-white"/>
                        <div
                            className=" max-w-[90px] h-auto
                            absolute -top-14 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-normal ">
                            Delete file permanently
                            <div
                            className="absolute left-1/2 top-full -translate-x-1/2
                                        border-4 border-transparent border-t-black"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}