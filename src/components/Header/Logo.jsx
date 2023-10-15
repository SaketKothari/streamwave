import { Link } from 'react-router-dom';

import ytLogoMobile from '../../assets/yt-logo-mobile.png';

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex h-5 items-center">
      <img src={ytLogoMobile} alt="Streamwave" className="h-full" />
    </Link>
  );
};

export default HeaderLogo;
