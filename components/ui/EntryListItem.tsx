import React, { useContext } from "react";

import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";

interface Props {
  entry: Entry;
}

export const EntryListItem: React.FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const handleDragEnd = () => {
    endDragging();
  };

  return (
    <Card
      draggable
      sx={{ marginBottom: 1 }}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
