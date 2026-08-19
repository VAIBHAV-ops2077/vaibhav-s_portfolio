import { Spread0 } from "./spreads/Spread0";
import { Spread1 } from "./spreads/Spread1";
import { Spread2 } from "./spreads/Spread2";
import { Spread3 } from "./spreads/Spread3";
import { Spread4 } from "./spreads/Spread4";
import { Spread5 } from "./spreads/Spread5";
import { Spread6 } from "./spreads/Spread6";
import { Spread7 } from "./spreads/Spread7";
import { Spread8 } from "./spreads/Spread8";
import { Spread9 } from "./spreads/Spread9";

interface Props {
  spreadIndex: number;
  side: "left" | "right";
}

const spreads = [Spread0, Spread1, Spread2, Spread3, Spread4, Spread5, Spread6, Spread7, Spread8, Spread9];

export function SpreadContent({ spreadIndex, side }: Props) {
  const Spread = spreads[spreadIndex];
  if (!Spread) return null;
  return <Spread side={side} />;
}
