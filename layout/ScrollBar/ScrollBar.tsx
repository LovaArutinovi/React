import { ReactNode } from "react";
import { Scrollbars } from "react-custom-scrollbars";

interface ScrollBarProps {
  children: ReactNode;
}
const ScrollBar = ({ children }: ScrollBarProps) => {
  return (
    <Scrollbars
      autoHide={false}
      autoHeight={true}
      autoHeightMin={"100vh"}
      autoHeightMax={"100vh"}
      renderTrackHorizontal={(props) => (
        <div {...props} className="track-horizontal" />
      )}
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbHorizontal={(props) => (
        <div {...props} className="thumb-horizontal" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => <div {...props} className="view" />}
    >
      {children}
    </Scrollbars>
  );
};
export default ScrollBar;
