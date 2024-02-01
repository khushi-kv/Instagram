import React, { createContext, useState, useContext } from 'react';
import profiledata from "../data/profile.json";

interface DataContextProps {
  data: {
    name: string;
    posts: number;
    followers: number;
    following: number;
    Profile: ({
      id: string;
      Url: string;
      Width: number;
      Height: number;
      caption: string;
      date: string;
      Username?: undefined;
    } | {
      id: string;
      Url: string;
      Width: number;
      Height: number;
      Username: string;
      caption: string;
      date: string;
    })[];
  }[];
  updateData: (newData: React.SetStateAction<{
    name: string;
    posts: number;
    followers: number;
    following: number;
    Profile: ({
      id: string;
      Url: string;
      Width: number;
      Height: number;
      caption: string;
      date: string;
      Username?: undefined;
    } | {
      id: string;
      Url: string;
      Width: number;
      Height: number;
      Username: string;
      caption: string;
      date: string;
    })[];
  }[]>) => void;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState(profiledata);

  const updateData = (newData: React.SetStateAction<{
    name: string;
    posts: number;
    followers: number;
    following: number;
    Profile: ({
      id: string;
      Url: string;
      Width: number;
      Height: number;
      caption: string;
      date: string;
      Username?: undefined;
    } | {
      id: string;
      Url: string;
      Width: number;
      Height: number;
      Username: string;
      caption: string;
      date: string;
    })[];
  }[]>) => {
    setData(newData);
  };
  const contextValue: DataContextProps = { data, updateData, setData };
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useData };
