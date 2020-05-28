import React from 'react';
import Clients from '../clients/Clients';
import Slidebar from './Sidebar';

export default function Dashboard() {
  return (
    <div className='row'>
      <div className='col-md-10 col-lg-10'>
        <Clients></Clients>
      </div>
      <div className='col-md-2 col-lg-2'>
        <Slidebar></Slidebar>
      </div>
    </div>
  );
}
