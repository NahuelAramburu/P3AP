import CastleImage from '../../assets/images/castle1.jpeg';
import './MainContent.css'; 

const MainContent = () => {
  return (
      <div className="main-content" style={{ backgroundImage: `url(${CastleImage})`, backgroundPosition: 'center' }}>
        <a href="/page1" className="link-window">Page 1</a>
        <a href="/page2" className="link-door">Page 2</a>
        <a href="/page3" className="link-window">Page 3</a>
        <a href="/page4" className="link-door">Page 4</a>
      </div>
  );
};

export default MainContent;

