import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Subinfo from "./SubInfo";
import AsideLayout from "./AsideLayout"
import PendingCharges from "../pages/PendingCharges";
import ViewCharges from "../pages/ViewCharges";
import ApprovedCharges from "../pages/ApprovedCharges"
import Footer from "./Footer";

export default function ContainerLayOut() {
    return (
        <React.Fragment>
            <Header />

            <div className="px-24 py-20 ">
                <Subinfo />

                <Routes>
                    <Route path="/" element={<AsideLayout />} >
                        <Route path="pending" element={<PendingCharges />} />
                        <Route path="request/:id" element={<ViewCharges />} />
                        <Route path="approved" element={<ApprovedCharges />} />
                    </Route>
                </Routes>
            </div>
            <Footer />
        </React.Fragment>
    );

}