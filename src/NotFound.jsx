import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import notFoundAnimation from "./assets/Lonely 404.lottie";

export default function NotFound() {
  return <DotLottieReact src={notFoundAnimation} loop autoplay />;
}
