import React, { useState } from "react";
import "./Specs.css";

export default function Specs(props) {
    const { basicInfo, img_src } = props;

    return(
        <div className="w-full flex justify-evenly items-center ">
            <div className=" md:mx-4 w-full flex items-center md:gap-2 ">
                <div className="basis-1/4 py-4 rounded-l-md flex justify-center items-center pr-1 ">
                    <img src={`${img_src}`} className="w-6 h-6"/>

                </div>
                <h3 className="md:text-lg text-md text-gray-700 flex justify-start text-left w-full ">
                    {basicInfo}
                </h3>
            </div>
        </div>

    );
}