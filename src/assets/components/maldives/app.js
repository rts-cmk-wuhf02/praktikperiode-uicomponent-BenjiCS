import React, {Component} from "react"; // eslint-disable-line no-unused-vars
// import "./maldives.js";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

class maldives extends Component {
  render() {
  return (
    <div
      className="Maldives__app"
      css={css`
        margin: 0;
        padding: 0;
        width: 372px;
        height: 550px;
        border-radius: 10px;
        background-color: white;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
      `}
    >
      <img
        src=""
        className="app__background"
        alt="Background"
        css={css`
          background-size: cover;
          background-repeat: no-repeat;
          width: 372px;
        `}
      ></img>
      <p
        className="app__subtitle"
        css={css`
          margin-top: 30px;
          font-family: "Roboto", sans-serif;
          letter-spacing: 2px;
          color: #33439b;
          font-weight: bold;
          font-size: 11px;
          margin-left: 30px;
        `}
      >
        {this.props.maldives_subTitle}
      </p>
      <h1
        className="app__title"
        css={css`
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          font-size: 28px;
          margin-left: 30px;
        `}
      >
        Loading
      </h1>
      <p
        className="app__desc"
        css={css`
          color: #7b8591;
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 16px;
          width: 291px;
          text-align: left;
          margin-left: 30px;
          height: 88px;
        `}
      >
        Loading
      </p>
    </div>
  )};
}

export default maldives;
