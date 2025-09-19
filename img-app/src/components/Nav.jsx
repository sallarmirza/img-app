import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Typography,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  History as HistoryIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
  Search as SearchIcon,
  Star as StarIcon,
  AutoAwesome as AutoAwesomeIcon,
} from '@mui/icons-material';

const drawerWidth = 320;

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample prompt history data
  const promptHistory = [
    { id: 1, text: 'A futuristic cityscape at night', date: '2 hours ago', favorite: true },
    { id: 2, text: 'Portrait of a cyberpunk samurai', date: 'Yesterday', favorite: false },
    { id: 3, text: 'Fantasy landscape with floating islands', date: '2 days ago', favorite: true },
    { id: 4, text: 'Abstract geometric patterns in blue', date: '3 days ago', favorite: false },
    { id: 5, text: 'Vintage steampunk airship', date: '1 week ago', favorite: true },
  ];

  const filteredPrompts = promptHistory.filter((prompt) =>
    prompt.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const DrawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header with Logo */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
        <AutoAwesomeIcon sx={{ mr: 1.5, fontSize: 28, color: 'primary.main' }} />
        <Typography variant="h5" noWrap sx={{ fontWeight: 700, color: 'text.primary' }}>
          PicMagic
        </Typography>
        <Chip
          icon={<StarIcon />}
          label="Pro"
          size="small"
          sx={{ ml: 1.5, backgroundColor: 'warning.light', color: 'white', fontWeight: 600 }}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Search Bar */}
      <Box sx={{ px: 2, mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search prompts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'grey.50',
            },
          }}
        />
      </Box>

      {/* Recent Prompts */}
      <Box sx={{ px: 2, mb: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
          RECENT PROMPTS
        </Typography>
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto', px: 1.5 }}>
        {filteredPrompts.map((prompt) => (
          <ListItem key={prompt.id} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                py: 1.5,
                backgroundColor: 'grey.50',
                '&:hover': { backgroundColor: 'grey.100' },
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, flex: 1, pr: 1 }}>
                    {prompt.text}
                  </Typography>
                  <IconButton size="small" sx={{ color: prompt.favorite ? 'warning.main' : 'grey.400' }}>
                    <StarIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {prompt.date}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* User Section */}
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: 'success.main',
                  border: '2px solid white',
                }}
              />
            }
          >
            <Avatar alt="User" src="/static/images/avatar/2.jpg" sx={{ width: 44, height: 44, mr: 2 }} />
          </Badge>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" fontWeight="medium">
              Alex Johnson
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Premium Plan
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: 'grey.500' }} onClick={() => navigate('/logout')}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsOpen(true)}
        edge="start"
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1300,
          display: { xs: 'block', md: 'none' },
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': { backgroundColor: 'primary.dark' },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            border: 'none',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
          },
        }}
        open
      >
        {DrawerContent}
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {DrawerContent}
      </Drawer>
    </>
  );
};
