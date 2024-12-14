import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const defaultListItemTextProps = {
    primaryTypographyProps: {
      fontSize: '1.0rem',
      color: '#555555',
    },
  };

  const interviewMeTextProps = {
    primaryTypographyProps: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#555555',
    },
  };

  const emojiStyle = {
    fontSize: '1.5rem',
    marginRight: '10px',
  };

  return (
    <Box
      sx={{
        width: '250px',
        height: '100%',
        backgroundColor: '#f5f5f5',
        padding: '10px',
        borderRight: '0px solid #ddd',
        margin: 0,
      }}
    >
      <List sx={{ padding: 0 }}>
        <ListItem
          component={Link}
          sx={{
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          <ListItemText primary="InterviewMe" {...interviewMeTextProps} />
        </ListItem>
        <ListItem
          component={Link}
          to="/chat"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          <span style={emojiStyle}>💬</span> {/* Chat Emoji */}
          <ListItemText primary="Chat" {...defaultListItemTextProps} />
        </ListItem>
        <ListItem
          component={Link}
          to="/mock-space"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          <span style={emojiStyle}>🎭</span> {/* MockSpace Emoji */}
          <ListItemText primary="MockSpace" {...defaultListItemTextProps} />
        </ListItem>
        <ListItem
          component={Link}
          to="/upload"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          <span style={emojiStyle}>📄</span>
          <ListItemText primary="Document Upload" {...defaultListItemTextProps} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
