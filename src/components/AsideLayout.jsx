import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function AsideLayout () {
    return ( 
        <div className=" flex  m-10 border">
            <Aside />
            <main className="flex-1 overflow-y-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}