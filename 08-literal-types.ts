let direction: "north" | "south" | "east" | "west";
direction = "north"; 
// direction = "up"; => Error!


let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;


type SuccessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
