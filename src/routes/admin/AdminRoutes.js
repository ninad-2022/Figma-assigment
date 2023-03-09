import { lazy } from "react";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import DoNotDisturbAltRoundedIcon from "@mui/icons-material/DoNotDisturbAltRounded";

const ActiveJobs = lazy(() => import("../../views/activeJobs/ActiveJobs"));
const DraftJobs = lazy(() => import("../../views/draftjobs/DraftJobs"));
const ExpiredJobs = lazy(() => import("../../views/expiredJobs/ExpiredJobs"));

const AdminRoutes = [
  {
    id: 1,
    label: "Active Jobs (0)",
    icon: <PersonOutlineRoundedIcon />,
    path: "active-jobs",
    component: <ActiveJobs />,
  },
  {
    id: 2,
    label: "Draft Jobs (03)",
    icon: <ModeRoundedIcon />,
    path: "draft-jobs",
    component: <DraftJobs />,
  },
  {
    id: 3,
    label: "Expired Jobs (15)",
    icon: <DoNotDisturbAltRoundedIcon />,
    path: "",
    component: <ExpiredJobs />,
  },
];

export default AdminRoutes;
