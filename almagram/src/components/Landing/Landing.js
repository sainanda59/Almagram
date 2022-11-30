import "./Landing.css";
import Image from './landingImg.png';

const Landing = () => {
  return (
    <div className="landing-div">
      <img
        className="illustration-scene-plants-sam-icon"
        alt=""
        src="../illustrationsceneplantssampletemplateexampleremovebg-1@2x.png"
      />
      <div className="frame-div">
        <div className="frame-div1">
          <div className="get-started-div">GET STARTED!</div>
        </div>
        <div className="frame-div4">
          <div className="frame-div5">
            <div className="back-to-where-it-began">
              <p className="back-to-where">Back to where</p>
              <p className="it-began">{`it began  `}</p>
            </div>
            <div className="llorem-ipsum-dolor-sit-amet-c">
              <p className="back-to-where">
                lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mattis tincidunt purus, vel eleifend erat aliquam
                iddlssdlfhlshdflksdlkfds;f
              </p>
              <p className="back-to-where">,l;msjkfnsdkfbdfbhkdsf</p>
              <p className="back-to-where">skdbfhdsfkdsfbdskfbsdjfsdlfdsfl</p>
              <p className="back-to-where">jbbsdfjhdsfhksdbfjkdsf.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
