'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FileFormat } from "@/models/Interface";
import {EllipsisVertical } from "lucide-react";
import {useEffect, useState } from "react";
import { FileDetail } from "../common/FileDetail";
import { PermissionModal } from "../common/PermissionModal";
import { createPortal } from "react-dom";
import { AdjustPermissionOverall } from "../permission/AdjustPermissionOverall";

export function DropDownMenuAllFiles({file} : {file : FileFormat}) {
  //togge File Detail
  const [isDetailOpen,setIsDetailOpen] = useState(false);
  const [isPermissionOpen, setIsPermissionOpen] = useState(false);
  const [mounted,setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-1 hover:bg-gray-200 hover:rounded-lg ">
        <EllipsisVertical size={22} />
      </DropdownMenuTrigger>
      {mounted && createPortal(<DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>{file.name}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDetailOpen(true)}>
            File Details
            <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsPermissionOpen(true)}>
            Manage Permissions
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>, document.body)}

      {/* Extra page */}
      {mounted && isDetailOpen && createPortal(<FileDetail fileId = {file._id} setIsOpen={setIsDetailOpen}></FileDetail>, document.body)}
      {mounted && isPermissionOpen && createPortal(<PermissionModal file={file} setIsOpen={setIsPermissionOpen}  setUserPermision={() => {}}></PermissionModal>, document.body)}
    </DropdownMenu>
  )
}

export function DropDownMenuStorage ({file} : {file : FileFormat}) {
  const [mounted,setMounted] = useState(false);
  const [isDetailOpen,setIsDetailOpen] = useState(false);
  const [isPermissionOpen, setIsPermissionOpen] = useState(false);
  const [userPermission , setUserPermission] = useState(false);

  useEffect(() => setMounted(true), []);
  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-1 hover:bg-[#93c3a1] hover:rounded-md ">
        <EllipsisVertical size={22} />
      </DropdownMenuTrigger>
      {mounted && createPortal(<DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>{file.name}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDetailOpen(true)}>
            File Details
          <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsPermissionOpen(true)}>
            Manage Permissions
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>, document.body)}

      {/* Extra page */}
      {mounted && isDetailOpen && createPortal(<FileDetail fileId = {file._id} setIsOpen={setIsDetailOpen}></FileDetail>, document.body)}
      {mounted && isPermissionOpen && createPortal(<PermissionModal file={file} setIsOpen={setIsPermissionOpen} setUserPermision={setUserPermission}></PermissionModal>, document.body)}
      {mounted && userPermission && createPortal(<AdjustPermissionOverall setIsOpen={setUserPermission} setIsOpen2={setIsPermissionOpen}></AdjustPermissionOverall>, document.body)}
    </DropdownMenu>
  )
}
