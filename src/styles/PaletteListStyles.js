import sizes from './sizes';
import background from './background.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "@global": {
        ".fade-exit" : {
            opacity: 1
        },
        ".fade-exit-active" : {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        display: "flex",
        height: "100vh",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#cf4a1e",
        backgroundImage: `url(${background})`,
        overflow: "scroll",
        overflowX: "hidden"
    },
    heading: {
        fontSize: "2rem",
        [sizes.down("sm")] : {
            fontSize: "1rem"
        }
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("lg")] : {
            width: "60%"
        },
        [sizes.down("md")] : {
            width: "55%"
        },
        [sizes.down("xs")] : {
            width: "50%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a" : {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")] : {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")] : {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1rem"
        }
    }
};