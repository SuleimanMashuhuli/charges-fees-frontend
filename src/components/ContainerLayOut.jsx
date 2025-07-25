import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Subinfo from "./SubInfo";
import AsideLayout from "./AsideLayout";
import Welcome from "../pages/Welcome2";
import PendingCharges from "../pages/PendingCharges";
import ViewCharges from "../pages/ViewCharges";
import ApprovedCharges from "../pages/ApprovedCharges";
import Footer from "./Footer";

export default function ContainerLayOut() {
    return (
        <div className="flex flex-col min-h-screen h-screen">
            <Header />
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden px-2 sm:px-4 md:px-8 lg:px-24 py-4 md:py-6 w-full">
                <div className=" pl-24 pr-24 mt-4 md:mt-8 lg:mt-10">
                    <Subinfo />
                </div>
                <div className="flex-1 min-h-0 h-full w-full overflow-auto">
                    <Routes>
                        <Route path="/" element={<AsideLayout />} >
                            <Route path="/*" element={<Welcome />} />
                            <Route index element={<Navigate to="pending" replace />} />
                            <Route path="pending" element={<PendingCharges />} />
                            <Route path="request/:id" element={<ViewCharges />} />
                            <Route path="approved" element={<ApprovedCharges />} />
                        </Route>
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
}
