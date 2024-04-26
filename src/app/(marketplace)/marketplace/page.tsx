"use client";
import React, { useState } from "react";
import Sort from "@/components/groups/groupSearch/sort";
import ViewProgress from "@/components/groups/groupSearch/viewProgress";
import Recruiting from "@/components/groups/groupSearch/recruiting";
import MarketplaceNFT_Data from "@/data/marketplace_nfts.json";
import Image from "next/image";
import EyeIcon from "@/components/svgs/eye_icon";
import HeartIcon from "@/components/svgs/heart_icon";
import { useRouter } from "next/navigation";


export default function Home() {
    const [scale, setScale] = React.useState<number>(50);
    const router = useRouter();
    return (
        <>
            <div className="flex justify-between w-full fixed bg-white top-[0px] h-[70px] border-b items-center p-3 z-10">
                <div>

                </div>
                <div>
                    <button className="border-2 border-black rounded-full px-5">
                        CREATE
                    </button>
                </div>
            </div>
            <div className="grouppage_container pt-[80px]">
                <div
                    style={{ borderBottom: "3px solid black" }}
                    className="mb-3 mt-5"
                ></div>
                <div className=" mb-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-0 lg:grid-cols-[15%_15%_15%_15%_35%] items-center justify-around">
                    <Sort />
                    <button className="bg-chocolate-main text-white w-[100px] rounded-[30px] font-Maxeville hover:opacity-60">
                        FILTER 3
                    </button>
                    <ViewProgress scale={scale} setScale={setScale} />
                    <Recruiting name={"AVAILABLE"} />
                    <div className="flex p-[1px] border rounded-[30px] border-black  h-[30px]">
                        <input
                            className="w-full h-full bg-transparent  border border-none outline-none outline-[0px] px-[10px] text-chocolate-main"
                            placeholder="SEARCH"
                        ></input>
                        <button className="bg-chocolate-main text-white w-[100px] rounded-[30px] font-Maxeville hover:opacity-60">
                            ENTER
                        </button>
                    </div>
                </div>
                <div className={`gap-3 flex-wrap grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-5`}
                    style={{
                        gridTemplateColumns: `repeat(${Math.floor(
                            (100 - scale) / 10 + 1
                        )}, 1fr)`,
                    }}>
                    {
                        MarketplaceNFT_Data.map((index, key) =>
                            <div key={key} className="relative text-md content-card cursor-pointer" onClick={() => router.push(`/details/${key}`)}>
                                <Image
                                    src={index.avatar}
                                    className="w-full h-full aspect-square hover:blur-xl "
                                    alt="market_nft"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                                <div className="content-card-menu hidden text-white">
                                    <div className="absolute  left-4 top-4">
                                        COLLECTION ID
                                    </div>
                                    <div className="absolute  left-4 bottom-4">
                                        3000 USDC
                                    </div>
                                    <div className="absolute  right-4 bottom-4 flex items-center gap-1 sm:gap-2">
                                        <EyeIcon props="white"/>
                                        200
                                        <HeartIcon props="white"/>
                                        20
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div>

        </>
    )
}