import { div } from "framer-motion/client";
import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
      <div className="container-px">
      <div
      className="elfsight-app-3e17eeea-d54e-4f66-aa19-6a343703ce85"
      data-elfsight-app-lazy
    />
    </div>
  );
};

export default ElfsightWidget;