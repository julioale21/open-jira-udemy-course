import React, { useContext, useState } from "react";

import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Box, Button, TextField } from "@mui/material";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    setIsAddingEntry(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            autoFocus
            fullWidth
            multiline
            error={inputValue.length <= 0 && touched}
            helperText={inputValue.length <= 0 && touched && "Add a new value"}
            label="New Entry"
            placeholder="New entry"
            sx={{ marginTop: 2, marginBottom: 1 }}
            value={inputValue}
            onBlur={() => setTouched(true)}
            onChange={handleInputChange}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancel
            </Button>
            <Button color="secondary" endIcon={<SaveIcon />} variant="outlined" onClick={onSave}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          startIcon={<AddCircleOutlineIcon />}
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Add new task
        </Button>
      )}
    </Box>
  );
};
