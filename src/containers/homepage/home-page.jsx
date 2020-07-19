import React from 'react';
import styles from './home-page.module.scss';
import Header from '../../components/UI/header/header'
import Story from '../../components/UI/story/story'
import Steps from '../../components/UI/steps/steps' 
import Menu from '../../components/UI/menu/menu'
import Cta from '../../components/UI/cta/cta'
import Features from '../../components/UI/features/features'
import Footer from '../../components/UI/footer/footer'
function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header/>
      <Story/>
      <Steps/>
      <Menu/>
      <Features/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default HomePage;