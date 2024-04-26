
'use client'

import React from 'react';
import groupsData from '@/data/groups.json';
import { useRouter } from "next/navigation";
import Image from "next/image";
import TrendingIcon from "@/components/svgs/trending_icon";
import useGroupUIControlStore from "@/store/UI_control/groupPage/newgroupPage";
import ListModal from '@/components/groups/modals/listModal';
import EyeIcon from '@/components/svgs/eye_icon';
import HeartIcon from '@/components/svgs/heart_icon';



const ShareGroupProfile = ({ params }: { params: { id: string, group: string } }) => {

    const setListModalState = useGroupUIControlStore((state) => state.updateListModal);
    const listModalState = useGroupUIControlStore((state) => state.listModal);

    const router = useRouter();
    return (
        <div>
            {listModalState && <ListModal />}

            <div className="flex justify-between w-full fixed bg-white top-[0px] h-[70px] border-b items-center p-3 z-10">
                <div>
                    <button className="border-2 border-black rounded-full px-5" onClick={() => router.back()}>
                        BACK
                    </button>
                </div>
                <div>
                </div>
            </div>
            <div className='grouppage_container pt-[80px]'>
                <div
                    className=""
                >

                </div>
                <div>
                    <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:p-[100px] xl:pt-5'>
                        <div className='flex flex-col'>
                            <Image
                                src={groupsData[Number(params.group)].sold[Number(params.id)].avatar}
                                className="w-full h-full aspect-square p-2"
                                alt="group_avatar"
                                width={0}
                                height={0}
                                sizes='100vw'
                            />
                            <div className='flex items-center gap-3 p-2'>
                                <EyeIcon props='#322A44'/>
                                <div>200</div>
                                <div>WATCHING</div>
                                <HeartIcon props="#322A44"/>
                                <div>20</div>
                            </div>
                        </div>
                        <div className='p-2 flex-col flex justify-between'>
                            <div className='flex-col'>
                                MINTED BY YOU ON FEB 28, 2024, 1:48, PM EST
                                <div className='text-[25px] flex gap-4'>
                                    {/* {groupsData[Number(params.group)].sold[Number(params.group)].name} */}
                                    MICHAEL MAJERAS
                                    <div className='flex items-center'>
                                        <TrendingIcon />
                                    </div>
                                </div>
                                <div className='text-[25px] underline'>
                                    COLLECTION
                                </div>
                                <div>
                                    Group
                                </div>
                                <div className='text-[25px]'>
                                    032C
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <button onClick={() => setListModalState(true)} className='w-full bg-green-500 rounded-full text-white h-[30px] mb-5'>
                                    LIST TO MARKETPLACE
                                </button>
                                <div className='mt-[20px] '></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ShareGroupProfile;