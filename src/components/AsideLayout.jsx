import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function AsideLayout () {
    return ( 
        <div className="basis-1/5 flex flex-col md:flex-row md:m-2 border h-auto min-h-[50vh] md:mt-2 mt-2">
            <Aside />
            <main className=" basis-4/5 flex-1 overflow-y-auto w-full">
                <Outlet />
            </main>
        </div>
    );
}