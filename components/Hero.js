"use client";
import { useEffect } from "react";
import Typed from "typed.js";

const Hero = ({ mouse }) => {
  useEffect(() => {
    new Typed(".typed-subtitle", {
      strings: ["Motion Designer and 3D Artist.", "Based in Moldova."],
      loop: true,
      typeSpeed: 80,
    });
  }, []);
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="I'm Maxim Tincu">
              I'm <span>Maxim Tincu</span>
            </div>
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span class="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
