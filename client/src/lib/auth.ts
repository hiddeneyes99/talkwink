// Simple file-based authentication system
export interface AuthUser {
  username: string;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
  user?: AuthUser;
}

// Simulate reading from userinfo.txt file
let users: { [key: string]: string } = {};

// Initialize with some demo users
users['demo'] = 'password123';
users['testuser'] = 'test123';

export const signUp = async (username: string, password: string): Promise<AuthResponse> => {
  // Check if user already exists
  if (users[username]) {
    return { success: false, error: 'Username already exists' };
  }

  // Add new user
  users[username] = password;
  
  // In a real implementation, this would write to userinfo.txt
  console.log(`New user registered: ${username}:${password}`);
  
  return { 
    success: true, 
    user: { username } 
  };
};

export const signIn = async (username: string, password: string): Promise<AuthResponse> => {
  // Check if user exists and password matches
  if (!users[username]) {
    return { success: false, error: 'User not found' };
  }

  if (users[username] !== password) {
    return { success: false, error: 'Invalid password' };
  }

  return { 
    success: true, 
    user: { username } 
  };
};

export const getCurrentUser = (): AuthUser | null => {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
};

export const setCurrentUser = (user: AuthUser | null) => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};