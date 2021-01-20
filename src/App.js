import './App.css';
import img from './dummy.jpg';

function App() {
  return (
    <div className='app-container'>
      <div className="background1"></div>
      <div className="background2"></div>
      <div className="background3"></div>
      <div className="logo-container">
        <h1>Seminarin</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-link"><a href="#home">Home</a></li>
          <li className="nav-link"><a href="#events">Events</a></li>
          <li className="nav-link"><a href="#features">Features</a></li>
          <li className="nav-link"><a href="#demos">Demos</a></li>
          <li className="nav-link"><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
      <div className="video-container">
      </div>
      <div className="title-container">
        <h2>Ready not to</h2>
        <h2>Stop talking</h2>
        <h2>Design?</h2>
      </div>
      <div className="call-to-action-container">
        <a href="#">I want to join now!</a>
      </div>
      <div className="schedule-container">
        <a href="#">Check the schedule!</a>
      </div>
      <div className="sub-container">
        <h3>Agustus 8, Bengkuku</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="title2-container">
        <h2>Your luck</h2>
        <h2>if you join</h2>
        <h2>us now!</h2>
      </div>
      <div className="p-container">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>Join now!</button>
      </div>
      <div className="products-container1">
        <section className="product">
          <h3>Certificate</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa!</p>
        </section>
      </div>
      <div className="products-container2">
        <section className="product">
          <h3>Material book</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa!</p>
        </section>
        <section className="product">
          <h3>Our mission</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa!</p>
        </section>
      </div>
    </div>
  );
}

export default App;
