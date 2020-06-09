import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Maladives from './assets/components/maldives/app';
import Outdoor from './assets/components/outdoor/app';
import Ontime from './assets/components/ontime/app';
import Offthegrid from './assets/components/offthegrid/app'; // eslint-disable-line no-unused-vars
// import Mustsee from './assets/components/mustsee/app'; // eslint-disable-line no-unused-vars
// import Latestnews from './assets/components/latestnews/app'; // eslint-disable-line no-unused-vars
// import Food from './assets/components/food/app'; // eslint-disable-line no-unused-vars
// import Tecture from './assets/components/tecture/app'; // eslint-disable-line no-unused-vars
// import Visual from './assets/components/visual/app'; // eslint-disable-line no-unused-vars
// import Readmore from './assets/components/readmore/app'; // eslint-disable-line no-unused-vars


import * as serviceWorker from './serviceWorker';

// eslint-disable-line no-unused-vars

ReactDOM.render(
  <React.StrictMode>
    <Maladives  subTitle="TRAVEL"/>
    <Outdoor/>
    <Ontime class="Ontime" bgcolor="#005AEE" contentEntryId="4OBlxtcyCiwM3eoAW1zKEn" assetId="4ctcdy1NAS9YODyoUwI6Da" />
    <Ontime class="Parcel" bgcolor="#FFA767" contentEntryId="5aVkrVLAI1VoJq5CrFsg3Q" assetId="0kkm7yHqZgvsTIMvxDeS6"/>
    <Ontime class="Quality" bgcolor="#0AACDC" contentEntryId="3fIc8vWRjt81QTVvxcZPeT" assetId="2Ps2HKWKvTSXiqsj91uHjD"/>
    <Ontime class="Customer" bgcolor="#597AEF" contentEntryId="30DkLWFskBU5Bqf9NCK7mZ" assetId="3wIaYbI6P1VMqIx6gjJ8VU"/>
    <Offthegrid class="Offthegrid" contentEntryId="5TJ5ahjDVdFnJwBJEy8GXW" assetId="5gqrYiKWOAmFVnDug3iUTa" profileId="3GLh7sDfu0IthplvsLTTYe"/>
    <Offthegrid class="Fashion" contentEntryId="MZkCHZze5Fy1d2q3EPHpV" assetId="1uL9OOR75wsUWoHEJXtfiE" profileId="h9ChKCQKUMmXKjYvMNqTz"/>
    <Offthegrid class="Arch" contentEntryId="13nMGrjwThjdG1NTa9O9Qr" assetId="4WUCuRvu8vYEpnLPsz5RQ3" profileId="3yZ1mVGo8w5U6iSmVtft7f"/>
    {/*<Mustsee/>
    <Latestnews/>
    <Food/>
    <Tecture/>
    <Visual/>
    <Readmore/> */ }
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
