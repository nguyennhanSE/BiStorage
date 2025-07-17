import { create } from 'zustand'
import { persist } from 'zustand/middleware';
export interface breadCrumbItem {
    label : string,
    url : string
}

interface BreadCrumbStore {
    breadCrumbList : breadCrumbItem[],
    setBreadCrumbList : (list : breadCrumbItem[]) => void,
    addBreadCrumbList : (item : breadCrumbItem) => void,
    popBreadcrumb: (item : breadCrumbItem) => void;
    resetBreadcrumb: () => void;
}

export const useBreadCrumbStore = create<BreadCrumbStore>()(
    persist(
        (set) => ({
            breadCrumbList : [{
                label : "Dashboard",
                url : '/dashboard'
            }],
            setBreadCrumbList(list) {
                set({breadCrumbList : list})
            },
            addBreadCrumbList(item) {
                set((state) => {
                    const existed = state.breadCrumbList.some(temp => temp.url === item.url);
                    if (!existed) {
                        return { breadCrumbList: [...state.breadCrumbList, item] };
                    }
                    return state; 
                });
            },
            popBreadcrumb(item){
                set((state) => {
                    const idx = state.breadCrumbList.findIndex((x) => x.url === item.url)
                    return {breadCrumbList : state.breadCrumbList.slice(0,idx+1)}
                })
            },
            resetBreadcrumb(){
                set({breadCrumbList : [{
                    label : "Dashboard",
                    url : '/dashboard'
                }]})
            }
        }),
        {
            name : 'breadcrumb-storage'
        }
    )
)