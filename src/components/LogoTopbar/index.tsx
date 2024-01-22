import img from "@assets/icon.svg";
import { useNavigate } from "react-router-dom";

export const LogoTopbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="absolute cursor-pointer"
      style={{ top: 20, left: 20 }}
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={img} alt="" style={{ borderRadius: 5, overflow: "hidden" }} />
    </div>
  );
};
