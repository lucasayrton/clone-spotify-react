import React from "react";

import { Spinner } from "./styles";

const Loading = () => (
  <Spinner>
    <svg
      width="20px"
      height="21px"
      viewBox="0 0 20 21"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M5.87 16.415c0 .781-.636 1.429-1.428 1.429a1.439 1.439 0 0 1-1.429-1.429c0-.792.648-1.428 1.429-1.428.792 0 1.429.636 1.429 1.428zm5.559 2.3c0 .792-.637 1.428-1.429 1.428a1.424 1.424 0 0 1-1.429-1.429c0-.792.637-1.428 1.429-1.428s1.429.636 1.429 1.428zM3.57 10.856c0 .793-.636 1.429-1.428 1.429a1.424 1.424 0 0 1-1.429-1.429c0-.792.636-1.428 1.429-1.428.792 0 1.428.636 1.428 1.428zm13.416 5.558c0 .781-.648 1.429-1.429 1.429a1.431 1.431 0 0 1-1.429-1.429c0-.792.637-1.428 1.43-1.428.78 0 1.428.636 1.428 1.428zM6.227 5.3c0 .982-.803 1.786-1.785 1.786a1.791 1.791 0 0 1-1.786-1.786c0-.982.804-1.786 1.786-1.786s1.786.804 1.786 1.786zm13.059 5.558c0 .793-.636 1.429-1.429 1.429a1.424 1.424 0 0 1-1.428-1.429c0-.792.636-1.428 1.428-1.428.793 0 1.429.636 1.429 1.428zM12.143 3a2.143 2.143 0 1 1-4.287-.001A2.143 2.143 0 0 1 12.143 3zm5.915 2.3c0 1.383-1.127 2.5-2.5 2.5a2.496 2.496 0 0 1-2.5-2.5c0-1.374 1.116-2.5 2.5-2.5a2.51 2.51 0 0 1 2.5 2.5z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  </Spinner>
);

export default Loading;
