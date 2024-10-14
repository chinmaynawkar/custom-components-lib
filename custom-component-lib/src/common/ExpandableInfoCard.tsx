import { useState } from 'react';
import { Box, Collapse, Link, Typography, Chip } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DocumentIcon from '@mui/icons-material/Description'; // Icon for the link
import theme from '../theme';

interface ExpandableInfoChipProps {
  icon: React.ReactNode;
  title: string;
  subtext: string;
  description: string;
  link: string; // URL for the action link
}

export default function ExpandableInfoChip({
  icon,
  title,
  subtext,
  description,
  link,
}: ExpandableInfoChipProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      {/* InfoChip Component */}
      <Chip
        label={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Left Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
              {icon}
            </Box>

            {/* Title and Subtext */}
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 400, lineHeight: 1 }}
              >
                {title}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {subtext}
              </Typography>
            </Box>

            {/* Chevron Icon - rotates based on 'expanded' state */}
            <ChevronRightIcon
              sx={{
                ml: '0.5rem',
                transition: 'transform 0.3s ease',
                transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate to downward
              }}
            />
          </Box>
        }
        onClick={handleToggle}
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          padding: 2,
          width: 'auto',
          height: 'auto',
          '& .MuiChip-label': {
            padding: 0,
          },
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      />

      {/* Collapsible Content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: 'background.paper', // Adjust based on your theme
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.divider}`,
            // boxShadow: theme.shadows[1],
          }}
        >
          {/* Title */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            {title}
          </Typography>

          {/* Description */}
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>

          {/* Link with Icon */}
          <Link
            href={link}
            target="_blank"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <DocumentIcon sx={{ mr: 0.5, mt: 0.25 }} />
            <Typography variant="body2">Discover the proof</Typography>
          </Link>
        </Box>
      </Collapse>
    </Box>
  );
}
