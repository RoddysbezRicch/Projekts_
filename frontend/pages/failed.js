import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Apmaksa nav izdevusies!</div>
                    <div className="text-base mt-5">
                        Problēmu gadījuma sazinies ar epasta palīzdību
                    </div>
                    <div className="underline">veiklas123@gmail.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Turpini Iepirkties
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;