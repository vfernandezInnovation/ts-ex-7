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
    switch(r.direction) { 
      case "north": { 
         this.direction = r.direction as Direction
         break; 
      } 
      case "east": { 
         this.direction = r.direction as Direction 
         break; 
      } 
      case "south": { 
        this.direction = r.direction as Direction 
        break; 
      }
      case "west": { 
        this.direction = r.direction as Direction 
        break; 
      }  
      default: { 
        throw new InvalidInputError("not found");        
      } 
   } 
    this.cord = [r.x, r.y];
  }
  evaluate(instructions: string) {
    for (const letter of instructions) {
      if (letter == "R") this.direction = turnR(this.direction as string);
      else if (letter == "L") this.direction = turnL(this.direction as string);
       else {
        if ((this.direction as string) == "north") this.coordinates[1]++;
        else if ((this.direction as string) == "south") this.coordinates[1]--;
        else if ((this.direction as string) == "east") this.coordinates[0]++;
        else if ((this.direction as string) == "west") this.coordinates[0]--;
      }
    }
  }
}
function turnR(direction: string): Direction {
  if ((direction == "north")) return "east" as Direction;
  if ((direction == "east")) return "south" as Direction;
  if ((direction == "south")) return "west" as Direction;
  return "north" as Direction;
}
function turnL(direction: string): Direction {
  if ((direction == "south")) return "east" as Direction;
  if ((direction == "west")) return "south" as Direction;
  if ((direction == "north")) return "west" as Direction;
  return "north" as Direction;
}
