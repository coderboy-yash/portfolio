import React from "react";
import Project from "./Project";
import hoobank from "../assets/img/hoobank.png";
import gym from "../assets/img/gym.png";
import dash from "../assets/img/dash.png";
import dark from "../assets/img/dark-light.png";
import quote from "../assets/img/quote.png";
import joke from "../assets/img/joke.png";
import imdb from "../assets/img/imdb.png";
import omnifood from "../assets/img/omnifood.png";
import picture from "../assets/img/picture-in-picture.png";
import redux from "../assets/img/redux.png";
import university from "../assets/img/university.png";
import booking from "../assets/img/booking.png";
import gallery from "../assets/img/e-gallery1.png";
import weather from "../assets/img/weather.png";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  return (
    <div id="projects">
      <div>
        <Carousel className="bg-black">
          <Carousel.Item interval={900} className="  p-9  ">
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg      m-auto"
              src={hoobank}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={900} className="  p-9  ">
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg      m-auto"
              src={gym}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={900} className="  p-9  ">
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg      m-auto"
              src={dash}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={900}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block  max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={imdb}
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={900}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={weather}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={gallery}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={booking}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={omnifood}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={dark}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={university}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={redux}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={picture}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item
            interval={300}
            className="shadow-lg shadow-red-500  p-9"
          >
            <img
              className="d-block max-w-full h-96  border-yellow-100 border-4 rounded-lg  m-auto"
              src={joke}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <span className="text-[48px] decoration-red-400 decoration-[4px] underline ml-14">
          My Projects:-
        </span>
      </div>

      <div className="flex flex-wrap m-auto p-5 justify-center">
        <Project
          img={imdb}
          name={"Imdb Clone"}
          url={"https://imdb-clone-by-yash.netlify.app/"}
          details={
            "Imdb Clone build with movie db api fetches recent details of all the recent movies"
          }
        ></Project>
        <Project
          img={dash}
          name={"Hoobank project"}
          url={"https://hoobank-site-by-yash.netlify.app/"}
          details={
            "A react based project designed from a figma file styled with tailwind css"
          }
        ></Project>
        <Project
          img={gym}
          name={"Hoobank project"}
          url={"https://hoobank-site-by-yash.netlify.app/"}
          details={
            "A react based project designed from a figma file styled with tailwind css"
          }
        ></Project>
        <Project
          img={hoobank}
          name={"Hoobank project"}
          url={"https://hoobank-site-by-yash.netlify.app/"}
          details={
            "A react based project designed from a figma file styled with tailwind css"
          }
        ></Project>

        <Project
          img={weather}
          name={"Imdb Clone"}
          url={"https://imdb-clone-by-yash.netlify.app/"}
          details={
            "Imdb Clone build with movie db api fetches recent details of all the recent movies"
          }
        ></Project>
        <Project
          img={gallery}
          name={"Imdb Clone"}
          url={"https://imdb-clone-by-yash.netlify.app/"}
          details={
            "Imdb Clone build with movie db api fetches recent details of all the recent movies"
          }
        ></Project>
        <Project
          img={booking}
          name={"Imdb Clone"}
          url={"https://imdb-clone-by-yash.netlify.app/"}
          details={
            "Imdb Clone build with movie db api fetches recent details of all the recent movies"
          }
        ></Project>

        <Project
          img={redux}
          name={"Redux Store"}
          url={"https://redux-toolkit-example-yash.netlify.app/"}
          details={
            "Redux store build with redux toolkit depicts the functionality of a online store "
          }
        ></Project>
        <Project
          img={omnifood}
          name={"Omnifood"}
          url={"https://my-first-fully-responsive-website.netlify.app/"}
          details={
            "Online restaurant website fully with mobile responsiveness "
          }
        ></Project>
        <Project
          img={picture}
          name={"picture in picture"}
          url={"https://picture-in-picture-by-yash.netlify.app/"}
          details={
            "This app provides the picture in picture functionality for any type of screen on tab"
          }
        ></Project>
        <Project
          img={university}
          name={"University Website"}
          url={"https://world-s-biggest-university.netlify.app/"}
          details={"This site depicts the layout of a college site "}
        ></Project>
        <Project
          img={joke}
          name={"Joke Teller"}
          url={"https://comic-robo-by-yash.netlify.app/"}
          details={
            "A comic robot which tells audio jokes when clicked .It uses joke api to fetch jokes"
          }
        ></Project>
        <Project
          img={dark}
          name={"Dark-light theme"}
          url={"https://dark-ligth-theme.netlify.app/"}
          details={
            " A simple just for depicting how a site with light and dark mode works"
          }
        ></Project>
        <Project
          img={quote}
          name={"Quote generator"}
          url={"https://get-best-quotes.netlify.app/"}
          details={
            " A quote generator tool which generates beautiful quotes which you can directly tweet on twitter"
          }
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
