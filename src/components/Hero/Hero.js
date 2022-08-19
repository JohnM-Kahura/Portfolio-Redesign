import React, { useState , useEffect, useRef  } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { init } from 'ityped'

import "./intro.scss"
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef()
    useEffect(() =>  {
        init(textRef.current, { 
            showCursor: true,
            backDelay:2000,
            backSpeed:60,
             strings: ['Python','Django','Flutter','React','NLP'] 
            }
            )
    }, [])

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
          <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>John Mungai</h1>
                    <h3><span ref={textRef}></span> Engineer </h3>
                </div>
                </div>
            
          </HeroLeft>
          <HeroRight>
            
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
