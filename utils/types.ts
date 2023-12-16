type FeelEntry = {
    [key: string]: number;
  };
  
  type Feel = {
    [key: string]: FeelEntry;
  };
  
  type Preferences = {
    [key: string]: number;
  };
  
  type Result = {
    date: string[];
    emotion: string[];
    song_id: number[];
    thumbnail: string[];
    title: string[];
    views: number[];
  };
  
  type DataStructure = {
    feel: Feel;
    pref: Preferences;
    result: Result;
  };
  