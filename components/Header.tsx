import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <h3>Content Manager</h3>
            </Link>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <input
                    className="input is-rounded"
                    type="email"
                    placeholder="Search"
                  />
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <Link
                href="/"
                className="navbar-item is-active is-size-5 has-text-weight-semibold"
              >
                Home
              </Link>
              <Link
                href="/resource/new"
                className="navbar-item is-size-5 has-text-weight-semibold"
              >
                Create new Resource
              </Link>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
