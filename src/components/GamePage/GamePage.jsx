import videoGame from "../../assets/video3.mp4";
import "./GamePage.css";

export const GamePage = () => {
  return (
    <div className="man">
      {/* Community Group */}
      <div className="group">
        <article>
          <img src="https://i.imgur.com/wx5T0DQ.jpg" alt="background" className="picture" />
          <div className="header">
            <h3>A thriving community of Creators</h3>
            <p>
              Creators and developers around the world hone their real-time
              skills in remarkable, groundbreaking ways. <br /> Check out some of our
              favorite recent projects from real Unreal Engine users across
              industries.
            </p>
          </div>
        </article>
      </div>

      <video autoPlay loop muted>
        <source src={videoGame} type="video/mp4" />
      </video>

      {/* Latest Games */}
      <div className="latest">
        <p style={{ textAlign: "left", fontSize: "26px", marginLeft: "70px" }}>
          Explore the Latest from our site
        </p>
        <hr style={{ width: "89%" }} />
        <img src="https://i.imgur.com/QKI8zhZ.jpg" style={{ margin: "5px", marginLeft: "10px" }} />
        <img src="https://i.imgur.com/8e7ZNoi.jpg" style={{ margin: "5px", marginLeft: "10px" }} />
      </div>

      {/* Community && Support */}
      <br />
      <div className="community">
        <div>
          <hr />
          <h3>Learn Car race</h3>
          <p>
            Learn the Car race, how to play your game with 300 hours of video
            tutorials
          </p>
          <button>START LEARNING</button>
        </div>
        <div>
          <hr />
          <h3>Join the Community</h3>
          <p>
            Join the community and be part of the unreal creator who build the
            cutting edge experiences
          </p>
          <button>VISIT COMMUNITY</button>
        </div>
        <div>
          <hr />
          <h3>Get Support</h3>
          <p>
            Explore the documentation, get community support and dedicated
            professional support
          </p>
          <button>SEE SUPPORT</button>
        </div>
      </div>
    </div>
  );
};
