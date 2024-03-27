import React from "react";
import "./about.css";
import { publications } from "../../assets/data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

export const Publications = () => {
  return (
    <div className="publications-container">
      <VerticalTimeline>
        {publications.map((publication, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--right"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              cursor: "pointer",
            }}
            icon={
              <WorkIcon
                onClick={() => window.open(publication.link, "_blank")}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              {publication.category}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {publication.title}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
