import React from 'react';
import {FaChartBar} from "react-icons/fa";
const MediumCube = () =>{
    return (
        <div className="ml-64 mt-8 text-2xl mt-11 mr-96 justify-center items-center bg-white drop-shadow-md h-52 rounded-2xl hover:scale-105 duration-300">
            <div className="flex">
                <FaChartBar className="text-slate-500 ml-10 mt-4"/>
                <p className="pl-3 pt-3 text-slate-500 text-xl">Cette Semaine</p>
            </div>

            <div className="flex justify-between px-20 pt-10 text-center">
                <div className="flex">
                    <div>
                        <h5>150</h5>
                        <p className="text-sm mt-3 text-slate-400 text-center">Demandes</p>
                    </div>

                    <hr className="separation"/>
                </div>
                <div className="flex">
                    <div>
                        <h5>150</h5>
                        <p className="text-sm mt-3 text-slate-400 text-center">Demandes</p>
                    </div>

                    <hr className="separation"/>
                </div>
                <div className="flex">
                    <div>
                        <h5>150</h5>
                        <p className="text-sm mt-3 text-slate-400 text-center">Demandes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediumCube;
