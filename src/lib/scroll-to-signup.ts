import { NavigateFunction } from "react-router-dom";

export const scrollToSignupSection = (navigate: NavigateFunction, currentPath: string) => {
  navigate("/signup");
};

