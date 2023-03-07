import React, {ReactNode, useEffect, useState} from 'react';
import {useWallet} from '../wallet';
import {DidocServiceContext} from './didoc-service.context';

export function DidocServiceProvider(props: {children: ReactNode}) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const {coreServices} = useWallet();

  const [getService, setGetService] = useState<
    | string
    | {
        origins: string[];
      }
  >('');

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    getDidocService();
  }, []);

  // ---------------------------------------------------------------------------
  // function
  // ---------------------------------------------------------------------------

  async function getDidocService() {
    // if (!coreServices) return;
    // const did = 'did:itn:JiwgkcbsPMbBS6KdB8qfgY';
    // const didDoc = await coreServices.resolveDIDDoc(did);
    // if (!didDoc || !didDoc.service) throw new Error('Didoc not found');

    // const res = didDoc.service.find(item => item.type === 'SignUp');

    // if (res) {
    //   setGetService(res.serviceEndpoint);
    // }

    const response = await fetch(`http://localhost:8080/get-service-endpoint`);

    const {endpoint} = await response.json();
    setGetService(endpoint);
  }

  // ---------------------------------------------------------------------------
  return (
    <DidocServiceContext.Provider value={{serviceEndpoint: getService}}>
      {props.children}
    </DidocServiceContext.Provider>
  );
}
