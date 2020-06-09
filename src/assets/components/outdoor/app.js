import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import "./outdoor.js";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function app() {
  return (
    <div
      className="outdoor__app"
      css={css`
        grid-column: 2 / 4;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr 2fr 1fr;
        height: 500px;
        width: 1000px;
        background-color: white;
        padding: 25px;
        border-radius: 10px;
        margin: 0 10px;
      `}
    >
      <img
        src=""
        className="app__bigImage"
        alt="Background"
        css={css`
          background-size: cover;
          background-repeat: no-repeat;
          margin-right: 10px;
          height: 500px;
          width: 372px;
          grid-column: 1;
          grid-row: 1 / 4;
        `}
      ></img>
      <p
        className="app__label"
        css={css`
          font-family: "Roboto", sans-serif;
          letter-spacing: 2px;
          font-weight: bold;
          font-size: 14px;
          background: #005aee;
          color: white;
          width: 100px;
          padding: 18px;
          text-align: center;
          border-radius: 30px;
          grid-column: 4;
          grid-row: 1;
          margin-left: 60px;
        `}
      >
        LEISURE
      </p>
      <p
        className="app__title"
        css={css`
          font-family: "Roboto", sans-serif;
          letter-spacing: 2px;
          font-weight: bolder;
          font-size: 40px;
          border-radius: 30px;
          grid-column: 2 / 5;
          grid-row: 2;
        `}
      >
        Outdoor Experience
      </p>
      <p
        className="app__description"
        css={css`
          font-family: "Roboto", sans-serif;
          letter-spacing: 2px;
          font-weight: bold;
          font-size: 14px;
          border-radius: 30px;
          grid-column: 2 / 5;
          grid-row: 3;
          margin-right: 150px;
        `}
      >
        It’s windy. The cool breeze of the ocean. It gives, a sense of beauty,
        in motion. All is flowing, rushing and tide-And I sit in wonder,
        dreaming beside.
      </p>
      <img
        src=""
        className="app__smallImg1"
        alt="loading"
        css={css`
          grid-column: 2 / 5;
          grid-row: 4;
          background-size: cover;
          background-repeat: no-repeat;
          width: 140px;
          margin-left: 15px;
        `}
      ></img>
      <img
        src=""
        className="app__smallImg2"
        alt="loading"
        css={css`
          grid-column: 3 / 5;
          grid-row: 4;
          background-size: cover;
          background-repeat: no-repeat;
          width: 140px;
          margin-left: 15px;
        `}
      ></img>
      <img
        src=""
        className="app__smallImg3"
        alt="loading"
        css={css`
          grid-column: 4 / 5;
          grid-row: 4;
          background-size: cover;
          background-repeat: no-repeat;
          width: 140px;
          margin-left: 15px;
        `}
      ></img>
    </div>
  );
}

export default app;
