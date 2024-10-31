// SnackbarProvider.js
import React, { createContext, useContext, useState } from 'react';
import { Snackbar } from '@mui/material';

const SnackbarContext = createContext();

export const SnackarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const showSnackbar = (msg) => {
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar
        open={open}
        onClose={handleClose}
        message={message}
        autoHideDuration={3000} // Snackbar will automatically hide after 3 seconds
      />
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
