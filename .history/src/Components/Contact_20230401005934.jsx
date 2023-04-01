import React from "react";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
// import { MDBFooter } from "mdb-react-ui-kit";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const Contact = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3 flex flex-row">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-Merriweather">
                <MDBIcon icon="gem" className="me-3" />
                Mern stack developer
              </h6>
              <p>
                "Hire me as an asset to your next web development project. "
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-Merriweather">
                Mastery on Stack
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Express
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tailwind
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  and various other tools!
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-Merriweather">
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                IIITM Gwalior
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                nigamy911@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 8957655061
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          with love from Yash.
        </a>
      </div>
    </MDBFooter>
    // <div className="flex justify-between   p-10  h-1/2 bg-black" id="contact">
    //   <div className="flex   flex-col justify-center gap-3 sm:gap-0 m-5 p-10 sm:p-0 items-center relative ">
    //     <span className="text-[48px] sm:text-[32px]">Get in Touch</span>
    //     <span className="text-[40px] sm:text-[32px] text-red-600  ml-5 font-bold">
    //       Contact me :-{" "}
    //     </span>
    //     <div className="absolute -bottom-4  -left-72 md:-left-20 sm:-left-16 ">
    //       <div className="flex gap-3 sm:gap-0 md:ml-5 sm:ml-5 sm:w-64 sm:mt-16">
    //         <span className="text-[20px] underline decoration-red-400 decoration-[4px]">
    //           connect with me:-
    //         </span>
    //         <a href="https://github.com/coderboy-yash" target="_blank">
    //           <img src={github} width="50px" alt="" />
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/yash-nigam-1170a524a/"
    //           target="_blank"
    //         >
    //           <img src={linkedin} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" flex flex-col gap-5 items-center border-2 rounded-lg border-orange-400 p-5  bg-orange-200">
    //     <input
    //       type="text"
    //       className="border-2 border-red-500 rounded-full p-2 outline-none"
    //       placeholder="name"
    //     />
    //     <input
    //       type="text"
    //       className="border-2 border-red-500 rounded-full p-2 outline-none"
    //       placeholder="email"
    //     />
    //     <input
    //       type="text"
    //       className="border-2 border-red-500 rounded-full p-2 outline-none"
    //       placeholder="message"
    //     />
    //     <button
    //       type="submit"
    //       className="bg-gradient-to-br from-orange-500 via-red-400 to-pink-500  text-white outline-red-400 py-1 w-32 px-3 rounded-xl border-none mt-4 text-[24px]"
    //     >
    //       Send
    //     </button>
    //   </div>
    // </div>
  );
};

export default Contact;
