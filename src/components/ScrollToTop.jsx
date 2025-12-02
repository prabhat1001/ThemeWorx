import { useEffect } from "react";
import { useLocation } from "react-router-dom";


/* `<ScrollToTop />` in App.jsx is a component that is used to scroll the page to the top whenever the route
    changes. This is a common practice in web applications to ensure that the user is always
    presented with the top of the page when navigating between different sections or pages. */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "smooth"
    });
  }, [pathname]);

  return null;
}
