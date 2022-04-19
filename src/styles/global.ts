import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import "~react-image-gallery/styles/css/image-gallery.css";

* {
    box-sizing: border-box;
}

html {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    /* color: #181818; */
    color: #6e6b7b;
    letter-spacing: 0.01rem;
}
`;
