import meter1 from "../assets/img/html5.png";
import meter2 from "../assets/img/js11.png";
import meter3 from "../assets/img/css.png";
import meter4 from "../assets/img/B.png";
import meter5 from "../assets/img/node.png";
import meter6 from "../assets/img/snapedit_1690796147030.png";
import meter7 from "../assets/img/react.png";
import meter8 from "../assets/img/redux.png";
import meter9 from "../assets/img/Mongo.png";
import meter10 from "../assets/img/js33.png";
import meter11 from "../assets/img/sql.png";
import meter12 from "../assets/img/WordPress.png";
import meter13 from "../assets/img/githup.png";
import meter14 from "../assets/img/redux.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn ">
                        <h2> My Skills</h2>
                     
                        
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  transitionDuration={700}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                {/* <h5>HTML</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                {/* <h5>css</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                {/* <h5>js</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                {/* <h5>Bootstrap</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                {/* <h5>css</h5> */}
                            </div>
                           
                           
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                {/* <h5>js</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                {/* <h5>Bootstrap</h5> */}
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
          
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn mt-5">
                        {/* <h2>Skills</h2> */}
                     
                        
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} 
                      
  
  autoPlay={true}
  autoPlaySpeed={1000}
  transitionDuration={700}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  className="owl-carousel owl-theme skill-slider"
                        
                  >
                        <div className="item">
                                <img src={meter10} alt="Image" />
                                {/* <h5>1</h5> */}
                            </div>
                            
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                {/* <h5>2</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                {/* <h5>3</h5> */}
                            </div>
                           
                           
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                {/* <h5>4</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                {/* <h5>5</h5> */}
                            </div>
                           
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                {/* <h5>5</h5> */}
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
