"use client"

import React, { useState } from 'react';
import SearchIcon from '@/components/svgs/search_icon';
import WriteIcon from '@/components/svgs/write_icon';
import { useRouter } from "next/navigation";
import ChatMessageData from "@/data/chat_group.json"
import Image from "next/image";
import SeenIcon from '@/components/svgs/seen_icon';
import ChatLinkIcon from '@/components/svgs/chatlink_icon';
import useNotificationUIControlStore from '@/store/UI_control/notification';
import NOTIFICATIONS from '@/components/notifications/notifications';


export default function Home() {

    const setNotificationModalState = useNotificationUIControlStore((state) => state.updateNotificationModal);
    const notificationModalState = useNotificationUIControlStore((state) => state.notificationModal);
    const router = useRouter();
    return (
        <>
            {notificationModalState && <NOTIFICATIONS/>}
            <div className="flex justify-between w-full fixed bg-white top-[0px] h-[70px] border-b items-center p-3 z-10">
                <div>

                </div>
                <div>
                    <button className="border-2 border-black rounded-full px-5" onClick={() => router.back()}>
                        BACK
                    </button>
                </div>
            </div>
            <div className="grouppage_container grid grid-cols-[20%_80%] pt-[80px]">
                <div className="flex flex-col mt-5 pr-5 border-r-2 border-r-[#322A44] mb-5 overflow-y-auto  scrollbar-hide h-[43vw]">
                    <div className="flex justify-between pb-[20px] border-b-2 border-b-[#322A44] sticky top-0 bg-white">
                        <div className="text-[18px] text-[#322A44]">
                            INBOX
                        </div>
                        <div className="flex gap-2">
                            <SearchIcon props='#322A44' />
                            <WriteIcon props='#322A44' />
                        </div>
                    </div>
                    {
                        ChatMessageData.map((index, key) =>

                            <div key={key}>
                                <div className='flex flex-col border-b-2 border-b-[#322A44] text-[#322A44] mt-3 pb-3 gap-1'>
                                    <div className='text-[12px]'>
                                        {index.name}
                                    </div>
                                    <div className='flex '>

                                        <div className='w-1/4 rounded-full overflow-hidden'>
                                            <Image
                                                src={index.avatar}
                                                className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                                width={100}
                                                height={100}
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className='w-3/4 flex justify-between items-center'>
                                            <div className='flex flex-col'>
                                                <div className='text-[18px]'>
                                                    {index.members_bio}
                                                </div>
                                                <div className='text-gray-400 text-[12px]'>
                                                    {index.chat}
                                                </div>
                                            </div>
                                            <div className='flex flex-col '>
                                                <div className='text-gray-400'>
                                                    {index.lastSeen}
                                                </div>
                                                <div className='mt-2 flex  justify-end'>
                                                    <SeenIcon props='#322A44' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    {
                                        (index.members).map((index1, key1) =>
                                            <div className='flex border-b-2 border-b-[#322A44] mt-3 pb-3 gap-1' key={key1}>

                                                <div className='w-1/4 rounded-full overflow-hidden'>
                                                    <Image
                                                        src={index1.avatar}
                                                        className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                                        width={100}
                                                        height={100}
                                                        alt="avatar"
                                                    />
                                                </div>
                                                <div className='w-3/4 flex justify-between'>
                                                    <div className='flex flex-col'>
                                                        <div className='text-[18px]'>
                                                            {index1.name}
                                                        </div>
                                                        <div className='text-gray-400 text-[12px]'>
                                                            {index1.chat}
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <div className='text-gray-400'>
                                                            {index1.lastSeen}
                                                        </div>
                                                        <div className='mt-2 flex  justify-end'>
                                                            <SeenIcon props='#322A44' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    <div>

                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col justify-between h-[43vw] overflow-y-auto  scrollbar-hide '>
                    <div>
                        <div className='flex gap-5 p-3'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user2.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Alice
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    Active 3m ago
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3 flex-row-reverse'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user1.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey What's up?
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:18
                                </div>
                                <div className='text-[18px]'>
                                    Do you have any updates on the project yet?
                                </div>
                                <div className='text-[18px]'>
                                    The team was wondering.
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    11:23
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 p-3'>
                            <div>
                                <Image
                                    src={"/assets/photo/users/user2.jpg"}
                                    className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[18px]'>
                                    Hey It's going well
                                </div>
                                <div className='text-gray-400 text-[12px]'>
                                    Now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[5%_95%] p-3 sticky bottom-0 bg-white'>
                        <div>
                            <Image
                                src={"/assets/photo/users/user2.jpg"}
                                className="w-[50px] h-[50px] rounded-full object-cover aspect-square"
                                width={100}
                                height={100}
                                alt="avatar"
                            />
                        </div>
                        <div>
                            <textarea placeholder='Write a message...' rows={4} className='w-full p-3 rounded-lg bg-white border-2 border-[#322A44] focus:outline-none ' />
                            <div className='flex justify-between'>
                                <ChatLinkIcon props='#322A44' />
                                <button className='rounded-full p-2 text-white bg-[#322A44] w-[119px] opacity-60' onClick={() => setNotificationModalState(true)}>
                                    SEND
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 