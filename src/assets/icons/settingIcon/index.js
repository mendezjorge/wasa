import Svg, { Path, Circle, Rect } from "react-native-svg";

export default function IconSetting({ fill }) {
  return (
    <Svg
      viewBox="0 0 56 34"
      width="56"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect fill="white" />
      <Path
        d="M19 26C19 21.0294 23.0294 17 28 17C32.9706 17 37 21.0294 37 26V27.1538C37 27.6212 36.6212 28 36.1538 28H19.8462C19.3788 28 19 27.6212 19 27.1538V26Z"
        stroke="#BCC5D7"
        stroke-width="1.5"
        fill={fill}
      />
      <Circle
        cx="28"
        cy="10.5"
        r="4.5"
        stroke="#BCC5D7"
        fill={"none"}
        stroke-width="1.5"
      />
    </Svg>
  );
}
