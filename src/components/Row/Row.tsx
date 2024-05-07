import { PropsWithChildren } from "react";

function Row({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-x-1">{children}</div>;
}

export default Row;
