import { useState, useEffect, useContext } from "react";

import { Context } from "../context";
import { useRouter } from "next/router";

const Footer = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <footer class=" jumbotron sticky-bottom">
      <div class="container-fluid">
        <div className="row">
          <div className="col">
            <a href="/">courseme</a>
            <h6>@ 2022 Courseme</h6>
          </div>
          <div className="col-10 ">
            <div class="container">
              <div class="row row-cols-3">
                <li class="col navbar">
                  <a href="/about">About us</a>
                </li>
                <li class="col navbar">
                  <a href="/policy">Privacy Policy</a>
                </li>
                <li class="col navbar">
                  <a href="#">Terms</a>
                </li>
                <li class="col navbar">
                  <a href="#">Membership</a>
                </li>
                <li class="col navbar">
                  <a href="#">Contact Us</a>
                </li>
                <li class="col navbar">
                  <a href="#">Become a Partner</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
