let users = [
  {
    id: 1,
    name: "Fathan",
    email: "fathan@example.com"
  },
  {
    id: 2,
    name: "Alex",
    email: "alex@example.com"
  }
];

let nextId = 3;

// Get all users
export const getAllUsers = () => {
  return users;
};

// Get user by ID
export const getUserById = (id) => {
  return users.find(user => user.id === id);
};

// Create user
export const createUser = (data) => {
  const newUser = {
    id: nextId++,
    name: data.name,
    email: data.email
  };

  users.push(newUser);

  return newUser;
};

// Update user
export const updateUser = (id, data) => {
  const user = users.find(user => user.id === id);

  if (!user) return null;

  user.name = data.name ?? user.name;
  user.email = data.email ?? user.email;

  return user;
};

// Delete user
export const deleteUser = (id) => {
  const user = users.find(user => user.id === id);

  if (!user) return null;

  users = users.filter(user => user.id !== id);

  return user;
};