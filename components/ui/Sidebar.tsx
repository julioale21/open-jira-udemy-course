import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open={true}
        onClose={() => console.log('cerrando ...')}
    >
        <Box sx={{ width: '250px'}}>
          <Box sx={{ padding: '5px 10px'}}>
              <Typography variant='h4'>Menú</Typography>
          </Box>

          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>

    </Drawer>
  )
}

export { Sidebar }