import { h } from 'preact';
import Feed from '../../components/feed';
import Socials from '../../components/socials';
import style from './style.css';
// how to make best landing page animation?

const Home = () => (
  <div class={style.home}>
    <div class={style.v}>
      <div class={style.container}>
        <span class={style.status}>current status</span>
        <h1>Under-development</h1>

        <p>
          meanwhile you can Follow me on 👉
          <a
            href='https://github.com/alwaz-shahid'
            target='_blank'
            alt='github working gif'
            rel='noopener noreferrer'
          >
            {' '}
            Github
          </a>
        </p>
      </div>
      <img src='https://media1.giphy.com/media/QX15lZJbifeQPzcNDt/giphy.gif?cid=790b7611cf18771eeffaaeb83afa1e85b6b8f82da0c7f8a7&rid=giphy.gif&ct=g' />
    </div>
    <Feed />
    <Socials />
  </div>
);

export default Home;
