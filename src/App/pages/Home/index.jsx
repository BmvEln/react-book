import React from 'react';
import Page from '../../components/layout/Page';
import MainLayout from '../../components/MainLayout';
import Header from '../Header';

function Home() {
  return (
    <Page key={'Home'}>
      <MainLayout />
      <Header />
    </Page>
  );
}

export default Home;
