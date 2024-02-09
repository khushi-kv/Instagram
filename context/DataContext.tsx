import React, {createContext, useState, useContext} from 'react';
import profileData from '../data/profile.json';
import feedData from '../data/feed.json';

export interface Profile {
  filter(arg0: (post: any) => boolean): any;
  Profile: any;
  id: string;
  Url: string;
  Width: number;
  Height: number;
  caption: string;
  date: string;
  Username?: string;
}

export interface Feed {
  Title: string;
  Images: {
    Url: string;
    Width: number;
    Height: number;
  }[];
  Username: string;
  Date: string;
  Content: string;
}

export interface DataContextProps {
  profiles: {
    reduce(
      arg0: (
        foundPost: {
          id: string;
          Url: string;
          caption: string;
          date: string;
        } | null,
        profile: any,
      ) => any,
      arg1: null,
    ): unknown;
    map(arg0: (item: any, index: number) => React.JSX.Element): React.ReactNode;
    name: string;
    posts: number;
    followers: number;
    following: number;
    Profile: Profile[];
  };
  updateProfiles: (
    newProfiles: React.SetStateAction<{
      name: string;
      posts: number;
      followers: number;
      following: number;
      Profile: Profile[];
    }>,
  ) => void;
  setProfiles: React.Dispatch<
    React.SetStateAction<{
      name: string;
      posts: number;
      followers: number;
      following: number;
      Profile: Profile[];
    }>
  >;
  feeds: Feed[];
  updateFeeds: (newFeeds: React.SetStateAction<Feed[]>) => void;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined,
);

const DataProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [profiles, setProfiles] = useState(profileData);
  const [feeds, setFeeds] = useState(feedData);

  const updateProfiles = (
    newProfiles: React.SetStateAction<
      {
        name: string;
        posts: number;
        followers: number;
        following: number;
        Profile: Profile[];
      }[]
    >,
  ) => {
    setProfiles(newProfiles);
  };

  const updateFeeds = (newFeeds: React.SetStateAction<Feed[]>) => {
    setFeeds(newFeeds);
  };

  const contextValue: DataContextProps = {
    profiles,
    updateProfiles,
    setProfiles,
    feeds,
    updateFeeds,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export {DataProvider, useData};
