import styled from "styled-components";
import { adventPro } from "../fonts";
import { colors } from "../styles/colors"

export const NotAuthorized = styled.main`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url("/images/BG-Homepage.jpg");

    & h1 {
        margin: 0;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: ${adventPro.style.fontFamily};
        font-size: 4.5rem;
        color: ${colors.commom.white}
    }
`