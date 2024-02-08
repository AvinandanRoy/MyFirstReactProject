import "../assets/CSS/App.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="hero-btn">
            <button className="loginBtn">Shop Now</button>
            <button className="loginBtn secondBtn">Category</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="public/shoe_imageshoe.png" alt="Hero Image" />
      </div>
    </main>
  );
};

export default Hero;
