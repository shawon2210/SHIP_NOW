import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  name: string;
  role: string;
  email: string;
  avatar: string;
}

interface UserContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
}

const defaultUser: User = {
  name: 'Shawon',
  role: 'Admin',
  email: 'shawon@shipnow.com',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRVQVEt93H96ZZ4gu9zsJcy2IAsI6svFknTvtYlMb3XQzAnY14sATkArolnWAsj-BAz0NR6u3pzEO__Js4h9Smhkaffkrh9APKf0biw1hL-OwbaTMsxORPcYROWXTh8TST1gWNtetIyuG_NRaB9aIoQU60_4x6rZ78pDkdvJl1HKt0q5KFKXzZZOuBvxlkoMJ-lVa7pqUu7PD1UK4uP6CciE_6m9D8kqTpyCiiulRrCYdEDcRdxxa3',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
