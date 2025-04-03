import '../css/style.css';
import '../css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
    >
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">JobEntry</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>

          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="/jobs" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i className="fa fa-arrow-right ms-3"></i ></Link>
      </div>
    </nav>
  )
}