import React from "react";
import Dashboardbox from "./components/Dashboardbox";
import { FaUserCircle } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { MdAssignmentLate } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <div className="right-content">
        <div className="rowDash">
          <div className="columnFirst">
            <Dashboardbox
              title="Total Assignments"
              number={125}
              color={["#1da256", "#48d483"]}
              icon={<MdAssignment />}
            />
            <Dashboardbox
              title="Late Submissions"
              number={30}
              color={["#c012e2", "#eb64fe"]}
              icon={<MdAssignmentLate />}
            />
            <Dashboardbox
              title="Completed Tasks"
              number={300}
              color={["#2c78e5", "#60aff5"]}
              icon={<MdAssignmentTurnedIn />}
            />
            <Dashboardbox
              title="Pending Tokens"
              number={50}
              color={["#e1950e", "#f3cd29"]}
              icon={<MdGeneratingTokens />}
            />
          </div>
          <div className="columnSecond">
            {/* <div className="box"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
