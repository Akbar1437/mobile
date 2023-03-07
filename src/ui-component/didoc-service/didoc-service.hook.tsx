import {useContext} from 'react';
import {DidocServiceContext} from './didoc-service.context';

export function useDidocService() {
  return useContext(DidocServiceContext);
}
