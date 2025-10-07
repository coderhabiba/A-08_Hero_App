const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="footer sm:footer-horizontal max-w-[1400px] mx-auto py-10 text-white">
        <aside>
          <div className="w-10">
            <img src="https://i.ibb.co.com/tT4NB2V5/logo.png" alt="logo" />
          </div>
          <p>
            Hero App LTD.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Hero App</a>
          <a className="link link-hover">Hero Studio</a>
          <a className="link link-hover">Hero for Teams</a>
          <a className="link link-hover">Integrations</a>
          <a className="link link-hover">API Access</a>
          <a className="link link-hover">Download for Android</a>
          <a className="link link-hover">Download for iOS</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Hero.IO</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Newsroom</a>
          <a className="link link-hover">Press Kit</a>
          <a className="link link-hover">Investors</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">License Agreements</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
