import React from 'react';
import '../../style/index.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2002 by Keshav Vats.</p>
        <p>Created with FIGMA.</p>
      </div>
      <div className="footer-right">
        <div className="contact-block">
          <strong>  CALL</strong>
          <p>  +(91)0000000</p>
        </div>
        <div className="contact-block">
          <strong>E-MAIL</strong>
          <p>thismail@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
