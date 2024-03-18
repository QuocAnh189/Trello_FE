//mui
import Box from "@mui/material/Box";

//component
import ListColumns from "./ListColumns/ListColumns";

//util
import { mapOrder } from "~/utils/sorts";

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        display: "flex",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        overflowX: "auto",
        overFlowY: "hidden",
      }}
    >
      <ListColumns columns={orderedColumns} />
    </Box>
  );
}

export default BoardContent;
