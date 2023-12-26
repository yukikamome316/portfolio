'use client';
import { Chrono } from "react-chrono";
import { data } from "@/constant/timeline"

const Timeline = () => {
  return (
    <div style={{ width: '80vh', height: '90dvh' }}>
      <Chrono
        items={data}
        mode="VERTICAL"
        theme={{
          primary: "black",
          secondary: "#D5D5D5",
          cardBgColor: "#F8F9F9",
          cardTitleColor: "black",
          // cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "black",
        }}
        slideShow
        cardHeight={150}
      />
    </div>
  );
};

export default Timeline;
