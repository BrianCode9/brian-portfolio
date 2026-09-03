// Geometry and netlist for the hero's full adder schematic.
//   S    = A xor B xor Cin
//   Cout = (A and B) or (Cin and (A xor B))
// Gates are 48 wide and 52 tall, drawn from their top-left corner. Input pins
// sit at y+11 and y+41, the output pin at y+26.

export type NodeId = "a" | "b" | "cin" | "x1" | "n1" | "n2" | "s" | "cout";
export type GateKind = "and" | "or" | "xor";

export interface Gate {
  id: string;
  kind: GateKind;
  x: number;
  y: number;
}

export interface Wire {
  id: string;
  node: NodeId;
  d: string;
  // Gate stages from the inputs. Drives the transition delay, so a change
  // ripples left to right the way a real carry chain settles.
  depth: number;
}

export interface Junction {
  node: NodeId;
  cx: number;
  cy: number;
  depth: number;
}

export const VIEW_BOX = "0 0 560 230";

// Path index 0 is the filled body; any others are stroke-only decoration.
export const gatePaths: Record<GateKind, string[]> = {
  and: ["M0,0 H22 A26,26 0 0 1 22,52 H0 Z"],
  or: ["M0,0 Q30,2 48,26 Q30,50 0,52 Q14,26 0,0 Z"],
  xor: ["M6,0 Q33,2 48,26 Q33,50 6,52 Q20,26 6,0 Z", "M0,0 Q14,26 0,52"],
};

export const gates: Gate[] = [
  { id: "xor1", kind: "xor", x: 140, y: 29 },
  { id: "and1", kind: "and", x: 140, y: 120 },
  { id: "xor2", kind: "xor", x: 270, y: 44 },
  { id: "and2", kind: "and", x: 270, y: 145 },
  { id: "or1", kind: "or", x: 400, y: 112 },
];

export const wires: Wire[] = [
  { id: "a-xor1", node: "a", d: "M30,40 H140", depth: 0 },
  { id: "a-and1", node: "a", d: "M104,40 V131 H140", depth: 0 },
  { id: "b-xor1", node: "b", d: "M30,70 H140", depth: 0 },
  { id: "b-and1", node: "b", d: "M120,70 V161 H140", depth: 0 },
  { id: "cin-and2", node: "cin", d: "M30,186 H270", depth: 0 },
  { id: "cin-xor2", node: "cin", d: "M250,186 V85 H270", depth: 0 },
  { id: "x1-xor2", node: "x1", d: "M188,55 H270", depth: 1 },
  { id: "x1-and2", node: "x1", d: "M212,55 V156 H270", depth: 1 },
  { id: "n1-or", node: "n1", d: "M188,146 H370 V123 H400", depth: 1 },
  { id: "n2-or", node: "n2", d: "M318,171 H370 V153 H400", depth: 2 },
  { id: "s-out", node: "s", d: "M318,70 H494", depth: 2 },
  { id: "cout-out", node: "cout", d: "M448,138 H494", depth: 3 },
];

export const junctions: Junction[] = [
  { node: "a", cx: 104, cy: 40, depth: 0 },
  { node: "b", cx: 120, cy: 70, depth: 0 },
  { node: "cin", cx: 250, cy: 186, depth: 0 },
  { node: "x1", cx: 212, cy: 55, depth: 1 },
];

export interface PinLabel {
  node: NodeId;
  text: string;
  x: number;
  y: number;
  anchor: "start" | "end";
  depth: number;
}

export const pinLabels: PinLabel[] = [
  { node: "a", text: "A", x: 22, y: 45, anchor: "end", depth: 0 },
  { node: "b", text: "B", x: 22, y: 75, anchor: "end", depth: 0 },
  { node: "cin", text: "Cin", x: 22, y: 191, anchor: "end", depth: 0 },
  { node: "s", text: "S", x: 502, y: 75, anchor: "start", depth: 2 },
  { node: "cout", text: "Cout", x: 502, y: 143, anchor: "start", depth: 3 },
];

export const COMBO_COUNT = 8;
export const STAGE_DELAY_MS = 160;

/** Evaluates every node for one of the eight A/B/Cin combinations. */
export function computeLevels(step: number): Record<NodeId, 0 | 1> {
  const a = ((step >> 2) & 1) as 0 | 1;
  const b = ((step >> 1) & 1) as 0 | 1;
  const cin = (step & 1) as 0 | 1;
  const x1 = (a ^ b) as 0 | 1;
  const n1 = (a & b) as 0 | 1;
  const n2 = (x1 & cin) as 0 | 1;
  return {
    a,
    b,
    cin,
    x1,
    n1,
    n2,
    s: (x1 ^ cin) as 0 | 1,
    cout: (n1 | n2) as 0 | 1,
  };
}
