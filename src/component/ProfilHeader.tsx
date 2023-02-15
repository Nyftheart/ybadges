import React from 'react';

const ProfilHeader = () => {
    return (
        <div>
            <div className="w-full px-6 mx-auto">
                <div
                    className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl bg-red-300">
                    <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"></span>
                </div>
                <div
                    className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-none w-auto max-w-full px-3">
                            <div
                                className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                <img /*src="../assets/img/bruce-mars.jpg" alt="profile_image"*/
                                     className="w-full shadow-soft-sm rounded-xl"/>
                            </div>
                        </div>
                        <div className="flex-none w-auto max-w-full px-3 my-auto">
                            <div className="h-full">
                                <h5 className="mb-1">Alec Thompson</h5>
                                <p className="mb-0 font-semibold leading-normal text-sm">CEO / Co-Founder</p>
                            </div>
                        </div>
                        <div
                            className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilHeader;