


export default function Home() {
    return (
      <>
    {/* <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossOrigin="anonymous"
    /> */}
    <section className="mt-3">
      <div className="container">
        <div className="row g-4 align-items-xl-center">
          <div className="col-lg-7">
            <div className="row pe-xl-5">
              <div className="col-sm-6 mb-4">
                <img
                  src="\image1.jpg"
                  className="img-fluid rounded"
                  alt="about-img"
                />
                <figure className="text-end me-3 mt-n3">
                  <img src="birds.svg" alt="" />
                </figure>
              </div>
              <div className="col-sm-6">
                <div className="row mb-4">
                  <div className="col-sm-6 mb-4 mb-sm-0">
                    <div className="bg-dark text-white rounded text-center p-3">
                      <span className="h2 text-white">10+</span>
                      <p className="mb-0">Years of experience</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-success rounded text-center p-3">
                      <span className="h2 text-white">1.2K</span>
                      <p className="mb-0 text-white">Happy customers</p>
                    </div>
                  </div>
                </div>
                <img
                  src="\image2.jpg"
                  className="img-fluid rounded"
                  alt="about-img-2"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <span className="heading-color bg-light small rounded-3 px-3 py-2">
              🤝 Your gateway to digital success
            </span>
            <h2 className="my-4">Defining the future of online experiences!</h2>
            <p className="mb-4">
              {" "}
              Embrace a new era of digital success with Mizzle. Our team combines
              cutting-edge design with robust development to deliver websites that
              captivate and convert.{" "}
            </p>
            <ul className="list-group list-group-borderless mb-4">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="green"
                  role="img"
                  focusable="false"
                  className="text-primary me-2"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                </svg>{" "}
                Emphasis on ROI-driven solutions{" "}
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="green"
                  role="img"
                  focusable="false"
                  className="text-primary me-2"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                </svg>{" "}
                Expert team with diverse skill{" "}
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="green"
                  role="img"
                  focusable="false"
                  className="text-primary me-2"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                </svg>{" "}
                Proven track record of delivering results{" "}
              </li>
            </ul>
            <a href="/mizzle_ng/about/v1" className="btn btn-dark mb-0">
              Discover more
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
  
      
    );
  }