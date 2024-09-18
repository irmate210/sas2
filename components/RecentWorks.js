"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const galleryImages = {
  1: [
    "images/works/work1.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
  2: [
    "images/works/work5.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
};

const RecentWorks = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
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
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={galleryImages[activeGallaryImage]}
      />
      <div className="section works section_" id="section-works">
        <div className="content">
          <div className="title">
            <div className="title_inner">Recent Works</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="All"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  All
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="2D Explainer"
                  className={`c-pointer ${activeBtn("f-video")}`}
                  onClick={handleFilterKeyChange("f-video")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-video" />
                  2D Explainer
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Logo"
                  className={`c-pointer ${activeBtn("f-music")}`}
                  onClick={handleFilterKeyChange("f-music")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-music" />
                  Logo
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="3D Animation"
                  className={`c-pointer ${activeBtn("f-links")}`}
                  onClick={handleFilterKeyChange("f-links")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  3D Animation
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Reel 2024"
                  className={`c-pointer ${activeBtn("f-image")}`}
                  onClick={handleFilterKeyChange("f-image")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-image" />
                  Reel 2024
                </label>
              </div>


              

            </div>
          </div>
          <div className="box-items portfolio-items">




            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://youtu.be/RqK_7X8AqOk"
                  className="has-popup-video"
                >
                  <img src="images/works/work1.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/RqK_7X8AqOk"
                  className="name has-popup-video"
                >
                  Shoei
                </a>
              </div>
            </div>



            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/tJJcNMEpbhU"
                  className="has-popup-video"
                >
                  <img src="images/works/work2.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/tJJcNMEpbhU"
                  className="name has-popup-video"
                >
                  Moddule
                </a>
              </div>
            </div>




<div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/AKCDQVQOx7M"
                  className="has-popup-video"
                >
                  <img src="images/works/work10.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/AKCDQVQOx7M"
                  className="name has-popup-video"
                >
                  Ritchie Bros
                </a>
              </div>
            </div>
            





            
<div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/fi_l5BqPRtg"
                  className="has-popup-video"
                >
                  <img src="images/works/work11.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/fi_l5BqPRtg"
                  className="name has-popup-video"
                >
                  Maib
                </a>
              </div>
            </div>
            





            
<div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/Rc4sfl1quGM"
                  className="has-popup-video"
                >
                  <img src="images/works/work12.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/Rc4sfl1quGM"
                  className="name has-popup-video"
                >
                  anwb
                </a>
              </div>
            </div>
           




            
<div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/oOpHZjMbK5w"
                  className="has-popup-video"
                >
                  <img src="images/works/work13.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/oOpHZjMbK5w"
                  className="name has-popup-video"
                >
                  Orpheous
                </a>
              </div>
            </div>
            






            
<div className="box-item f-music">
              <div className="image">
                <a
                  href="https://youtu.be/U3V-NvnNyPM"
                  className="has-popup-video"
                >
                  <img src="images/works/work14.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Logo</div>
                <a
                  href="https://youtu.be/U3V-NvnNyPM"
                  className="name has-popup-video"
                >
                  Closed
                </a>
              </div>
            </div>
            




            
            
<div className="box-item f-music">
              <div className="image">
                <a
                  href="https://youtu.be/RPDzdwNiU-I"
                  className="has-popup-video"
                >
                  <img src="images/works/work15.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Logo</div>
                <a
                  href="https://youtu.be/RPDzdwNiU-I"
                  className="name has-popup-video"
                >
                  Sokolov
                </a>
              </div>
            </div>
            






            
<div className="box-item f-links">
              <div className="image">
                <a
                  href="https://youtu.be/zsmmD2VbaOI"
                  className="has-popup-video"
                >
                  <img src="images/works/work16.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">3D Animation</div>
                <a
                  href="https://youtu.be/zsmmD2VbaOI"
                  className="name has-popup-video"
                >
                  Vranjez
                </a>
              </div>
            </div>
            




            
<div className="box-item f-links">
              <div className="image">
                <a
                  href="https://youtu.be/LgN9bdw5EjM"
                  className="has-popup-video"
                >
                  <img src="images/works/work17.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">3D Animation</div>
                <a
                  href="https://youtu.be/LgN9bdw5EjM"
                  className="name has-popup-video"
                >
                  Yoo
                </a>
              </div>
            </div>
            




            
<div className="box-item f-links">
              <div className="image">
                <a
                  href="https://youtu.be/_J_GbdNK6YA"
                  className="has-popup-video"
                >
                  <img src="images/works/work18.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">3D Animation</div>
                <a
                  href="https://youtu.be/_J_GbdNK6YA"
                  className="name has-popup-video"
                >
                  Sibur
                </a>
              </div>
            </div>
           




            
<div className="box-item f-image">
              <div className="image">
                <a
                  href="https://youtu.be/_VrVKwqnmFQ"
                  className="has-popup-video"
                >
                  <img src="images/works/work19.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Reel</div>
                <a
                  href="https://youtu.be/_VrVKwqnmFQ"
                  className="name has-popup-video"
                >
                  Logo Reel 2024
                </a>
              </div>
            </div>
            



            
<div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/dfr59AbMQ6g"
                  className="has-popup-video"
                >
                  <img src="images/works/work20.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/dfr59AbMQ6g"
                  className="name has-popup-video"
                >
                  Webmart
                </a>
              </div>
            </div>
            



            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/TV1QpbTEbv4"
                  className="has-popup-video"
                >
                  <img src="images/works/work21.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/TV1QpbTEbv4"
                  className="name has-popup-video"
                >
                  Royal Canin
                </a>
              </div>
            </div>
            




            
<div className="box-item f-music">
              <div className="image">
                <a
                  href="https://youtu.be/PfNoIsg8B8k"
                  className="has-popup-video"
                >
                  <img src="images/works/work22.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Logo</div>
                <a
                  href="https://youtu.be/PfNoIsg8B8k"
                  className="name has-popup-video"
                >
                  Sable
                </a>
              </div>
            </div>
            




            <div className="box-item f-image">
              <div className="image">
                <a
                  href="https://youtu.be/V6XT1ULO8h4"
                  className="has-popup-video"
                >
                  <img src="images/works/work23.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Reel</div>
                <a
                  href="https://youtu.be/V6XT1ULO8h4"
                  className="name has-popup-video"
                >
                  ShowReel 2024
                </a>
              </div>
            </div>
            


          

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/EdVysEpvCho"
                  className="has-popup-video"
                >
                  <img src="images/works/work24.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/EdVysEpvCho"
                  className="name has-popup-video"
                >
                  Travaux
                </a>
              </div>
            </div>
            



            
            
<div className="box-item f-music">
              <div className="image">
                <a
                  href="https://youtu.be/jFc6MPOsSRE"
                  className="has-popup-video"
                >
                  <img src="images/works/work25.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Logo</div>
                <a
                  href="https://youtu.be/jFc6MPOsSRE"
                  className="name has-popup-video"
                >
                  Consultly
                </a>
              </div>
            </div>
            


            
            
<div className="box-item f-music">
              <div className="image">
                <a
                  href="https://youtu.be/rKEU-EORhcw"
                  className="has-popup-video"
                >
                  <img src="images/works/work26.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Logo</div>
                <a
                  href="https://youtu.be/rKEU-EORhcw"
                  className="name has-popup-video"
                >
                  Daily
                </a>
              </div>
            </div>
            
            

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/LTPc0_CZoeI"
                  className="has-popup-video"
                >
                  <img src="images/works/work27.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/LTPc0_CZoeI"
                  className="name has-popup-video"
                >
                  HealthWise
                </a>
              </div>
            </div>
            





            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/Z6H3MITUrio"
                  className="has-popup-video"
                >
                  <img src="images/works/work28.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">2D Explainer</div>
                <a
                  href="https://youtu.be/Z6H3MITUrio"
                  className="name has-popup-video"
                >
                  Independent-Advisor
                </a>
              </div>
            </div>
            



           

          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorks;
