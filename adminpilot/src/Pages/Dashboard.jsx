import React from "react";
import Card from "../Components/Card";
import LineChart from "../Components/LineChart";
import DonutChart from "../Components/DonutChart";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center flex-wrap ">
        <Card
          width="340px"
          height="200px"
          name="Total Organizations"
          count="20"
          mt={16}
          mb={4}
        ></Card>
        <Card
          width="340px"
          height="200px"
          name="Total Api Hits"
          count="40"
          mt={16}
          mb={4}
        ></Card>
        <Card
          width="340px"
          height="200px"
          name="Total Cache Hits"
          count="200"
          mt={16}
          mb={4}
        ></Card>
        <Card
          width="340px"
          height="200px"
          name="Total LLM Cost"
          count="400$"
          mt={16}
          mb={4}
        ></Card>
      </div>
      <div className="flex items-center justify-center mt-10 gap-4 flex-wrap">
        {" "}
        <Card width="700px" height="470px">
          <h1 className="font-bold border-b mb-2">Monthly Earnings Overview</h1>{" "}
          <LineChart />
        </Card>
        <Card width="700px" height="470px">
  <h1 className="font-bold border-b mb-12">Organizations</h1>
 
      <DonutChart />
</Card>

      </div>
    </div>
  );
};

export default Dashboard;
