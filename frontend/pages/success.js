import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Palddies ka iepercies pie mums
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Pasutijums ir veiksmīgs
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@shop.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Turpini iepirkties
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;