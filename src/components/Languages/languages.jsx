import angularlogo from "../../assets/angular-logo.svg";
import csslogo from "../../assets/css-logo.svg";
import htmllogo from "../../assets/html-logo.svg";
import jslogo from "../../assets/js-logo.svg";
import reactlogo from "../../assets/react-logo.svg";
import sasslogo from "../../assets/sass-logo.svg";
import nodelogo from "../../assets/nodejs-logo.svg";
import mysqllogo from "../../assets/mysql-logo.svg";
import figmalogo from "../../assets/figma-logo.svg";
import typescriptlogo from "../../assets/typescript-logo.svg";

export function Languages() {
  return (
    <div className="languages-container">
      <h1>
        Technologies <i class="ri-code-s-slash-line"></i>
      </h1>
      <ul className="languages-list">
        <li>
          <img src={htmllogo} alt="HTML" />

          <div className="scale five">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={csslogo} alt="CSS" />
          <div className="scale five">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={jslogo} alt="JS" />
          <div className="scale foor">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={sasslogo} alt="SASS" />
          <div className="scale five">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={reactlogo} alt="React" />
          <div className="scale foor">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={angularlogo} alt="Angular" />
          <div className="scale three">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={typescriptlogo} alt="TypeScript" />
          <div className="scale three">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={mysqllogo} alt="MySql" />
          <div className="scale three">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={nodelogo} alt="NodeJS" />
          <div className="scale three">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
        <li>
          <img src={figmalogo} alt="figma" />
          <div className="scale foor">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
