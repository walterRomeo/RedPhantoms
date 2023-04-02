import React from "react";
import Panels from "./Panels/Panels";
import Sponsors from "../Footer/RPFooter";


export default function Main() {
    return(
        <div className="main">
            <table style="width:90%">
                <tr>
                    <th style="width:70%"><Panels /></th>   
                    <th style="width:15%"> <Sponsors/> </th>
                </tr>
            </table>
        </div>
    );
}