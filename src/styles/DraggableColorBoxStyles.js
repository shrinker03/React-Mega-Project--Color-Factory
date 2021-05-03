import chroma from 'chroma-js'
import sizes from './sizes'
const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        // marginTop: "0px",
        marginBottom: "-6px",
        "&:hover svg" : {
            color: "white",
            transform: "scale(1.2)"
        },
        [sizes.down("lg")] : {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")] : {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")] : {
            width: "100%",
            height: "5%",
        },
        overflow: "hidden"
    },
    boxContent: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        color: props => chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",

    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
};

export default styles;