export default function Component6(){
    return (
        <>
            <section className="bg-dark position-relative price-wrap" data-bs-theme="dark">
  <figure className="position-absolute top-0 start-0 ms-n9" style={{transform:"translate(-120px,-120px)" , opacity:0.2}}>
    <svg
      className="opacity-2"
      width={424}
      height={405}
      viewBox="0 0 424 405"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx={212}
        cy="202.5"
        rx={212}
        ry="202.5"
        fill="url(#paint0_linear_153_3831)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_153_3831"
          x1={212}
          y1={0}
          x2={212}
          y2={405}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity={0} />
          <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  </figure>
 
  <div className="container position-relative ">
    <div className="row g-4 g-lg-6">
      <div className="col-xl-4">
        <span className=" fw-bold text-uppercase" style={{color:'rgb(9, 184, 80) !important'}}>Pricing</span>
        <h2 className="mb-4 mt-3" style={{ color: "white" }}>
          <b>Budget-friendly <br />pricing solutions</b>
        </h2>
        <p className="mb-5" style={{ color: "white" }}>
          {" "}
          Our pricing model is designed with your agency in mind. Discover our
          transparent rates and flexible options tailored to fit your unique
          needs.{" "}
        </p>
        <form className="d-flex align-items-center">
          <span className="fw-semibold heading-color text-light">Monthly</span>
          <div
            className="form-check form-switch form-check-lg mx-2 mb-1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <input
              className="form-check-input mt-0 price-toggle"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div className="position-relative">
            <span className="fw-semibold heading-color text-light">Yearly</span>
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-2 ms-md-5">
              20% save
            </span>
          </div>
        </form>
      </div>
      <div className="col-md-6 col-xl-4">
        <div
          className="card p-4 p-sm-5  "
          style={{ backgroundColor: "rgb(41, 42, 45)", border:"none" }}
        >
          {/**/}
          {/**/}
          {/**/}
          <figure className="position-absolute top-0 start-0 translate-middle mt-n4 ms-n5 d-none d-md-block">
            <svg
              className="fill-mode"
              width={86}
              height={105}
              viewBox="0 0 86 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50.9805 4.63769C51.6165 4.24345 56.4262 10.3524 61.7246 18.1163C67.0564 25.8003 72.7966 35.1061 75.9634 40.6314C82.2158 51.6489 85.8889 61.2748 84.5362 62.0301C83.1029 62.7522 77.2708 54.3462 71.0415 43.3853C67.8986 37.9165 62.7042 28.3199 58.293 20.1246C53.8819 11.9293 50.2874 5.05535 50.9805 4.63769Z"></path>
              <path d="M64.0889 66.7297C63.5001 67.2372 60.6142 65.1098 57.1179 62.637C53.6451 60.2207 49.5285 57.539 47.2336 56.0303C42.5967 52.8997 39.0022 49.8707 39.6599 48.4069C40.2841 47.0231 45.3294 47.9307 50.3923 51.2838C52.9286 52.892 56.9393 56.2802 59.8742 59.6469C62.809 63.0137 64.6779 66.2223 64.0889 66.7297Z"></path>
              <path d="M55.1316 86.0595C55.1297 86.856 48.7063 87.4433 40.9853 87.6368C33.2643 87.8295 24.2555 87.492 19.0669 87.0413C8.68981 86.139 0.434871 83.7683 0.656712 82.218C0.878555 80.6685 9.34356 80.5005 19.5833 81.393C24.7149 81.867 33.5706 82.7978 41.1895 83.6415C48.832 84.5408 55.1571 85.32 55.1316 86.0595Z"></path>
            </svg>
          </figure>
          <h5>Customization</h5>
          <p className="small mb-6">
            Our essential plan is self-service solution for businesses to handle
            website messaging and personalization
          </p>
          <p className="heading-color fw-normal mb-1">
            How many customers do you have?
          </p>
          <form className="mb-4">
            <input
              id="__BVID__553035___BV_input__"
              className="form-control form-control-lg focus-shadow-none bg-transparent border-0 border-bottom rounded-0 ps-0"
              type="email"
              
            />
          </form>
          <span className="mb-4 heading-color">
            <span className="h2 plan-price">$20</span> /month
          </span>
          <a
            aria-current="page"
            href="/mizzle_ng/saas/v2"
            className="router-link-active router-link-exact-active btn btn-success icon-link icon-link-hover justify-content-center"
          >
            Get started{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              ></path>
            </svg>
          </a>
          {/**/}
          {/**/}
        </div>
      </div>
      {/**/}
      <div className="col-md-6 col-xl-4">
        <div className="card p-4 p-sm-5 mb-3" style={{border:"none" , backgroundColor:"rgb(25, 27, 29"}}>
          {/**/}
          {/**/}
          {/**/}
          <h5>Boss mode</h5>
          <p className="small mb-1" >
            In no impression, assistance contrasted Manners she wishing justice.
          </p>
          <hr className="my-4" />
          <p className="heading-color fw-normal mb-2">
            Quick look at all the features
          </p>
          <ul className="list-group list-group-borderless mb-2 mb-sm-4">
            <li className=" d-flex small mb-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="rgb(9, 184, 80)"
                role="img"
                focusable="false"
                className="text-primary me-1 mt-1"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              Unlimited monthly visitors
            </li>
            <li className=" d-flex small mb-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="rgb(9, 184, 80)"
                role="img"
                focusable="false"
                className="text-primary me-1 mt-1"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              Dedicated SEO strategists
            </li>
            <li className=" d-flex small mb-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="rgb(9, 184, 80)"
                role="img"
                focusable="false"
                className="text-primary me-1 mt-1"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              Google Docs style editors
            </li>
            <li className=" d-flex small mb-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="rgb(9, 184, 80)"
                role="img"
                focusable="false"
                className="text-primary me-1 mt-1"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              Basic chat and email support
            </li>
            <li className=" d-flex small mb-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="rgb(9, 184, 80)"
                role="img"
                focusable="false"
                className="text-primary me-1 mt-1"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              AI powered product recommendation engine
            </li>
          </ul>
          <span className="mb-4 heading-color">
            <span className="h2 plan-price">$250</span> /month
          </span>
          <a
            aria-current="page"
            href="/mizzle_ng/saas/v2"
            className="router-link-active router-link-exact-active btn btn-success icon-link icon-link-hover justify-content-center"
          >
            Get started{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="rgb(9, 184, 80)"
              role="img"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              ></path>
            </svg>
          </a>
          {/**/}
          {/**/}
        </div>
      </div>
      {/**/}
    </div>
  </div>
</section>

        </>
    )
}