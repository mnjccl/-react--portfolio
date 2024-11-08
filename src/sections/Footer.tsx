function Footer() {
  return (
    <section className="c-space flex flex-wrap items-center justify-between gap-5 border-t border-black-300 pb-3 pt-7">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/minja-%C4%87u%C4%87ula/">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="h-1/2 w-1/2"
            />
          </div>
        </a>
        <a href="https://github.com/mnjccl">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="h-1/2 w-1/2"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/mnjccl/">
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="h-1/2 w-1/2"
            />
          </div>
        </a>
      </div>
      <p className="text-white-500">&copy; 2024 Minja. All rights reserved.</p>
    </section>
  );
}

export default Footer;
