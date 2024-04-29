'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import useGroupUIControlStore from "@/store/UI_control/groupPage/newgroupPage";
import NewGroupModal from "@/components/groups/modals/newGroupModal";
import Image from 'next/image';
import NFT_DATA from "@/data/nfts.json";
import GROUPS_DATA from "@/data/mygroups.json";



export default function Home() {
    const router = useRouter();
    const createGroupModalState = useGroupUIControlStore((state) => state.createGroupModal);
    const setCreateGroupModalState = useGroupUIControlStore((state) => state.updateCreateGroupModal);
    const [isOpen, setIsOpen] = useState(false);



    return (
        <>
            {createGroupModalState && <NewGroupModal />}

            <div className="flex justify-between w-full fixed bg-white top-[0px] h-[70px] border-b items-center p-3 z-10">
                <div>
                    <button className="border-2 border-black rounded-full px-5" onClick={() => router.back()}>
                        BACK
                    </button>
                </div>
                <div>
                    <button className="border-2 border-black rounded-full px-5" onClick={() => setCreateGroupModalState(true)}>
                        NEW GROUP
                    </button>
                </div>
            </div>
            <div className="grouppage_container pt-[80px]">
                <div className='flex justify-between'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='h-[160px] w-[160px]'>
                            <Image
                                src={'/assets/photo/users/user2.jpg'}
                                className="w-full h-full aspect-square rounded-full"
                                alt="user_avatar"
                                height={160}
                                width={160}
                            />
                        </div>
                        <div className='flex flex-col '>
                            <div>
                                <div className='text-gray-400'>
                                    USERNAME
                                </div>
                                <div>
                                    ZAK LLC
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='text-gray-400'>
                                    HANDLE
                                </div>
                                <div>
                                    @ZAK.LLC
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <div>
                                <div className='text-gray-400'>
                                    JOINED ON
                                </div>
                                <div>
                                    APRIL 3RD, 2024
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='text-gray-400'>
                                    TOTAL COLLECTED
                                </div>
                                <div>
                                    28
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <div>
                                <div className='text-gray-400'>
                                    SMART WALLETS
                                </div>
                                <div className='flex gap-3'>
                                    <img src='/metamask.svg'></img>
                                    <div>
                                        0X111...222
                                    </div>
                                    <div className='underline'>
                                        REMOVE
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='underline'>
                                    ADD A WALLET +
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='underline'>
                        EDIT PROFILE
                    </div>
                </div>
                <nav className="bg-white border-b-[5px] sticky top-[70px] z-10">
                    <div>
                        <div className="flex items-center h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">{/* Logo */}</div>
                                <div className="hidden lg:block">
                                    <div className="flex items-baseline space-x-4">
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 py-2 text-lg"
                                        >
                                            PROFILE
                                        </a>
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 px-3 py-2 text-lg"
                                        >
                                            ACTIVE BIDS (5)
                                        </a>
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 px-3 py-2 text-lg"
                                        >
                                            GROUPS (5)
                                        </a>
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 px-3 py-2 text-lg"
                                        >
                                            COLLECTED(28)
                                        </a>
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 px-3 py-2 text-lg"
                                        >
                                            LIKED (2)
                                        </a>
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 px-3 py-2 text-lg"
                                        >
                                            NOTIFICATIONS (2)
                                        </a>
                                        <a
                                            href="#"
                                            className="border-b-2 border-transparent hover:border-gray-400 px-3 py-2 text-lg"
                                        >
                                            SETTINGS
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-2 flex justify-between lg:hidden w-full">
                                <div></div>
                                <button
                                    type="button"
                                    className=" inline-flex items-center justify-center p-2 outline-none rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 6H20M4 12H20M4 18H20"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {/* Navigation links */}
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                PROFILE
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                ACTIVE BIDS(5)
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                GROUPS (5)
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                COLLECTED (28)
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                LIKED (2)
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                NOTIFICATIONS (2)
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                SETTINGS
                            </a>
                            {/* Other links */}
                        </div>
                    </div>
                </nav>
                <div className='mt-5'>
                    <h1 className='text-[18px]'>
                        ACTIVE BIDS (5)
                    </h1>
                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 border-b-2 mb-5 mt-5'>
                        {
                            NFT_DATA.map((index, key) =>
                                <div key={key} className='flex flex-col gap-3'>
                                    <div>
                                        <Image
                                            src={index.avatar}
                                            className='h-full w-full aspect-square'
                                            width={300}
                                            height={300}
                                            alt='active_bid'
                                        />
                                    </div>
                                    <div className='mb-5'>
                                        {index.name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[18px]'>
                        GROUPS (5)
                    </h1>
                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2  border-b-2 mb-5 mt-5'>
                        {
                            GROUPS_DATA.map((index, key) =>
                                <div key={key} className='flex flex-col gap-3'>
                                    <div>
                                        <Image
                                            src={index.avatar}
                                            className='h-full w-full aspect-square'
                                            width={300}
                                            height={300}
                                            alt='active_bid'
                                        />
                                    </div>
                                    <div className='mb-5'>
                                        {index.name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between'>
                        <h1 className='text-[18px]'>
                            COLLECTED (28)
                        </h1>
                        <h1 className='text-[18px] underline'>
                            VIEW ALL +
                        </h1>
                    </div>
                    <div className="flex p-[1px] border rounded-[30px] border-black  h-[30px] w-[472px] mt-5">
                        <input
                            className="w-full h-full bg-transparent  border border-none outline-none outline-[0px] px-[10px] text-chocolate-main"
                            placeholder="SEARCH"
                        ></input>
                        <button className="bg-chocolate-main text-white w-[100px] rounded-[30px] font-Maxeville hover:opacity-60">
                            ENTER
                        </button>
                    </div>

                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2  border-b-2 mb-5 mt-5'>
                        {
                            NFT_DATA.map((index, key) =>
                                <div key={key} className='flex flex-col gap-3'>
                                    <div>
                                        <Image
                                            src={index.avatar}
                                            className='h-full w-full aspect-square'
                                            width={300}
                                            height={300}
                                            alt='active_bid'
                                        />
                                    </div>
                                    <div className='mb-5'>
                                        {index.name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex gap-3'>
                        <img src='/favorite.svg'></img>
                        <h1 className='text-[18px]'>
                            LIKED
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 border-b-2 mb-5 mt-5'>
                        {
                            NFT_DATA.map((index, key) =>
                                <div key={key} className='flex flex-col gap-3'>
                                    <div>
                                        <Image
                                            src={index.avatar}
                                            className='h-full w-full aspect-square'
                                            width={300}
                                            height={300}
                                            alt='active_bid'
                                        />
                                    </div>
                                    <div className='mb-5'>
                                        {index.name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='mt-5 '>
                    <div className='flex justify-between'>
                        <h1 className='text-[18px]'>
                            NOTIFICATIONS (3)
                        </h1>
                        <h1 className='text-[18px] underline'>
                            VIEW ALL +
                        </h1>
                    </div>
                    <div className='mt-5'>
                        <div className='text-[12px] text-gray-400'>
                            JACK'S GROUP
                        </div>
                        <div className='flex justify-between w-1/2 mt-3 items-center'>
                            <div className='flex gap-2'>
                                <div className='h-[30px]'>
                                    <Image
                                        src={'/assets/photo/nfts/nft1.jpg'}
                                        className='h-full w-full aspect-square'
                                        width={300}
                                        height={300}
                                        alt='active_bid'
                                    />
                                </div>
                                <div>
                                    TITLE
                                </div>
                                <div className='text-gray-400'>
                                    SOLD TO
                                </div>
                                <div className='underline'>
                                    ALICE
                                </div>
                                <div className='text-gray-400'>
                                    FOR
                                </div>
                                <div>
                                    1500 USDC
                                </div>
                            </div>
                            <div className='text-gray-400'>
                                NEW
                            </div>
                        </div>
                        <div className='flex justify-between w-1/2 mt-3 items-center'>
                            <div className='flex gap-2'>
                                <div className='h-[30px]'>
                                    <Image
                                        src={'/assets/photo/nfts/nft1.jpg'}
                                        className='h-full w-full aspect-square'
                                        width={300}
                                        height={300}
                                        alt='active_bid'
                                    />
                                </div>
                                <div>
                                    TITLE
                                </div>
                                <div className='text-gray-400'>
                                    SOLD TO
                                </div>
                                <div className='underline'>
                                    ALICE
                                </div>
                                <div className='text-gray-400'>
                                    FOR
                                </div>
                                <div>
                                    1500 USDC
                                </div>
                            </div>
                            <div className='text-gray-400'>
                                NEW
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 border-b-2 mb-5 pb-5' >
                        <div className='text-[12px] text-gray-400'>
                            JOHN'S GROUP
                        </div>
                        <div className='flex justify-between w-1/2 mt-3 items-center'>
                            <div className='flex gap-2'>
                                <div className='h-[30px]'>
                                    <Image
                                        src={'/assets/photo/nfts/nft1.jpg'}
                                        className='h-full w-full aspect-square'
                                        width={300}
                                        height={300}
                                        alt='active_bid'
                                    />
                                </div>
                                <div className='underline'>
                                    ALICE
                                </div>
                                <div className='text-gray-400'>
                                    REQUESTED TO JOIN THE GROUP
                                </div>
                            </div>
                            <div className="text-gray-400 w-[40%] text-right">
                                <button className="border bg-[#322A44] text-white rounded-full pl-4 pr-4 w-[203px] text-lg">
                                    ACCEPT REQUEST
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5'>
                    <div className=''>
                        <h1 className='text-[18px]'>
                            SETTINGS
                        </h1>
                    </div>
                    <div className='mt-5'>
                        <div className=' text-gray-400'>
                            NOTIFICATIONS
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 w-2/5'>
                            <div className='flex flex-col mt-3'>
                                <div className='flex gap-2'>
                                    <div>SALES</div>
                                    <div className='text-gray-400'>(ON)</div>
                                </div>
                                <div className='mt-3'>
                                    <label className="inline-flex items-center cursor-pointer w-[56px]">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <div className='flex gap-2'>
                                    <div>OFFERS</div>
                                    <div className='text-gray-400'>(ON)</div>
                                </div>
                                <div className='mt-3'>
                                    <label className="inline-flex items-center cursor-pointer w-[56px]">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <div className='flex gap-2'>
                                    <div>CHAT</div>
                                    <div className='text-gray-400'>(ON)</div>
                                </div>
                                <div className='mt-3'>
                                    <label className="inline-flex items-center cursor-pointer w-[56px]">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <div className='flex gap-2'>
                                    <div>NEWS</div>
                                    <div className='text-gray-400'>(ON)</div>
                                </div>
                                <div className='mt-3'>
                                    <label className="inline-flex items-center cursor-pointer w-[56px]">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <div className='flex gap-2'>
                                    <div>REQUESTS</div>
                                    <div className='text-gray-400'>(ON)</div>
                                </div>
                                <div className='mt-3'>
                                    <label className="inline-flex items-center cursor-pointer w-[56px]">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='text-gray-400'>
                            WALLETS
                        </div>
                        <div className='flex flex-col mt-2'>
                            <div className='text-[12px] text-gray-400'>
                                METAMASK
                            </div>
                            <div className='flex gap-5 items-center mt-2'>
                                <img src='/metamask.svg'></img>
                                <div>
                                    0X111...222
                                </div>
                                <div className='underline text-[12px]'>
                                    REMOVE
                                </div>
                            </div>
                            <div className='underline text-[12px] mt-2'>
                                ADD A WALLET +
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='text-gray-400'>
                            DISCORD
                        </div>
                        <div className='text-[12px] mt-2 underline'>
                            CONNECT
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='text-gray-400'>
                            PRIVACY
                        </div>
                        <div className="flex items-center text-xl mt-5">
                            <input
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                id="default-radio-2"
                                className="ms-2  text-[18px] text-gray-900 dark:text-gray-300"
                            >
                                MAKE MY PROFILE PRIVATE
                            </label>
                        </div>
                        <div className='text-[18px] text-gray-400 mt-2'>
                            on "private" other users can only see your name and when you joined.
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='text-gray-400'>
                            ACCOUNT
                        </div>
                        <div className='text-[12px] text-gray-400 mt-3'>
                            EMAIL
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <div>
                                Z@ZAK.LLC
                            </div>
                            <div className='underline text-[12px]'>
                                CHANGE
                            </div>
                        </div>
                        <div className='text-[12px] underline mt-2'>
                            DELETE ACCOUNT
                        </div>

                    </div>

                </div>
            </div >
        </>
    );
}