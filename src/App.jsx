import './App.css'

function App() {
  return (
  <>
      <div className="navbar">
        <div className="logo">
          <span className="part1">explor</span><span className="part2">er</span>
        </div>
        <div className="nav-links">
          <a href="#">Hotels</a>
          <a href="#">Bike Rentals</a>
          <a href="#">Restaurants</a>
        </div>
      </div>
      <div className="hero">
        <div className="hero-text">
          <p className="welcome">WELCOME TO EXPLORER</p>
          <h1>Your Adventure Travel Expert in the <span className="bold-text">SOUTH</span></h1>
          <select>
            <option>Choose</option>
          </select>
          <button>EXPLORE</button>
        </div>
        <img src="https://www.shutterstock.com/image-photo/girl-motorcyclist-her-loaded-motorcycle-600nw-2005360727.jpg"
          alt="Travel" />
      </div>
      <div className="destinations">
        <h2>Destinations</h2>
        <h3>Just for you. Because you and your bike are special to us.</h3>
        <div className="cards">
          <div className="card">
            <img src="https://www.udumalaipettaifrog.in/wp-content/uploads/2021/05/IMG_3955.jpg" alt="Destination" />
              <h3>Never Ending Paddy Fields and Narrow Roads</h3>
              <h4>Pollachi</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>READ MORE</button>
          </div>
          <div className="card">
            <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thanjavur-1654770546_1a4fa1c088b5a3e91c74.webp"
              alt="Destination" />
              <h3>Small Ride Across Town in mid summer heat</h3>
              <h4>Thanjavur</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>READ MORE</button>
          </div>
          <div className="card">
            <img src="https://static2.tripoto.com/media/filter/nl/img/24373/SpotDocument/1500825812_1500825791170.jpg"
              alt="Destination" />
              <h3>Catching a Short Break at the Lotus Pond</h3>
              <h4>Chidambaram</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>READ MORE</button>
          </div>
          <div className="card">
            <img src="https://www.adotrip.com/public/images/city/61a9b15e94365-Masinagudi%20Place%20to%20visit.jpg"
              alt="Destination" />
              <h3>Road Trip Enroute the mountains and forests</h3>
              <h4>Masinagudi</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>READ MORE</button>
          </div>
          <div className="card">
            <img src="https://th.bing.com/th/id/R.f6eb33046d39ba46fbe5e84d865a4982?rik=aT5hWU3nsLUzqg&riu=http%3a%2f%2fsgakumbakonam-builders.weebly.com%2fuploads%2f8%2f0%2f9%2f9%2f80995310%2fagraharam-brahmin-community-houses-in-swamimalai.jpg&ehk=24CUd8fNmU%2fg4uxPtxWYJWnH2wuAeOBkjaGW%2bfhdO4I%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt="Destination" />
              <h3>Fall in love with the Divine Agraharams</h3>
              <h4>Kumbakonam</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>READ MORE</button>
          </div>
          <div className="card">
            <img src="https://www.studentsollution.com/wp-content/uploads/2014/06/wind-energy-1.jpg"
              alt="Destination" />
              <h3>Energy driven through the windmills</h3>
              <h4>Thirunelveli</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>Our sales Team will reach out to you ASAP!</p>
          <form>
            <input type="text" placeholder="Name" />
              <select><option>Your Home Town</option></select>
              <select><option>Where would you like to go?</option></select>
              <input type="text" placeholder="Contact Number" />
                <button type="submit">SUBMIT INTEREST</button>
                </form>
          </div >
        </div>
              </>
              )
}

export default App 