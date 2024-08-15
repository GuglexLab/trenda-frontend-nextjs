// components/BusinessCard.js
import Image from 'next/image';
import logo  from "@/assets/images/logo/trenda-icon.png";
import "@/assets/styles/components/BusinessCard.scss";
 

const BusinessCard = ({ 
  user, 
  profileUrl, 
  businessName, 
  email, 
  mobile, 
  location 
}) => {
  return (
    <div className="wrapper">
      <div className="ticket-visual_visual" id="ticket">
        <div className="left"></div>
        <div className="right"></div>
        <div className="ticket-visual-wrapper">
          <div className="ticket-visual_profile">
            <div className="ticket-profile_profile">
              <Image
                src={profileUrl || ''}
                alt="Profile Image"
                className="ticket-profile_image"
                width={100} 
                height={100} 
              />
              <div>
                <div className="ticket-profile_text">
                  <p className="ticket-profile_name">{businessName}</p>
                  <p className="ticket-profile_username">
                    <span className="ticket-profile_githubIcon">
                      <Image 
                        src={logo}
                        alt="Trenda Icon"
                        width={20}  
                        height={20} 
                      />
                    </span>
                    {user}
                  </p>
                </div>
                <div className="ticket-event">
                  <p>Built by Trenda</p>
                  <p>{location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-visual_ticket-number-wrapper">
            <div className="ticket-visual_ticket-number">TRENDA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// BusinessCard.propTypes = {
//   user: PropTypes.string.isRequired,
//   profileUrl: PropTypes.string,
//   businessName: PropTypes.string.isRequired,
//   email: PropTypes.string,
//   mobile: PropTypes.string,
//   location: PropTypes.string
// };

// BusinessCard.defaultProps = {
//   profileUrl: 'https://github.com/medhatdawoud.png',
//   location: 'Ghana'
// };

export default BusinessCard;
