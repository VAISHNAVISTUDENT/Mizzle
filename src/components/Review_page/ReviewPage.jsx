export default function Home() {
    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <section className="mt-3">
          <div className="container">
            <div className="row">
              {/* Carousel on the Left */}
              <div className="col-lg-6 mt-4" >
                <span
                  className="heading-color bg-light small rounded-3 px-3 py-2"
                  style={{ width: 300 }}
                >
                  💖Real results from real clients
                </span>
                <h2 className="my-4">
                  See how we've helped our <br /> clients succeed
                </h2>
                <h6 className="mb-3">More than 1500+ agencies using Mizzle</h6>
                
              </div>
              {/* Right Content (Headings and Comments) */}
              <div className="col-lg-6 mb-5">
                <div className="position-relative mt-4 top-0 end-0">
                  <img
                    src="\image_landing.jpg"
                    className="img-fluid rounded"
                    alt="testimonial-img"
                    style={{padding:45}}
                  />
                  <div className="col-sm-8 col-11 position-absolute top-0 start-0 mt-3 mt-n2 mt-sm-7 ms-n2 ms-sm-n7 ">
                    <div className="bg-dark rounded d-flex align-items-center px-3 py-2">
                      <div className="avatar avatar-sm flex-shrink-0 me-2 img-fluid">
                        <img
                          className="avatar-img rounded-circle img-fluid"
                          style={{ height: 50, width: 50 }}
                          src="\person.jpg"
                          alt="avatar"
                        />
                      </div>
                      <p className="text-white small mb-0">
                        "The best Bootstrap theme we've ever used 🔥"
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded shadow d-flex align-items-center position-absolute bottom-0 start-0 mb-sm-5 ms-sm-n5 px-3 py-2">
                    <div className="avatar avatar-sm flex-shrink-0 me-2 img-fluid">
                      <img
                        className="avatar-img rounded-circle img-fluid"
                        style={{ height: 50, width: 50 }}
                        src="\person.jpg"
                        alt="avatar"
                      />
                    </div>
                    <p className="text-dark small mb-0">"Excellent Theme 💗"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </>
      
      
    );
  }