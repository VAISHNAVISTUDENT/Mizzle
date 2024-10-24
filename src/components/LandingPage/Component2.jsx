// pages/index.js
"use client";
import { useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    if (div1 && div2 && content1 && content2) {
      const showContent1 = () => {
        content1.classList.remove('hidden');
        content1.classList.add('visible');
        content2.classList.remove('visible');
        content2.classList.add('hidden');
      };

      const showContent2 = () => {
        content2.classList.remove('hidden');
        content2.classList.add('visible');
        content1.classList.remove('visible');
        content1.classList.add('hidden');
      };

      // Set up event listeners
      div1.addEventListener('click', showContent1);
      div2.addEventListener('click', showContent2);

      // Cleanup function to remove event listeners
      return () => {
        div1.removeEventListener('click', showContent1);
        div2.removeEventListener('click', showContent2);
      };
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <>
       <>
  <section
    className="bg-dark position-relative overflow-hidden visible"
    data-bs-theme="dark"
    id="content1"
  >
    <div className="container pb-6 position-relative mb-5">
      <div className="inner-container-small text-center mb-4 mb-sm-5 mt-5">
        <span className="text-success fw-bold text-uppercase " style={{color:'rgb(9, 184, 80) !important'}}>Features</span>
        <h2 className="mb-0 mt-3 text-light">
         <b> Powerful SaaS features for your <br /> agency</b>
        </h2>
      </div>
      <div className="row mb-1">
        <div className="col-lg-10 col-xl-8 col-xxl-6 mx-auto mb-6 mb-xl-8">
          <div className="bg-dark rounded-pill p-2 mb-3" style={{backgroundColor:"#00000041 !important" }} >
            <ul className="nav nav-pills nav-pills-success nav-responsive justify-content-between" >
              <li className="nav-item" role="presentation">
                <button
                  className=" toggle-div text-light nav-link rounded-pill icons-center active"
                  style={{ backgroundColor: "rgb(9, 184, 80) !important" }}
                  id="div1 pills-analytics-tab"
                >
                  Analytics{" "}
                </button>
              </li>
              <li className=" text-light nav-item" role="presentation">
                <button
                  className="toggle-div nav-link rounded-pill icons-center text-success hover-change" style={{color:'rgb(9, 184, 80) !important'}}
                  id="div2"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="rgb(9, 184, 80)"
                    role="img"
                    focusable="false"
                    className="me-2"
                  >
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"></path>
                  </svg>
                  Collaboration{" "}
                </button>
              </li>
              <li
                className=" text-light nav-item position-relative"
                role="presentation"
              >
                <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-n5 d-none d-lg-block">
                  Coming soon
                </span>
                <button
                  className="nav-link rounded-pill icons-center text-success" style={{color:'rgb(9, 184, 80) !important'}}
                  id="pills-automation-tab"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="rgb(9, 184, 80)"
                    role="img"
                    focusable="false"
                    className="me-2"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path>
                  </svg>
                  Automation{" "}
                </button>
              </li>
              <li className=" text-light nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill icons-center text-success" style={{color:'rgb(9, 184, 80) !important'}}
                  id="pills-scalability-tab"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="rgb(9, 184, 80)"
                    role="img"
                    focusable="false"
                    className="me-2"
                  >
                    <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
                  </svg>
                  Scalability{" "}
                </button>
              </li>
            </ul>
          </div>
          <br />
        </div>
        <div className="col-11 mx-auto">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-analytics"
              role="tabpanel"
              aria-labelledby="pills-analytics-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 mb-6 mb-lg-0">
                  <span className="bg-success bg-opacity-10 text-success text-uppercase rounded small px-3 py-2" style={{color:'rgb(9, 184, 80) !important'}}>
                    Analytics
                  </span>
                  <h3 className="my-4 text-light">
                    Comprehensive data analytics and reporting
                  </h3>
                  <p className="text-light">
                    {" "}
                    Gain valuable insights into your digital campaigns with our
                    comprehensive data analytics and reporting feature.{" "}
                  </p>
                  <ul className="mb-4">
                    <li className="text-light list-group-item heading-color mb-1 icons-center">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="gray"
                        role="img"
                        focusable="false"
                        className="text-success me-2" style={{color:'rgb(9, 184, 80) !important'}}
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      Actionable recommendations{" "}
                    </li>
                    <li className="list-group-item text-light heading-color mb-1 icons-center">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="gray"
                        role="img"
                        focusable="false"
                        className="text-success me-2" style={{color:'rgb(9, 184, 80) !important'}}
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      Cross-channel analysis{" "}
                    </li>
                    <li className="list-group-item heading-color text-light mb-0 icons-center">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="gray"
                        role="img"
                        focusable="false"
                        className="text-success me-2" style={{color:'rgb(9, 184, 80) !important'}}
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      User-friendly interface{" "}
                    </li>
                  </ul>
                  <a
                    className="btn btn-light mb-3"
                    href="#"
                  >
                    Explore analytics{" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="black"
                      role="img"
                      focusable="false"
                      className="bi"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="col-lg-4 position-relative ms-auto">
                  <img
                    src="https://themes.stackbros.in/mizzle_ng/assets/14-3UdHBCP2.jpg"
                    className="rounded img-fluid position-relative zindex-2"
                    alt="feature-img"
                  />
                  <div
                    className="bg-white rounded d-flex align-items-center position-absolute top-0 end-0 mt-n5 px-3 py-2 responsive-element"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      transform: "translate(70px, 5px)",
                      
                    }}
                  >
                    <p className="text-dark fw-bold mb-0">Meeting with</p>
                    <ul
                      className="mb-0 align-items-center"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <li className="avatar avatar-xs me-1">
                        <img
                          className="avatar-img rounded-circle"
                          src="https://themes.stackbros.in/mizzle_ng/assets/05-CG31WkZY.jpg"
                          alt="avatar"
                          style={{ height: 30, width: 30 }}
                        />
                      </li>
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="https://themes.stackbros.in/mizzle_ng/assets/06-BH1nDwXy.jpg"
                          alt="avatar"
                          style={{ height: 30, width: 30 }}
                        />
                      </li>
                    </ul>
                  </div>
                  <div
                    className="card position-absolute bottom-0 mb-3 start-0 ms-lg-n8 mb-n5"
                    style={{ transform: "translate(-50px, 50px)",border:'none !important' ,backgroundColor:"rgb(25, 27, 29) !important" }}
                  >
                    {" "}
                    {/**/}
                    {/**/}
                    {/**/}
                    <div className="card-body responsive-element" style={{border:'none !important'}}>
                      {/**/}
                      {/**/}
                      <p>Our lovely customers</p>
                      <div className="d-flex align-items-center">
                        <ul
                          className="avatar-group mb-0 align-items-center"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <li className="">
                            <img
                              className="avatar-img rounded-circle"
                              src="https://themes.stackbros.in/mizzle_ng/assets/06-BH1nDwXy.jpg"
                              alt="avatar"
                              style={{ height: 30, width: 30 }}
                            />
                          </li>
                          <li className="">
                            <img
                              className=" rounded-circle"
                              src="https://themes.stackbros.in/mizzle_ng/assets/06-BH1nDwXy.jpg"
                              alt="avatar"
                              style={{ height: 30, width: 30 }}
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="https://themes.stackbros.in/mizzle_ng/assets/06-BH1nDwXy.jpg"
                              alt="avatar"
                              style={{ height: 30, width: 30 }}
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="https://themes.stackbros.in/mizzle_ng/assets/06-BH1nDwXy.jpg"
                              alt="avatar"
                              style={{ height: 30, width: 30 }}
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="https://themes.stackbros.in/mizzle_ng/assets/06-BH1nDwXy.jpg"
                              alt="avatar"
                              style={{ height: 30, width: 30 }}
                            />
                          </li>
                        </ul>
                        <h6 className="text-white mb-0 ms-2">5K+</h6>
                      </div>
                      <hr />
                      <div className="overflow-hidden">
                        <div className="d-flex justify-content-between mb-2">
                          <small>Satisfaction Rate</small>
                          <small>80%</small>
                        </div>
                        <div className="progress progress-sm bg-success bg-opacity-10" style={{height:10 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            style={{ width: "80%",height:10 , backgroundColor:"rgb(9, 184, 80)"}}
                          />
                        </div>
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-collaboration"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 mb-6 mb-lg-0">
                  <span className="bg-success bg-opacity-10 text-success text-uppercase rounded small px-3 py-2 " style={{color:'rgb(9, 184, 80) !important'}}>
                    Collaboration
                  </span>
                  <h3 className="my-4">
                    Streamlined teamwork and client engagement
                  </h3>
                  <p className="mb-5">
                    {" "}
                    Our collaboration feature empowers your agency with seamless
                    teamwork and enhanced client engagement.{" "}
                  </p>
                  <div className="row g-4 mb-5">
                    <div className="col-sm-6">
                      <p className="heading-color icons-center mb-3">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                          ></path>
                        </svg>
                        Organized your data{" "}
                      </p>
                      <p className="heading-color icons-center mb-0">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"></path>
                        </svg>
                        Embedded Analytics{" "}
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p className="heading-color icons-center mb-3">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"></path>
                        </svg>
                        Work with any team{" "}
                      </p>
                      <p className="heading-color icons-center mb-0">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"></path>
                          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"></path>
                        </svg>
                        Collaborate securely{" "}
                      </p>
                    </div>
                  </div>
                  <a
                    className="btn btn-light"
                    href="#"
                  >
                    Explore collaboration benefits{" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="black"
                      role="img"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="col-lg-4 position-relative ms-auto">
                  <div className="col-md-8 position-absolute top-50 start-0 translate-middle mt-xl-n9 d-none d-lg-block" style={{backgroundColor:"rgb(25, 27, 29) !important"}}>
                    <div className="bg-body rounded p-3 " >
                      <div className="bg-light d-flex align-items-center rounded w-100 p-2 mb-3">
                        <div className="icon-md bg-success flex-centered bg-opacity-10 rounded-circle text-success flex-shrink-0" style={{color:'rgb(9, 184, 80) !important',}}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="rgb(9, 184, 80)"
                            role="img"
                            focusable="false"
                            className="fs-5"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
                          </svg>
                        </div>
                        <p className="heading-color mb-0 ms-2">
                          {" "}
                          Than continues its and because can use.{" "}
                        </p>
                      </div>
                      <div className="bg-light d-flex align-items-center rounded w-100 p-2 mb-3">
                        <div className="icon-md bg-success flex-centered bg-opacity-10 rounded-circle text-success flex-shrink-0">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="rgb(9, 184, 80)"
                            role="img"
                            focusable="false"
                            className="fs-5"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
                          </svg>
                        </div>
                        <p className="heading-color mb-0 ms-2">
                          Entire first decided the so must.
                        </p>
                      </div>
                      <div className="bg-light d-flex align-items-center rounded w-100 p-2">
                        <div className="icon-md bg-success flex-centered bg-opacity-10 rounded-circle text-success flex-shrink-0">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="rgb(9, 184, 80)"
                            role="img"
                            focusable="false"
                            className="fs-5"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
                          </svg>
                        </div>
                        <p className="heading-color mb-0 ms-2">
                          Separated sort.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-inline-block bg-white shadow rounded-4 position-absolute end-0 bottom-0 p-3 mb-n5 me-lg-n6 d-none d-sm-block">
                    <img
                      src="https://themes.stackbros.in/mizzle_ng/assets/05-CG31WkZY.jpg"
                      className="h-20px mb-2"
                      alt="Client-img"
                    />
                    <div className="d-flex align-items-center">
                      <img
                        src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='200px'%20height='37.5px'%20viewBox='0%200%20200%2037.5'%20style='enable-background:new%200%200%20200%2037.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2300B67A;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M0,0h37.5v37.5H0V0z%20M40.6,0h37.5v37.5H40.6V0z%20M81.3,0h37.5v37.5H81.3V0z%20M121.9,0h37.5v37.5h-37.5V0z%20M162.5,0H200v37.5h-37.5V0z'/%3e%3c/g%3e%3cpath%20class='st1'%20d='M18.8,25.3l5.7-1.4l2.4,7.3L18.8,25.3z%20M31.9,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6%20L31.9,15.8z%20M59.4,25.3l5.7-1.4l2.4,7.3L59.4,25.3z%20M72.5,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6%20L72.5,15.8z%20M100,25.3l5.7-1.4l2.4,7.3L100,25.3z%20M113.1,15.8h-10L100,6.3l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L113.1,15.8%20z%20M140.6,25.3l5.7-1.4l2.4,7.3L140.6,25.3z%20M153.8,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L153.8,15.8z%20M181.3,25.3l5.7-1.4l2.4,7.3L181.3,25.3z%20M194.4,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L194.4,15.8z'/%3e%3c/g%3e%3c/svg%3e"
                        className="h-30px"
                        alt="rating-img"
                      />
                      <h6 className="font-base fw-bold heading-color ms-1 mb-0">
                        4.8/5.0
                      </h6>
                    </div>
                    <p className="text-dark small mb-0 mt-2">
                      Review by 365 users
                    </p>
                  </div>
                  <img
                    src="https://themes.stackbros.in/mizzle_ng/assets/05-CG31WkZY.jpg"
                    className="rounded"
                    alt="feature-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="bg-dark position-relative overflow-hidden hidden"
    id="content2"
    data-bs-theme="dark"
  >
    <div className="container pb-6 position-relative mb-5 mt-5">
      <div className="inner-container-small text-center mb-4 mb-sm-5">
        <span className="text-success fw-bold text-uppercase" style={{color:'rgb(9, 184, 80) !important'}}>Features</span>
        <h2 className="mb-0 mt-3 text-light">
          <b>Powerful SaaS features for your <br /> agency</b>
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-xl-8 col-xxl-6 mx-auto mb-6 mb-xl-8">
          <div className="bg-dark rounded-pill p-2 mb-3" style={{backgroundColor:"#00000041 !important"}}>
            <ul className="nav nav-pills nav-pills-success nav-responsive justify-content-between">
              <li className="nav-item" role="presentation">
                <button
                  id="div1"
                  className="toggle-div nav-link rounded-pill icons-center text-success " style={{color:'rgb(9, 184, 80) !important'}}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="rgb(9, 184, 80)"
                    role="img"
                    focusable="false"
                    className="me-2"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"></path>
                  </svg>
                  Analytics{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill icons-center active toggle-div"
                  style={{ backgroundColor: "rgb(9, 184, 80) !important" }}
                  id="div2"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"></path>
                  Collaboration{" "}
                </button>
              </li>
              <li className="nav-item position-relative" role="presentation">
                <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-n5 d-none d-lg-block ">
                  Coming soon
                </span>
                <button
                  className="nav-link rounded-pill icons-center text-success" style={{color:'rgb(9, 184, 80) !important'}}
                  id="pills-automation-tab"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="rgb(9, 184, 80)"
                    role="img"
                    focusable="false"
                    className="me-2"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path>
                  </svg>
                  Automation{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill icons-center text-success" style={{color:'rgb(9, 184, 80) !important'}}
                  id="pills-scalability-tab"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="rgb(9, 184, 80)"
                    role="img"
                    focusable="false"
                    className="me-2"
                  >
                    <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
                  </svg>
                  Scalability{" "}
                </button>
              </li>
            </ul>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div className="col-11 mx-auto">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade"
              id="pills-analytics"
              role="tabpanel"
              aria-labelledby="pills-analytics-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 mb-6 mb-lg-0">
                  <span className="bg-success bg-opacity-10 text-success text-uppercase rounded small px-3 py-2" style={{color:'rgb(9, 184, 80) !important'}}>
                    Analytics
                  </span>
                  <h3 className="my-4">
                    Comprehensive data analytics and reporting
                  </h3>
                  <p>
                    {" "}
                    Gain valuable insights into your digital campaigns with our
                    comprehensive data analytics and reporting feature.{" "}
                  </p>
                  <ul className="list-group list-group-borderless mb-4">
                    <li className="list-group-item heading-color mb-0 icons-center">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="rgb(9, 184, 80)"
                        role="img"
                        focusable="false"
                        className="text-success me-2" style={{color:'rgb(9, 184, 80) !important'}}
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      Actionable recommendations{" "}
                    </li>
                    <li className="list-group-item heading-color mb-0 icons-center">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="rgb(9, 184, 80)"
                        role="img"
                        focusable="false"
                        className="text-success me-2" style={{color:'rgb(9, 184, 80) !important'}}
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      Cross-channel analysis{" "}
                    </li>
                    <li className="list-group-item heading-color mb-0 icons-center">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="rgb(9, 184, 80)"
                        role="img"
                        focusable="false"
                        className="text-success me-2" style={{color:'rgb(9, 184, 80) !important'}}
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      User-friendly interface{" "}
                    </li>
                  </ul>
                  <button
                    className="btn btn-light "
                    href="#"
                  >
                    Explore analytics
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="white"
                      role="img"
                      focusable="false"
                      className="bi"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="col-lg-4 position-relative ms-auto">
                  <img
                    src="/mizzle_ng/assets/14-3UdHBCP2.jpg"
                    className="rounded position-relative zindex-2"
                    alt="feature-img"
                  />
                  <div className="bg-white rounded d-flex align-items-center position-absolute top-0 end-0 mt-n5 px-3 py-2">
                    <p className="text-dark fw-bold mb-0">Meeting with</p>
                    <ul className="mb-0 align-items-center">
                      <li className="avatar avatar-xs me-1">
                        <img
                          className="avatar-img rounded-circle"
                          src="/mizzle_ng/assets/06-BH1nDwXy.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="/mizzle_ng/assets/05-CG31WkZY.jpg"
                          alt="avatar"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="card position-absolute bottom-0 start-0 ms-lg-n8 mb-n5 responsive-element" >
                    {/**/}
                    {/**/}
                    {/**/}
                    <div className="card-body " style={{border:'none !important'}} >
                      {/**/}
                      {/**/}
                      <p>Our lovely customers</p>
                      <div className="d-flex align-items-center">
                        <ul className="avatar-group mb-0 align-items-center">
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="/mizzle_ng/assets/02-QpbjWlGB.jpg"
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="/mizzle_ng/assets/03-D3P3Mx3U.jpg"
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="/mizzle_ng/assets/04-qglPzAuR.jpg"
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="/mizzle_ng/assets/05-CG31WkZY.jpg"
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="/mizzle_ng/assets/06-BH1nDwXy.jpg"
                              alt="avatar"
                            />
                          </li>
                        </ul>
                        <h6 className="text-white mb-0 ms-2">5K+</h6>
                      </div>
                      <hr />
                      <div className="overflow-hidden">
                        <div className="d-flex justify-content-between mb-2">
                          <small>Satisfaction Rate</small>
                          <small>80%</small>
                        </div>
                        <div
                          className="progress progress-sm bg-success bg-opacity-10"
                          style={{
                            backgroundColor: "rgb(9, 184, 80) !important",
                            color: "rgb(9, 184, 80) !important"
                          }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            style={{
                              width: "80%",
                              backgroundColor: "rgb(9, 184, 80) !important",
                              color: "rgb(9, 184, 80) !important"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade active show"
              id="pills-collaboration"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 mb-6 mb-lg-0">
                  <span className="bg-success bg-opacity-10 text-success text-uppercase rounded small px-3 py-2" style={{color:'rgb(9, 184, 80) !important'}}>
                    Collaboration
                  </span>
                  <h3 className="my-4 text-light">
                    Streamlined teamwork and client engagement
                  </h3>
                  <p className="mb-5 text-light">
                    {" "}
                    Our collaboration feature empowers your agency with seamless
                    teamwork and enhanced client engagement.{" "}
                  </p>
                  <div className="row g-4 mb-5">
                    <div className="col-sm-6">
                      <p className="heading-color icons-center mb-3 text-light">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                          ></path>
                        </svg>
                        Organized your data{" "}
                      </p>
                      <p className="heading-color icons-center mb-0 text-light">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"></path>
                        </svg>
                        Embedded Analytics{" "}
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p className="heading-color icons-center mb-3 text-light">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"></path>
                        </svg>
                        Work with any team{" "}
                      </p>
                      <p className="heading-color icons-center mb-0 text-light">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="rgb(9, 184, 80)"
                          role="img"
                          focusable="false"
                          className="fa-xl text-success me-3" style={{color:'rgb(9, 184, 80) !important'}}
                        >
                          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"></path>
                          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"></path>
                        </svg>
                        Collaborate securely{" "}
                      </p>
                    </div>
                  </div>
                  <a
                    className="btn btn-light mb-3"
                    href="#"
                  >
                    Explore collaboration benefits{" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="black"
                      role="img"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="col-lg-4 position-relative ms-auto">
                  <div className="col-md-8 position-absolute top-50 start-0 translate-middle mt-xl-n9 d-none d-lg-block">
                    <div
                      className="bg-body rounded p-3"
                      style={{ transform: "translate(0px -100px) !important" , backgroundColor:"rgb(25, 27, 0 !important" }} 
                    >
                      <div className="bg-light d-flex align-items-center rounded w-100 p-2 mb-3">
                        <div className="icon-md bg-success flex-centered bg-opacity-10 rounded-circle text-success flex-shrink-0" style={{color:'rgb(9, 184, 80) !important'}}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="rgb(9, 184, 80)"
                            role="img"
                            focusable="false"
                            className="fs-5"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
                          </svg>
                        </div>
                        <p className="heading-color mb-0 ms-2 ">
                          {" "}
                          Than continues its and because can use.{" "}
                        </p>
                      </div>
                      <div className="bg-light d-flex align-items-center rounded w-100 p-2 mb-3">
                        <div className="icon-md bg-success flex-centered bg-opacity-10 rounded-circle text-success flex-shrink-0" style={{color:'rgb(9, 184, 80) !important'}}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="rgb(9, 184, 80)"
                            role="img"
                            focusable="false"
                            className="fs-5"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
                          </svg>
                        </div>
                        <p className="heading-color mb-0 ms-2">
                          Entire first decided the so must.
                        </p>
                      </div>
                      <div className="bg-light d-flex align-items-center rounded w-100 p-2">
                        <div className="icon-md bg-success flex-centered bg-opacity-10 rounded-circle text-success flex-shrink-0" style={{color:'rgb(9, 184, 80) !important'}}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="rgb(9, 184, 80)"
                            role="img"
                            focusable="false"
                            className="fs-5"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"></path>
                          </svg>
                        </div>
                        <p className="heading-color mb-0 ms-2">
                          Separated sort.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-inline-block bg-white shadow rounded-4 position-absolute end-0 bottom-0 p-3 mb-n5 me-lg-n6 d-none d-sm-block mb-5"
                    style={{
                      transform: "translate(100px, 80px)",
                      
                    }}
                  >
                  
                    <div className="d-flex align-items-center">
                      <img
                        src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='200px'%20height='37.5px'%20viewBox='0%200%20200%2037.5'%20style='enable-background:new%200%200%20200%2037.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2300B67A;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M0,0h37.5v37.5H0V0z%20M40.6,0h37.5v37.5H40.6V0z%20M81.3,0h37.5v37.5H81.3V0z%20M121.9,0h37.5v37.5h-37.5V0z%20M162.5,0H200v37.5h-37.5V0z'/%3e%3c/g%3e%3cpath%20class='st1'%20d='M18.8,25.3l5.7-1.4l2.4,7.3L18.8,25.3z%20M31.9,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6%20L31.9,15.8z%20M59.4,25.3l5.7-1.4l2.4,7.3L59.4,25.3z%20M72.5,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6%20L72.5,15.8z%20M100,25.3l5.7-1.4l2.4,7.3L100,25.3z%20M113.1,15.8h-10L100,6.3l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L113.1,15.8%20z%20M140.6,25.3l5.7-1.4l2.4,7.3L140.6,25.3z%20M153.8,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L153.8,15.8z%20M181.3,25.3l5.7-1.4l2.4,7.3L181.3,25.3z%20M194.4,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L194.4,15.8z'/%3e%3c/g%3e%3c/svg%3e"
                        className="h-30px"
                        alt="rating-img"
                      />
                      <h6 className="font-base fw-bold heading-color ms-1 mb-0">
                        4.8/5.0
                      </h6>
                    </div>
                    <p className="text-dark small mb-0 mt-2">
                      Review by 365 users
                    </p>
                  </div>
                  <img
                    src="https://themes.stackbros.in/mizzle_ng/assets/17-sDigSy8T.jpg"
                    className="rounded img-fluid"
                    alt="feature-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

       </>

      <style jsx>{`
        .hidden {
      display: none !important;
    }
    .visible {
    display: block !important;
      }
    @media (max-width: 683px) {
  .responsive-element {
    display: none !important;
  }
}
      `}</style>
    </div>
  );
}
