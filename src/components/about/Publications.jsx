import React from "react";
import "./about.css";
import { publications } from "../../assets/data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export const Publications = () => {
  return (
    <div className="publications-container">
      <VerticalTimeline>
        {publications.map((publication, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--publication"
            contentStyle={{ background: "rgb(16,22,36)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            iconStyle={{
              background: "rgb(16,22,36)",
              color: "#fff",
              cursor: "pointer",
            }}
            icon={
              <LibraryBooksIcon
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
