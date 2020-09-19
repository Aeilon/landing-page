import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Archivo, sans-serif;
scroll-behavior: smooth;

  @keyframes animate-circle {
    0% {
      opacity: 0;
      stroke-dashoffset: 315;
    }
    5% {
      opacity: 0.05;
      stroke-dashoffset: 304;
    }
    10% {
      opacity: 0.1;
      stroke-dashoffset: 293;
    }
    15% {
      opacity: 0.15;
      stroke-dashoffset: 282;
    }
    20% {
      opacity: 0.2;
      stroke-dashoffset: 271;
    }
    25% {
      opacity: 0.25;
      stroke-dashoffset: 260;
    }
    30% {
      opacity: 0.3;
      stroke-dashoffset: 249;
    }
    35% {
      opacity: 0.35;
      stroke-dashoffset: 238;
    }
    40% {
      opacity: 0.4;
      stroke-dashoffset: 227;
    }
    45% {
      opacity: 0.45;
      stroke-dashoffset: 216;
    }
    50% {
      opacity: 0.5;
      stroke-dashoffset: 205;
    }
    55% {
      opacity: 0.55;
      stroke-dashoffset: 194;
    }
    60% {
      opacity: 0.6;
      stroke-dashoffset: 183;
    }
    65% {
      opacity: 0.65;
      stroke-dashoffset: 172;
    }
    70% {
      opacity: 0.7;
      stroke-dashoffset: 161;
    }
    75% {
      opacity: 0.75;
      stroke-dashoffset: 150;
    }
    80% {
      opacity: 0.8;
      stroke-dashoffset: 139;
    }
    85% {
      opacity: 0.85;
      stroke-dashoffset: 128;
    }

    90% {
      opacity: 0.9;
      stroke-dashoffset: 122;
    }
    95% {
      opacity: 0.95;
      stroke-dashoffset: 118;
    }
    100% {
      opacity: 1;
      stroke-dashoffset: calc(315 - (315 * 63) / 100);
    }
  }
   @keyframes animate-circle1 {
      0% {
        opacity: 0;
        stroke-dashoffset: 377;
      }
      5% {
        opacity: 0.05;
        stroke-dashoffset: 358.8;
      }
      10% {
        opacity: 0.1;
        stroke-dashoffset: 340.6;
      }
      15% {
        opacity: 0.15;
        stroke-dashoffset: 322.4;
      }
      20% {
        opacity: 0.2;
        stroke-dashoffset: 304.2;
      }
      25% {
        opacity: 0.25;
        stroke-dashoffset: 286;
      }
      30% {
        opacity: 0.3;
        stroke-dashoffset: 267.8;
      }
      35% {
        opacity: 0.35;
        stroke-dashoffset: 249.6;
      }
      40% {
        opacity: 0.4;
        stroke-dashoffset: 231.4;
      }
      45% {
        opacity: 0.45;
        stroke-dashoffset: 213.2;
      }
      50% {
        opacity: 0.5;
        stroke-dashoffset: 195;
      }
      55% {
        opacity: 0.55;
        stroke-dashoffset: 176.8;
      }
      60% {
        opacity: 0.6;
        stroke-dashoffset: 158.6;
      }
      65% {
        opacity: 0.65;
        stroke-dashoffset: 140.4;
      }
      70% {
        opacity: 0.7;
        stroke-dashoffset: 122.2;
      }
      75% {
        opacity: 0.75;
        stroke-dashoffset: 104;
      }
      80% {
        opacity: 0.8;
        stroke-dashoffset: 85.8;
      }
      85% {
        opacity: 0.85;
        stroke-dashoffset: 75;
      }

      90% {
        opacity: 0.9;
        stroke-dashoffset: 67.6;
      }
      95% {
        opacity: 0.95;
        stroke-dashoffset: 58;
      }
      100% {
        opacity: 1;
        stroke-dashoffset: calc(377 - (377 * 87) / 100);
      }
    }
    @keyframes animate-circle2 {
      0% {
        opacity: 0;
        stroke-dashoffset: 565;
      }
      5% {
        opacity: 0.05;
        stroke-dashoffset: 540;
      }
      10% {
        opacity: 0.1;
        stroke-dashoffset: 515;
      }
      15% {
        opacity: 0.15;
        stroke-dashoffset: 490;
      }
      20% {
        opacity: 0.2;
        stroke-dashoffset: 465;
      }
      25% {
        opacity: 0.25;
        stroke-dashoffset: 440;
      }
      30% {
        opacity: 0.3;
        stroke-dashoffset: 415;
      }
      35% {
        opacity: 0.35;
        stroke-dashoffset: 390;
      }
      40% {
        opacity: 0.4;
        stroke-dashoffset: 365;
      }
      45% {
        opacity: 0.45;
        stroke-dashoffset: 340;
      }
      50% {
        opacity: 0.5;
        stroke-dashoffset: 315;
      }
      55% {
        opacity: 0.55;
        stroke-dashoffset: 290;
      }
      60% {
        opacity: 0.6;
        stroke-dashoffset: 265;
      }
      65% {
        opacity: 0.65;
        stroke-dashoffset: 240;
      }
      70% {
        opacity: 0.7;
        stroke-dashoffset: 215;
      }
      75% {
        opacity: 0.75;
        stroke-dashoffset: 190;
      }
      80% {
        opacity: 0.8;
        stroke-dashoffset: 165;
      }
      85% {
        opacity: 0.85;
        stroke-dashoffset: 152.5;
      }

      90% {
        opacity: 0.9;
        stroke-dashoffset: 140;
      }
      95% {
        opacity: 0.95;
        stroke-dashoffset: 126;
      }
      100% {
        opacity: 1;
        stroke-dashoffset: calc(565 - (565 * 80) / 100);
      }
    }
     @keyframes animate-circle3 {
      0% {
        opacity: 0;
        stroke-dashoffset: 754;
      }
      5% {
        opacity: 0.05;
        stroke-dashoffset: 725;
      }
      10% {
        opacity: 0.1;
        stroke-dashoffset: 696;
      }
      15% {
        opacity: 0.15;
        stroke-dashoffset: 667;
      }
      20% {
        opacity: 0.2;
        stroke-dashoffset: 638;
      }
      25% {
        opacity: 0.25;
        stroke-dashoffset: 609;
      }
      30% {
        opacity: 0.3;
        stroke-dashoffset: 580;
      }
      35% {
        opacity: 0.35;
        stroke-dashoffset: 551;
      }
      40% {
        opacity: 0.4;
        stroke-dashoffset: 522;
      }
      45% {
        opacity: 0.45;
        stroke-dashoffset: 493;
      }
      50% {
        opacity: 0.5;
        stroke-dashoffset: 464;
      }
      55% {
        opacity: 0.55;
        stroke-dashoffset: 435;
      }
      60% {
        opacity: 0.6;
        stroke-dashoffset: 406;
      }
      65% {
        opacity: 0.65;
        stroke-dashoffset: 377;
      }
      70% {
        opacity: 0.7;
        stroke-dashoffset: 348;
      }
      75% {
        opacity: 0.75;
        stroke-dashoffset: 319;
      }
      80% {
        opacity: 0.8;
        stroke-dashoffset: 290;
      }
      85% {
        opacity: 0.85;
        stroke-dashoffset: 276;
      }

      90% {
        opacity: 0.9;
        stroke-dashoffset: 261;
      }
      95% {
        opacity: 0.95;
        stroke-dashoffset: 243;
      }
      100% {
        opacity: 1;
        stroke-dashoffset: calc(754 - (754 * 70) / 100);
      }
    }
}
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
