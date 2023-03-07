import {createContext} from 'react';

export type DidocServiceContextType = {
  serviceEndpoint:
    | string
    | {
        origins: string[];
      };
};

export const DidocServiceContext = createContext<DidocServiceContextType>({
  serviceEndpoint: '',
});
