"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Clients = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".box-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <div className="section clients">
      <div className="content">
        <div className="title">
          <div className="title_inner">Hire me!</div>
        </div>
        <div className="box-items">
          <div className="box-item">
            <div className="image">
            
              <a target="_blank" href="https://www.upwork.com/freelancers/maximtincu2">
                <img src="images/clients/client_1.gif" alt="upwork" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.peopleperhour.com/freelancer/video-photo-audio/maxim-tincu-top-motion-designer-2d-explainer-nmmnmq">
                <img src="images/clients/client_2.gif" alt="peopleperhour" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.fiverr.com/irmate210">
                <img src="images/clients/client_3.gif" alt="fiverr" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          
          
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Clients;
