import { TestTubeDiagonal } from "lucide-react";
import {LayoutDashboard, BookDashed} from "lucide-react"

export const SideBarTopElements = [
    {
        label : "Dashboard",
        to : "/teacher/dashboard",
        icon : <LayoutDashboard />
    },
    {
        label : "Templates",
        to : "/teacher/templates",
        icon : <BookDashed />
    },
    {
        label : "Assessments",
        to : "/teacher/Assessments",
        icon : <TestTubeDiagonal />
    },
];