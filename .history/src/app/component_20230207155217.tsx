import { useEffect } from "react";

export default function Component() {
  useEffect(() => {
    return () => {
      console.log(1213213);
    };
  });
  return <div className="component">Component</div>;
}
