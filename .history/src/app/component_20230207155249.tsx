import { log } from "console";
import { useEffect } from "react";

export default function Component() {
  useEffect(() => {
    log(9999);
    return () => {
      console.log(1213213);
    };
  });
  return <div className="component">Component</div>;
}
