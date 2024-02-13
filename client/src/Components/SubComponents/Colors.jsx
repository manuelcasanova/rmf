import brushWhite from "../../images/brush-white.png";
import brush from "../../images/brush.png";

export default function Colors({ color, setColor }) {
  const toggleColors = () => {
    setColor(color === "black" ? "white" : "black");
  };

  return (
    <div>
      <img
        className="brush"
        src={color === "black" ? brushWhite : brush}
        alt="Brush"
        onClick={toggleColors}
      />

      {color !== "black" && (
        <div className="colors">
          <div
            className="color black white-line"
            onClick={() => setColor("black")}
          ></div>
          <div
            className="color white black-line"
            onClick={() => setColor("white")}
          ></div>
          <div
            className="color pink black-line"
            onClick={() => setColor("pink")}
          ></div>
          <div
            className="color blue black-line"
            onClick={() => setColor("blue")}
          ></div>
          <div
            className="color green black-line"
            onClick={() => setColor("green")}
          ></div>
          <div
            className="color red black-line"
            onClick={() => setColor("red")}
          ></div>
        </div>
      )}
    </div>
  );
}
