'use client';

import "./adjust-modal.css"
import { FaFolder } from "react-icons/fa";
import { FolderOpen } from "lucide-react";
import { useFileHook } from "@/hooks/FileHook";
import { useFilePermissionStore } from "@/stores/FilePermissionStore";
import {useState } from "react";
import type { PermissionFileType } from '../../stores/FilePermissionStore';

export function AdjustPermissionModal({ files,depth = 0 }: { files?: PermissionFileType[],depth?: number }) {
    const { fetchFilePermissonById } = useFileHook();
    const { parents, setParents } = useFilePermissionStore();
    const [openFolder, setOpenFolder] = useState<string[]>([]);

    const data = files ?? parents;

    const isOpen = (id: string) => openFolder.includes(id);

    const findFile = (id: string, files: PermissionFileType[]): PermissionFileType | null => {
        for (const file of files) {
            if (file._id === id) return file;
            if (file.child?.length) {
                const found = findFile(id, file.child);
                if (found) return found;
            }
        }
        return null;
    };

    const updateTree = (
        files: PermissionFileType[],
        id: string,
        children: PermissionFileType[]
    ): PermissionFileType[] => {
        return files.map(file => {
            if (file._id === id) {
                return { ...file, child: children };
            }
            if (file.child?.length) {
                return { ...file, child: updateTree(file.child, id, children) };
            }
            return file;
        });
    };

    const handleExpandFile = async (id: string) => {
        const isOpenNow = isOpen(id);
        // Nếu đã mở
        if (isOpenNow) {
            setOpenFolder(prev => prev.filter(fid => fid !== id));
            return;
        }
        // Nếu chưa
        const current = findFile(id, data); // đã fetch rồi 
        if (current?.child?.length) {
            setOpenFolder(prev => [...prev, id]);
            return;
        }
            // chưa fetch
        const fetchedChildren = await fetchFilePermissonById(id);
        const normalizedChildren = fetchedChildren.map(child => ({
            ...child,
            child: []
        }));

        const updated = updateTree(parents, id, normalizedChildren);
        setParents(updated);
        setOpenFolder(prev => [...prev, id]);
    };

    return (
        <div className="w-full h-full space-y-5 overflow-y-auto">
            {data.map((x) =>
                !x.is_folder ? (
                    <div onClick={(e) => {e.stopPropagation();}} key={x._id} className={`w-full  flex justify-between px-4 py-3 ${depth === 0 ? 'rounded-lg border border-[#dcc097]' : ''}  `}>
                        <div className="flex gap-2 items-center">
                            <FaFolder size={20} className="fill-[#dcc097]" />
                            <span className="text-gray-500 text-md">{x.name}</span>
                        </div>
                    </div>
                ) : (
                    <div onClick={(e) => {e.stopPropagation();handleExpandFile(x._id)}} key={x._id}
                        className={`w-full flex flex-col px-4 py-3 ${depth === 0 ? (isOpen(x._id) ? 'border-[#7DAFAF] border rounded-lg' : ' border-gray-200 border rounded-lg ') : ''}`}>
                        <div className="flex gap-2 items-center">
                            <FolderOpen size={20} className={`${isOpen(x._id) ? 'text-gray-500 fill-[#7DAFAF]' : 'text-[#7DAFAF]'}`} />
                            <span className="text-gray-500 text-md">{x.name}</span>
                        </div>
                        {x.child && isOpen(x._id) && (
                            <div className="transition-all duration-300 overflow-hidden bg-white px-2 pt-3">
                                <AdjustPermissionModal files={x.child} depth={depth + 1} />
                            </div>
                        )}
                    </div>
                )
            )}
        </div>
    );
}
