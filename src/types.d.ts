interface BasePoint {
  x: number;
  y: number;
}

type Point = BasePoint &
  (
    | {
        heading: "linear";
        deg: number;
      }
    | {
        heading: "constant";
        deg: number;
      }
    | {
        heading: "tangential";
        deg: number;
        reverse: boolean;
      }
  );

type ControlPoint = BasePoint;

interface Line {
  endPoint: Point;
  controlPoints: ControlPoint[];
  color: string;
}
