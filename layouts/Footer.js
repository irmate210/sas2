const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <a target="_blank" href="https://www.instagram.com/tincumax/">
          <span className="ion ion-social-instagram-outline" />
        </a>
        
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Maxim Tincu - Freelance Motion Designer
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
