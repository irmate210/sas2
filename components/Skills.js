"use client";
export const DesignSkills = () => {    
};
export const LanguagesSkills = () => {
};
export const CodingSkills = () => {
};
export const Knowledge = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Skills</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">Motion Design</div>
            </li>
            <li>
              <div className="name">Animation</div>
            </li>
            <li>
              <div className="name">Explainer Videos</div>
            </li>
            <li>
              <div className="name">2D Animation</div>
            </li>
            <li>
              <div className="name">After Effects</div>
            </li>
            <li>
              <div className="name">Logo Animation</div>
            </li>
            <li>
              <div className="name">SaaS Animation</div>
            </li>
            <li>
              <div className="name">B2B Videos</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({
  design = true,
  languages = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      {design && <DesignSkills />}
      {languages && <LanguagesSkills />}
      {coding && <CodingSkills />}
      {knowledge && <Knowledge />}
    </Fragment>
  );
};
export default Skills;
