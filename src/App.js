import React from "react";
import logo from "./icons/logo.jpg";
import searchButton from "./icons/search-button.jpg";
import facebook from "./icons/facebook.jpg";
import mastercard from "./icons/mastercard.jpg";
import visa from "./icons/visa.jpg";
import plants from "./img/plants.jpg";
import anotherPlants from "./img/another-plants.jpg";

import "./style.css";

const App = () => {
  return (
    <>
      <header>
        <img className="logo" alt="logo" src={logo} />
        <nav>
          <ul className="menu">
            <li className="menu_item">
              <a className="menu_link" href="#">
                About Us
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#">
                Contact Us
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#">
                Blog
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#">
                Site Map
              </a>
            </li>
            <li className="menu_item">
              <select defaultValue="Eng" className="select-lang">
                <option value="Eng">Eng</option>
                <option value="Ru">Ru</option>
              </select>
            </li>
          </ul>
        </nav>
        <div className="search_field">
          <input className="nav_input" />
          <button className="search_button">
            <img alt="search-button" src={searchButton} />
          </button>
        </div>
      </header>
      <main>
        <section className="main_section">
          <div className="content">
            <h2 className="h2_content">Lorem ipsum dolor sit amet</h2>
            <h3 className="h3_content">Lorem ipsum dolor sit amet</h3>
            <p className="text_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
              tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies.
              Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet,
              sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="content_button">Buy Now</button>
          </div>
          <img alt="plants" src={plants} />
        </section>
        <section className="about">
          <ul className="about_list">
            <li className="card">
              <img alt="another plants" src={anotherPlants} />
              <div className="card_content">
                <h4 className="card_h4">About Us</h4>
                <p className="card_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Eleifend tincidunt posuere eu risus cursus. Senectus sed
                  maecenas viverra tempus at. Nulla aliquam ac diam amet,
                  sagittis, ut ultricies. Urna hendrerit morbi sed gravida.
                  Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
                  hendrerit morbi sed gravida. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Eleifend tincidunt posuere eu
                  risus cursus.
                </p>
                <a href="#" className="card_link">
                  Learn more about →
                </a>
              </div>
            </li>
            <li className="card">
              <img alt="another plants" src={anotherPlants} />
              <div className="card_content">
                <h4 className="card_h4">About Us</h4>
                <p className="card_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Eleifend tincidunt posuere eu risus cursus. Senectus sed
                  maecenas viverra tempus at. Nulla aliquam ac diam amet,
                  sagittis, ut ultricies. Urna hendrerit morbi sed gravida.
                  Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
                  hendrerit morbi sed gravida. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Eleifend tincidunt posuere eu
                  risus cursus.
                </p>
                <a href="#" className="card_link">
                  Learn more about →
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section className="form">
          <div className="contact">
            <h2 className="h2_contact">Contact Us</h2>
            <p className="contact_text">
              Fill up the form and our Team will get back to you within 24
              hours. Happy to see your message!
            </p>
            <ul className="contact_list">
              <li className="contact_item">
                <img className="contact_icon" alt="facebook_icon" src={facebook} />
                +380 93 15 32 456
              </li>
              <li className="contact_item">
                <img className="contact_icon" alt="facebook_icon" src={facebook} />
                example@gmail.com
              </li>
              <li className="contact_item">
                <img className="contact_icon" alt="facebook_icon" src={facebook} />
                Pidmurma 5a, Lviv
              </li>
            </ul>
            <ul className="facebook_list">
              <li>
                <img src={facebook} alt="facebook_icon" />
              </li>
              <li>
                <img src={facebook} alt="facebook_icon" />
              </li>
              <li>
                <img src={facebook} alt="facebook_icon" />
              </li>
            </ul>
          </div>
          <form>
            <div className="form_row">
              <div className="input_item">
                <label className="input_label" htmlFor="fname">
                  First name
                </label>
                <input
                  className="input_field"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="input_item">
                <label className="input_label" htmlFor="lname">
                  Last name
                </label>
                <input
                  className="input_field"
                  type="text"
                  id="lname"
                  name="lname"
                />
              </div>
            </div>
            <div className="form_row">
              <div className="input_item">
                <label className="input_label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input_field"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="input_item">
                <label className="input_label" htmlFor="tel">
                  Phone Number
                </label>
                <input className="input_field" type="tel" id="tel" name="tel" />
              </div>
            </div>
            <div className="form_row">
              <input type="radio" id="Developer" name="Developer" />
              <label htmlFor="Developer">UI Developer</label>
              <input type="radio" id="Designer" name="Designer" />
              <label htmlFor="Designer">UI/UX Designer</label>
              <input type="radio" id="Expert" name="Expert" />
              <label htmlFor="Expert">Accessibility Expert</label>
              <input type="radio" id="QA" name="QA" />
              <label htmlFor="QA">QA Engineer</label>
              <input type="radio" id="Other" name="Other" />
              <label htmlFor="Other">Other</label>
            </div>
            <div className="input_item">
              <label className="input_label" htmlFor="message">
                Message
              </label>
              <textarea
                defaultValue="Text here..."
                type="text"
                rows="5"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div className="form_checkbox">
              <div className="input_checkbox">
                <input type="checkbox" id="term1" name="term1" />
                <label htmlFor="term1">Accept the Terms</label>
              </div>
              <div className="input_checkbox">
                <input type="checkbox" id="term2" name="term2" />
                <label htmlFor="term2">Accept the Terms 2</label>
              </div>
            </div>
            <div className="button_container">
              <button className="form_button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer>
        <div className="top_footer">
          <div>
            <h2 className="footer_h2">PlantMe</h2>
            <span className="footer_content">
              Subscribe and be the first to know about our news and promotions.
            </span>
            <div className="subscribe_form">
              <input className="footer_input" />
              <button type="submit" className="subscribe_button">
                Subscribe
              </button>
            </div>
          </div>
          <nav>
            <ul className="footer_list">
              <li className="footer_list_item">
                <a className="footer_link" href="#">
                  About Us
                </a>
              </li>
              <li className="footer_list_item">
                <a className="footer_link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="footer_list_item">
                <a className="footer_link" href="#">
                  Blog
                </a>
              </li>
              <li className="footer_list_item">
                <a className="footer_link" href="#">
                  Site Map
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer_contact_list">
            <span className="footer_title">Contacts</span>
            <span className="footer_contact">+38 063 072 0121</span>
            <span className="footer_contact">plantme.store@gmail.com</span>
            <div>
              <img alt="visa" src={visa} />
              <img alt="mastercard" src={mastercard} />
            </div>
          </div>
        </div>
        <hr className="solid" />
        <div className="bottom_footer">
          <span className="rights">© 2022 PlantMe. All Rights Reserved</span>
          <ul className="policy">
            <li className="policy_item">
              <a className="footer_link" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="policy_item">
              <a className="footer_link" href="#">
                Terms of service
              </a>
            </li>
            <li className="policy_item">
              <a className="footer_link" href="#">
                Language
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default App;
