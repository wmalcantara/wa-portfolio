import Link from 'next/link';
import { motion } from 'framer-motion';

import { variants } from '../services/motion';
const { bgPhoto } = variants;

import Typewriter from '../components/Typewriter'
import SocialNet from '../components/SocialNet';

import {
  HomeContainer,
  HomeContent
} from '../styles/pages/Home';

export default function Index() {
  return (
    <HomeContainer>
      <HomeContent>
        {/* <motion.div
          className="bg-image"
          initial="hidden"
          animate="visible"
          variants={bgPhoto}
        /> */}


        <div className="hello">
          <Typewriter>Olá, me chamo Walter Alcantara.</Typewriter>


          <Link href="/about">Saiba mais</Link>

          <div className="social-box">
            <SocialNet />
          </div>
        </div>

        <div className="bg">
          <img src="./assets/img/home-background.png" />
        </div>
      </HomeContent>
    </HomeContainer>
  );
}
