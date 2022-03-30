export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || "Invalid Input";
  }
}
type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];
export class Robot {
  cord: Coordinates = [0, 0];
  direction: Direction = "north";
  get bearing(): Direction {
    return this.direction;
  }
  get coordinates(): Coordinates {
    return this.cord;
  }
  place(r: { x: number; y: number; direction: string }) {
    if ((r.direction as string) == "north" || (r.direction as string) == "east" || (r.direction as string) == "south" || (r.direction as string) == "west") this.direction = r.direction as Direction;
    else throw new InvalidInputError("not found");
    this.cord = [r.x, r.y];
  }
  evaluate(instructions: string) {
    for (const letter of instructions) {
      if (letter == "R") this.direction = turn(this.direction as string, false);
      else if (letter == "L") this.direction = turn(this.direction as string, true);
       else {
        if ((this.direction as string) == "north") this.coordinates[1] += 1;
        else if ((this.direction as string) == "south") this.coordinates[1] -= 1;
        else if ((this.direction as string) == "east") this.coordinates[0] += 1;
        else if ((this.direction as string) == "west") this.coordinates[0] -= 1;
      }
    }
  }
}
function turn(direction: string, isLeft:boolean): Direction {
  if ((direction == "north" && !isLeft) || (direction == "south" && isLeft)) return "east" as Direction;
  if ((direction == "east" && !isLeft) || (direction == "west" && isLeft)) return "south" as Direction;
  if ((direction == "south" && !isLeft) || (direction == "north" && isLeft)) return "west" as Direction;
  return "north" as Direction;
}
