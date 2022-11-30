import "./Landing.css";
import LandImage from './land-img.svg';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="frame-div">
        <img
          className="illustration-scene-plants-sa"
          alt=""
          src={LandImage}
        />
        <div className="almagram-div">Almagram</div>
        <div className="frame-div1">
          <div className="get-started-div">GET STARTED!</div>
        </div>
        <div className="frame-div2">
          <div className="back-to-where-it-began">
            <p className="back-to-where">Back to where</p>
            <p className="it-began">{`it began  `}</p>
          </div>
          <div className="llorem-ipsum-dolor-sit-amet-c">
            <p className="back-to-where">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel enim tellus. Nunc tempus molestie dui, vel volutpat lorem malesuada a. Aenean elementum vitae ante ut malesuada. Morbi non tempus quam. Nam tempus purus at dui tempus efficitur. Sed finibus dapibus tortor, in ultricies mauris mollis pulvinar. Duis sodales sem. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
