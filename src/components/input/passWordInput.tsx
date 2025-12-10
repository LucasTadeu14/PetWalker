import { useState } from "react";

function PasswordInput(){

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
        <span
          onClick={togglePassword}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>
  );
};

