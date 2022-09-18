import { h } from 'preact';
import Feed from '../../components/feed';
import style from './style.css';
// how to make best landing page animation?

const Home = () => (
  <div class={style.home}>
    <div class={style.container}>
      {/* <p>Home is where the heart is</p> */}
      <h1>Under-development</h1>

      <p>
        Follow me on Github
        <a
          href='https://github.com/alwaz-shahid'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Alwaz Shahid
        </a>
      </p>
    </div>
    <Feed />
  </div>
);

export default Home;
