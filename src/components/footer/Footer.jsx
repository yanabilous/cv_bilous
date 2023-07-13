import {Link} from "react-router-dom";
import "./footer.scss";
// import telegram from "../../img/Telegram_(software)-Logo.wine.svg";


const Footer = (props) => {


    return (
        <div className="footer">
            <Link className="logo" to="/">YB</Link>

             {/*<Link to={"mailto:yanabilouswork@gmail.com"} target="_blank">yanabilouswork@gmail.com </Link>*/}

             {/*       <Link to={"https://t.me/by1405"} target="_blank"><img className="logoTelegram"*/}
             {/*                                                             src={telegram}/></Link>*/}
             {/*       <Link to={"https://www.linkedin.com/in/yana-bilous-6270b9194/"} target="_blank">*/}
             {/*           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"*/}
             {/*                fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">*/}
             {/*               <path*/}
             {/*                   d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>*/}
             {/*           </svg>*/}
             {/*       </Link>*/}
             {/*       <Link to={"https://gitlab.com/yanabilous"} target="_blank">*/}
             {/*           <svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"*/}
             {/*                xmlns="http://www.w3.org/2000/svg">*/}
             {/*               <path className="tanuki-shape tanuki"*/}
             {/*                     d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"*/}
             {/*                     fill="#E24329"></path>*/}
             {/*               <path className="tanuki-shape right-cheek"*/}
             {/*                     d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"*/}
             {/*                     fill="#FC6D26"></path>*/}
             {/*               <path className="tanuki-shape chin"*/}
             {/*                     d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"*/}
             {/*                     fill="#FCA326"></path>*/}
             {/*               <path className="tanuki-shape left-cheek"*/}
             {/*                     d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"*/}
             {/*                     fill="#FC6D26"></path>*/}
             {/*           </svg>*/}
             {/*       </Link>*/}

             {/*        <Link to={"https://github.com/yanabilous"} target="_blank">*/}
             {/*            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"*/}
             {/*                 data-view-component="true" className="octicon octicon-mark-github v-align-middle">*/}
             {/*                <path*/}
             {/*                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>*/}
             {/*            </svg>*/}
             {/*       </Link>*/}

            <div className="contacts">
                {/*<p className="phone">+38 063 1177498</p>*/}
                <p>yanabilouswork@gmail.com</p>
            </div>
            <div>
                <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">in</Link>
            </div>


        </div>
    );
};

export default Footer;