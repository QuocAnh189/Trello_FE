//mui
import Box from "@mui/material/Box";

//component
import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
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
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
