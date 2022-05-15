import React, { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryListItem } from "./EntryListItem";

import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status],
  );

  const handleDragDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const entry = entries.find((e) => e._id === id)!;

    entry.status = status;

    updateEntry(entry);
    endDragging();
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={isDragging ? styles.dragging : ""}
      onDragOver={allowDrop}
      onDrop={handleDragDrop}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "hidden",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all 0.3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryListItem key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
