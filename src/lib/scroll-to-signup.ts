import { NavigateFunction } from "react-router-dom";

export const scrollToSignupSection = (navigate: NavigateFunction, currentPath: string) => {
  const scrollWithinPage = () => {
    const target = document.getElementById("signup-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (currentPath === "/pricing") {
    scrollWithinPage();
  } else {
    navigate("/pricing#signup-form");
  }
};

