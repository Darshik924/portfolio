import { useContext } from "react";
import { viewContxt } from "../App";
import type { viewProps } from "../db/Types.ts";

export const useView = () => {
  const contxt = useContext<viewProps | null>(viewContxt);

  if (!contxt) {
    throw new Error("View Contxt is undefined");
  }

  return contxt;
};
