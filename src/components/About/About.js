import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>John Mungai Kahura</strong> 
             .I love coding and working with different
             technologies in order to create great projects.
             Python is my Preffered language but I have mastered 
             multiple languages and can easily switch if need be.
             I can work in a team and I really take it well if my work is critiqued.
             I love to work with other Engineers and have really technical debates 
             on controversial issues in tech.

              
          </div>
          <div className="AboutBio tagline2">
            This are the technologies I am confident with.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
