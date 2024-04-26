'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import TrendingIcon from "@/components/svgs/trending_icon";
import HeartIcon from '@/components/svgs/heart_icon';
import EyeIcon from '@/components/svgs/eye_icon';
import Collapse from '@/components/groups/modals/collapse';
import MarketplaceNFT_Data from '@/data/marketplace_nfts.json';
import useMarketplaceUIControlStore from "@/store/UI_control/marketplacePage/marketplaceModal";
import BidModal from "@/components/marketplace/modals/bidModal";
import WithdrawModal from "@/components/marketplace/modals/withdrawModal";


const Home = ({ params }: { params: { id: string } }) => {
    const setBidModalState = useMarketplaceUIControlStore((state) => state.updateBidModal);
    const setWithdrawModalState = useMarketplaceUIControlStore((state) => state.updateWithdrawModal);
    const bidModalState = useMarketplaceUIControlStore((state) => state.bidModal);
    const withdrawModalState = useMarketplaceUIControlStore((state) => state.withdrawModal);
    const router = useRouter();
    const auctionType = MarketplaceNFT_Data[parseInt(params.id)].auctionType;
    return (
        <>
                {bidModalState && <BidModal />}
                {withdrawModalState && <WithdrawModal />}

            <div className="flex justify-between w-full fixed bg-white top-[0px] h-[70px] border-b items-center p-3 z-10">
                <div>

                </div>
                <div>
                    <button className="border-2 border-black rounded-full px-5" onClick={() => router.back()}>
                        BACK
                    </button>
                </div>
            </div>
            <div className='grouppage_container pt-[80px]'>
                <div
                    className=""
                >

                </div>
                <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:p-[100px] xl:pt-5'>
                    <div className='flex flex-col'>
                        <Image
                            src={MarketplaceNFT_Data[parseInt(params.id)].avatar}
                            className="w-full h-full aspect-square p-2"
                            alt="group_avatar"
                            width={0}
                            height={0}
                            sizes='100vw'
                        />
                        <div className='flex items-center gap-3 p-2'>
                            <EyeIcon props='#322A44' />
                            <div>200</div>
                            <div>WATCHING</div>
                            <HeartIcon props='#322A44' />
                            <div>20</div>
                        </div>
                    </div>
                    <div className='p-2 flex-col flex justify-between'>
                        <div className='flex-col'>
                            <div className='text-[25px] flex gap-4'>
                                {/* {groupsData[Number(params.group)].sold[Number(params.group)].name} */}
                                NATURE
                                <div className='flex items-center'>
                                    <TrendingIcon />
                                </div>
                            </div>
                            <div className='text-[25px] underline'>
                                COLLECTION
                            </div>
                            <div className='text-gray-400 mt-3'>
                                Group
                            </div>
                            <div className='text-[25px]'>
                                {MarketplaceNFT_Data[parseInt(params.id)].groupName}
                            </div>
                            <div className='text-gray-400 mt-3'>
                                Auction Type
                            </div>
                            <div className='text-[25px]'>
                                {!auctionType ? "English Auction" : auctionType === 1 ? "Dutch Auction" : "Offering"}
                            </div>
                            <div className='text-gray-400 mt-3'>
                                Initial Price
                            </div>
                            <div className='text-[25px]'>
                                {MarketplaceNFT_Data[parseInt(params.id)].initialPrice}
                            </div>
                            {
                                auctionType === 1 &&
                                <>
                                    <div className='text-gray-400 mt-3'>
                                        Reducing Rate
                                    </div>
                                    <div className='text-[25px]'>
                                        {MarketplaceNFT_Data[parseInt(params.id)].reducingRate}
                                    </div>
                                </>
                            }
                            {
                                auctionType !== 2 &&
                                <>
                                    <div className='text-gray-400 mt-3'>
                                        Sale Period
                                    </div>
                                    <div className='text-[25px] flex gap-2'>
                                        {
                                            MarketplaceNFT_Data[parseInt(params.id)].salePeriod?.map((index, key) =>
                                                <div key={key}>
                                                    {key && ": "} {index}
                                                </div>
                                            )
                                        }
                                    </div>

                                </>
                            }
                            {
                                !auctionType &&
                                <>
                                    <div className='text-gray-400 mt-3'>
                                        Highest Bidder
                                    </div>
                                    <div className='text-[25px]'>
                                        {MarketplaceNFT_Data[parseInt(params.id)].currentBidder}
                                    </div>
                                </>
                            }


                        </div>
                        <div className='flex flex-col mb-[35px]'>
                            {
                                auctionType === 2 &&
                                <button className='w-full bg-[#322A44] rounded-full text-white h-[30px]' >BUY</button>
                            }
                            {   auctionType !== 2 &&
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
                                    <button className='w-full bg-[#322A44] rounded-full text-white h-[30px]' onClick={() => setBidModalState(true)}>BID</button>
                                    <button className='w-full bg-[#322A44] rounded-full text-white h-[30px]' onClick={() => setWithdrawModalState(true)}>WITHDRAW</button>
                                </div>
                            }   
                            <div className='mt-[20px] border-[1px] border-[#322A44]'></div>
                            {/* <div>DESCRIPTION</div> */}
                            <div className="">
                                <Collapse title="Description">
                                    <p>This is the content of the first collapsible section.</p>
                                </Collapse>
                                <Collapse title="History">
                                    <p>This is the content of the second collapsible section.</p>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;