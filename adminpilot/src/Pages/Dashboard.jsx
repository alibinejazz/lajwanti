import React, { useState } from "react";
import Card from "../Components/Card";
import DataTable from "../Tables/AdminTable"; // Corrected import
import StackedBarChart from "../Components/StackedBarChart";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    { name: "Total Organizations", count: 20, table: <DataTable onBackToDashboard={()=> setSelectedCard(null)}/> },
    {
      name: "Total Api Hits/Cache Hits",
      count: 40,
      table: <div>API Hits Table</div>,
    },
    { name: "Total LLM Cost", count: "400$", table: <div>LLM Cost Table</div> },
  ];

  return (
    <div>
      {selectedCard !== null ? (
        <div>
          <Card>
            <div className="mt-4">{cardData[selectedCard].table}</div>
          </Card>
        </div>
      ) : (
        <>
          <div className="flex gap-4 justify-center flex-wrap cursor-pointer">
            {cardData.map((card, i) => (
              <Card
                key={i}
                width="465px"
                height="200px"
                name={card.name}
                count={card.count}
                mt={16}
                mb={4}
                onClick={() => setSelectedCard(i)}
              />
            ))}
          </div>

          <div className="flex items-center justify-center mt-10 gap-4 flex-wrap">
            <Card width="1430px" height="500px">
              <div className="border-b w-full mb-4">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-xl mb-2">
                    Total Queries Vs Cached Responses
                  </h1>
                  <input type="date" className="border p-4 rounded-full mb-2" />
                </div>
              </div>

              <StackedBarChart />
            </Card> 
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
