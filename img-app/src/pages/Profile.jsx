import React from 'react';
import { Card, CardContent, Typography, Avatar, Button } from '@mui/material';

// temp user
const user = {
  name: "John Smith",
  email: "john@example.com",
  bio: "Artist, creating art",
  profilePicture: "https://via.placeholder.com/150",
};

const UserProfile = () => {
  return (
    
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 5 }}>
      <CardContent>
        <Avatar
          alt={user.name}
          src={user.profilePicture}
          sx={{ width: 100, height: 100, margin: 'auto' }}
        />
        <Typography variant="h5" component="div" align="center" sx={{ marginTop: 2 }}>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {user.bio}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 3 }} fullWidth>
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfile;