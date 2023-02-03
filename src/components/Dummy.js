function Dummy(){
    return(
<>
  {/* Navbar */}
  <div className="w3-top">
    <div className="w3-bar w3-black w3-card">
      <a
        className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
        href="javascript:void(0)"
        onclick="myFunction()"
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        HOME
      </a>
      <a
        href="#band"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        BAND
      </a>
      <a
        href="#tour"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        TOUR
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        CONTACT
      </a>
      <div className="w3-dropdown-hover w3-hide-small">
        <button className="w3-padding-large w3-button" title="More">
          MORE <i className="fa fa-caret-down" />
        </button>
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <a href="#" className="w3-bar-item w3-button">
            Merchandise
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Extras
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Media
          </a>
        </div>
      </div>
      <a
        href="javascript:void(0)"
        className="w3-padding-large w3-hover-red w3-hide-small w3-right"
      >
        <i className="fa fa-search" />
      </a>
    </div>
  </div>
  {/* Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
  <div
    id="navDemo"
    className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
    style={{ marginTop: 46 }}
  >
    <a
      href="#band"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      BAND
    </a>
    <a
      href="#tour"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      TOUR
    </a>
    <a
      href="#contact"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      CONTACT
    </a>
    <a
      href="#"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      MERCH
    </a>
  </div>
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 2000, marginTop: 46 }}>
    {/* Automatic Slideshow Images */}
    <div className="mySlides w3-display-container w3-center">
      <img src="/w3images/la.jpg" style={{ width: "100%" }} />
      <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>Los Angeles</h3>
        <p>
          <b>We had the best time playing at Venice Beach!</b>
        </p>
      </div>
    </div>
    <div className="mySlides w3-display-container w3-center">
      <img src="/w3images/ny.jpg" style={{ width: "100%" }} />
      <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>New York</h3>
        <p>
          <b>The atmosphere in New York is lorem ipsum.</b>
        </p>
      </div>
    </div>
    <div className="mySlides w3-display-container w3-center">
      <img src="/w3images/chicago.jpg" style={{ width: "100%" }} />
      <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>Chicago</h3>
        <p>
          <b>Thank you, Chicago - A night we won't forget.</b>
        </p>
      </div>
    </div>
    {/* The Band Section */}
    <div
      className="w3-container w3-content w3-center w3-padding-64"
      style={{ maxWidth: 800 }}
      id="band"
    >
      <h2 className="w3-wide">THE BAND</h2>
      <p className="w3-opacity">
        <i>We love music</i>
      </p>
      <p className="w3-justify">
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="w3-row w3-padding-32">
        <div className="w3-third">
          <p>Name</p>
          <img
            src="/w3images/bandmember.jpg"
            className="w3-round w3-margin-bottom"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w3-third">
          <p>Name</p>
          <img
            src="/w3images/bandmember.jpg"
            className="w3-round w3-margin-bottom"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w3-third">
          <p>Name</p>
          <img
            src="/w3images/bandmember.jpg"
            className="w3-round"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
    {/* The Tour Section */}
    <div className="w3-black" id="tour">
      <div
        className="w3-container w3-content w3-padding-64"
        style={{ maxWidth: 800 }}
      >
        <h2 className="w3-wide w3-center">TOUR DATES</h2>
        <p className="w3-opacity w3-center">
          <i>Remember to book your tickets!</i>
        </p>
        <br />
        <ul className="w3-ul w3-border w3-white w3-text-grey">
          <li className="w3-padding">
            September{" "}
            <span className="w3-tag w3-red w3-margin-left">Sold out</span>
          </li>
          <li className="w3-padding">
            October{" "}
            <span className="w3-tag w3-red w3-margin-left">Sold out</span>
          </li>
          <li className="w3-padding">
            November{" "}
            <span className="w3-badge w3-right w3-margin-right">3</span>
          </li>
        </ul>
        <div
          className="w3-row-padding w3-padding-32"
          style={{ margin: "0 -16px" }}
        >
          <div className="w3-third w3-margin-bottom">
            <img
              src="/w3images/newyork.jpg"
              alt="New York"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>New York</b>
              </p>
              <p className="w3-opacity">Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                className="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="w3-third w3-margin-bottom">
            <img
              src="/w3images/paris.jpg"
              alt="Paris"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Paris</b>
              </p>
              <p className="w3-opacity">Sat 28 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                className="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="w3-third w3-margin-bottom">
            <img
              src="/w3images/sanfran.jpg"
              alt="San Francisco"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>San Francisco</b>
              </p>
              <p className="w3-opacity">Sun 29 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                className="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Ticket Modal */}
    <div id="ticketModal" className="w3-modal">
      <div className="w3-modal-content w3-animate-top w3-card-4">
        <header className="w3-container w3-teal w3-center w3-padding-32">
          <span
            onclick="document.getElementById('ticketModal').style.display='none'"
            className="w3-button w3-teal w3-xlarge w3-display-topright"
          >
            ×
          </span>
          <h2 className="w3-wide">
            <i className="fa fa-suitcase w3-margin-right" />
            Tickets
          </h2>
        </header>
        <div className="w3-container">
          <p>
            <label>
              <i className="fa fa-shopping-cart" /> Tickets, $15 per person
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="How many?"
          />
          <p>
            <label>
              <i className="fa fa-user" /> Send To
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Enter email"
          />
          <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
            PAY <i className="fa fa-check" />
          </button>
          <button
            className="w3-button w3-red w3-section"
            onclick="document.getElementById('ticketModal').style.display='none'"
          >
            Close <i className="fa fa-remove" />
          </button>
          <p className="w3-right">
            Need{" "}
            <a href="#" className="w3-text-blue">
              help?
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* The Contact Section */}
    <div
      className="w3-container w3-content w3-padding-64"
      style={{ maxWidth: 800 }}
      id="contact"
    >
      <h2 className="w3-wide w3-center">CONTACT</h2>
      <p className="w3-opacity w3-center">
        <i>Fan? Drop a note!</i>
      </p>
      <div className="w3-row w3-padding-32">
        <div className="w3-col m6 w3-large w3-margin-bottom">
          <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago, US
          <br />
          <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00 151515
          <br />
          <i className="fa fa-envelope" style={{ width: 30 }}>
            {" "}
          </i>{" "}
          Email: mail@mail.com
          <br />
        </div>
        <div className="w3-col m6">
          <form action="/action_page.php" target="_blank">
            <div
              className="w3-row-padding"
              style={{ margin: "0 -16px 8px -16px" }}
            >
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required=""
                  name="Name"
                />
              </div>
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  required=""
                  name="Email"
                />
              </div>
            </div>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Message"
              required=""
              name="Message"
            />
            <button
              className="w3-button w3-black w3-section w3-right"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* End Page Content */}
  </div>
  {/* Image of location/map */}
  <img
    src="/w3images/map.jpg"
    className="w3-image w3-greyscale-min"
    style={{ width: "100%" }}
  />
  {/* Footer */}
  <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
    <i className="fa fa-facebook-official w3-hover-opacity" />
    <i className="fa fa-instagram w3-hover-opacity" />
    <i className="fa fa-snapchat w3-hover-opacity" />
    <i className="fa fa-pinterest-p w3-hover-opacity" />
    <i className="fa fa-twitter w3-hover-opacity" />
    <i className="fa fa-linkedin w3-hover-opacity" />
    <p className="w3-medium">
      Powered by{" "}
      <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
        w3.css
      </a>
    </p>
  </footer>
</>

    )
}

export default Dummy;