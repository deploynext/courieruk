"use client";
import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSubscribeHovered, setSubscribeHovered] = useState(false);
  const [isLoginHovered, setLoginHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(true);
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 200);
    setIsNavSticky(scrollY < 200); // unstick after 200px
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`shadow-md sticky-top  bg-white
    ${isScrolled ? 'md:py-0' : 'md:py-4'}`}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div className="d-flex align-items-center py-2 ">
            
            <button
            onClick={() => setMenuOpen(!menuOpen)}
              className="btn rounded  py-2 align-item-center   d-flex"
              style={{
                backgroundColor: isMenuHover ? "#003366" : "transparent",
                color: isMenuHover ? "#ededed" : "black",
              }}
              onMouseEnter={() => setIsMenuHover(true)}
              onMouseLeave={() => setIsMenuHover(false)}
            >
              <Menu size={24} />
              <span className="ml-3 fw-bold d-none d-md-inline">MENU</span>
            </button>
            {menuOpen && (
                <div className="dropdown-menu-custom left-0 top-0">
                <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                  
                  <button
                    className="btn btn-sm btn-link text-decoration-none text-dark"
                    onClick={() => setMenuOpen(false)}
                  >
                    ✕
                  </button>
                  <button
                    className="btn fw-bold px-3 py-2 rounded-pill"
                    style={{
                      backgroundColor: isSubscribeHovered ? "#003366" : "#30D2FF",
                      color: isSubscribeHovered ? "white" : "black",
                    
                    }}
                    onMouseEnter={() => setSubscribeHovered(true)}
                    onMouseLeave={() => setSubscribeHovered(false)}
                  >
                    SUBSCRIBE
                  </button>
                </div>
                <div className="d-flex flex-column  py-3">
                  <Link onClick={() => setMenuOpen(false)} href="/" className="info-link">Home</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/politics" className="info-link">Politics</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/business" className="info-link">Business</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/health" className="info-link">Health</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/sports" className="info-link">Sports</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/science" className="info-link">Science</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/technology" className="info-link">Technology</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/education" className="info-link">Education</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/entertainment" className="info-link">Entertainment</Link>
                  <Link onClick={() => setMenuOpen(false)} href="/lifestyle" className="info-link">Lifestyle</Link>
                </div>
                <div className="border-top d-flex flex-column px-3 py-3">
                  <Link href="#" className="info-link">About</Link>
                  <Link href="#" className="info-link">FAQ</Link>
                  <Link href="#" className="info-link">Help</Link>
                </div>
              </div>

            )}
            <Search size={20} className="d-none d-md-inline ml-5" />
          </div>
          <div className="d-block d-md-none">
            <Link  href="/"
              className="m-0  text-md text-decoration-none"
              style={{ color: "#003366", letterSpacing: "0.5px" }}
            >
              THE COURIER
            </Link>
          </div>
          {/* CENTER: Logo - hidden in mobile, centered in desktop */}
          
            <Link  href="/"
                className={`d-none d-md-block  text-center ml-44 transition-all duration-300  ${
                  isScrolled ? "text-md" : "text-xl"
                }`}
                style={{
                  textDecoration:'none',
                  fontSize: isScrolled ? "25px" : "32px", 
                  transition: "font-size 0.0s ",
                  color: "#003366",
                  fontWeight:"900"
                }}
              >
                THE COURIER
            </Link>
          <div className="d-flex align-items-center gap-2">
            <Bell size={20} className="md:mx-4"/>
            <button
              className="btn fw-bold px-3 py-2 rounded-pill"
              style={{
                backgroundColor: isSubscribeHovered ? "#003366" : "#30D2FF",
                color: isSubscribeHovered ? "white" : "black",
               
              }}
              onMouseEnter={() => setSubscribeHovered(true)}
              onMouseLeave={() => setSubscribeHovered(false)}
            >
              SUBSCRIBE
            </button>
            <button
              className="btn rounded-pill px-4 py-2 d-none d-md-inline mx-4"
              style={{
                backgroundColor: isLoginHovered ? "#003366" : "transparent",
                color: isLoginHovered ? "#ededed" : "#6c757d",
              }}
              onMouseEnter={() => setLoginHovered(true)}
              onMouseLeave={() => setLoginHovered(false)}
            >
              <span className="fw-bold">LOG IN</span>
            </button>
          </div>
        </div>
      </div>
       
    </header>

    <nav className={`d-none d-md-flex justify-content-center gap-4 py-3 border-bottom bg-light ${isNavSticky ? 'sticky-top' : ''}`}
    style={{ zIndex: 1 }}
    >
      <Link
        href="/"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Home
      </Link>
      <Link
        href="/politics"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Politics
      </Link>
      <Link
        href="/business"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Business
      </Link>
      <Link
        href="/sports"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Sports
      </Link>
      <Link
        href="/health"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Health
      </Link>
      <Link
        href="/science"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Science
      </Link>
      <Link
        href="/technology"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Technology
      </Link>
      <Link
        href="/education"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Education
      </Link>
      <Link
        href="/entertainment"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Entertainment
      </Link>
      <Link
        href="/lifestyle"
        className="text-dark fw-semibold fs-5 mx-1.5"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Lifestyle
      </Link>
    </nav>


    </>
  );
};

export default Navbar;
