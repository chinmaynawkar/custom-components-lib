import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch,
  Avatar,
  IconButton,
  Divider,
  Box,
  Button,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface ErpCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onToggle?: (checked: boolean) => void;
  isToggled?: boolean;
  onClick?: () => void;
  buttonText?: string;
}

export default function ErpCard(props: ErpCardProps) {
  const { icon, title, description, onToggle, isToggled, onClick, buttonText } =
    props;
  const [checked, setChecked] = useState(isToggled);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (onToggle) {
      onToggle(event.target.checked);
    }
  };
  return (
    <Card
      sx={{
        border: '1px solid',
        borderColor: 'secondary.300',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: 2,
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 80,
            height: 80,
            backgroundColor: 'transparent',
            border: '1.5px solid',
          }}
        >
          {icon}
        </Avatar>
        <IconButton
          size="small"
          color="primary"
          sx={{ alignSelf: 'flex-start' }}
        >
          <LaunchIcon />
        </IconButton>
      </Box>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {buttonText && (
          <Button variant="contained" size="small" onClick={onClick}>
            {buttonText}
          </Button>
        )}
        <Switch checked={checked} onChange={handleToggleChange} />
      </CardActions>
    </Card>
  );
}
