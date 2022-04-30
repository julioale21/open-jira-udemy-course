import React, { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryListItem } from "./EntryListItem";

import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status],
  );

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryListItem key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
