import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                       Paldies ka iepirkies pie mums!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Apmaksa ir veiksmīga
                    </div>
                    <div className="text-base mt-5">
                        Par jautājumiem rakstiet uz ēpastu
                    </div>
                    <div className="underline">veikals123@gmail.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Turpini iepirkties
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;