import React from 'react';
import "./style.scss";
import { NavLink } from "react-router-dom"
import { lang } from '../../lang';

const index = ({them , setThem , setLanges , langes}) => {
   
   console.log(langes);
   console.log(lang[langes]);

   const t = lang[langes]

   return (
      <>
         <nav className={`navbar navbar-expand-lg navbar-light  ${them==='Light' ? "bg-primary" : "dark-mode"} `} >
            <div className="container-fluid">
               <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <i className="fas fa-bars"></i>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <a className="navbar-brand mt-2 mt-lg-0" href="#">
                     <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="15"
                        alt="MDB Logo"
                        loading="lazy"
                     />
                  </a>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link" href="#">{t.dashboard}</a>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/" >{t.home}</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/about">{t.about}</NavLink>
                     </li>
                  </ul>
               </div>

               <div className="d-flex align-items-center">
                  <a className="link-secondary me-3" href="#">
                     <i className="fas fa-shopping-cart"></i>
                  </a>

                  <div className="dropdown">
                     <a
                        className="link-secondary me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >
                        <i className="fas fa-bell"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labevlledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <a className="dropdown-item" href="#">{t.someNews}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{t.anotherNews}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{t.somethingElseHere}</a>
                        </li>
                     </ul>
                  </div>
                  <div className="dropdown">
                     <a
                        className="link-secondary me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >

                        <span>{t.languages}</span>
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labevlledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <a className="dropdown-item" href="#" onClick={(e) => {setLanges("uz") , localStorage.setItem("langs" , "uz")}} >UZ</a>
                        </li>
                        <li>
                           <a className="dropdown-item" onClick={(e) => {setLanges("en" , localStorage.setItem("langes" , "en"))}} href="#">EN</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">RU</a>
                        </li>
                     </ul>
                  </div>
                  <div className="dropdown">
                     <a
                        className="link-secondary me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >

                        <span>light/dark</span>
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labevlledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <a className="dropdown-item" href="#" onClick={(e)=> {setThem("Light") , localStorage.setItem("them" , "Light")}}>{t.light}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#" onClick={(e)=> {setThem("D") , localStorage.setItem("them" , "D")}}>{t.dark}</a>
                        </li>
                     </ul>
                  </div>
                  <div className="dropdown">
                     <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >
                        <img
                           src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                           className="rounded-circle"
                           height="25"
                           alt="Black and White Portrait of a Man"
                           loading="lazy"
                        />
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                     >
                        <li>
                           <NavLink className="dropdown-item" to="/user">{t.myProfile}</NavLink>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{t.settings}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{t.logout}</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
};

export default index;