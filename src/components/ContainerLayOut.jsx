import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Subinfo from "./SubInfo";
import AsideLayout from "./AsideLayout";
import PendingCharges from "../pages/PendingCharges";
import ViewCharges from "../pages/ViewCharges";
import ApprovedCharges from "../pages/ApprovedCharges";
import Footer from "./Footer";

export default function ContainerLayOut() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />

            <div className="flex-1 overflow-y-auto px-24 py-10  h-full">
                <Subinfo />
                <div className="h-full">
                    <Routes>
                        <Route path="/" element={<AsideLayout />} >
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
