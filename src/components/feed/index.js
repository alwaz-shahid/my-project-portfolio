import style from './style.css';
import { useEffect } from 'preact/hooks';
export default function Feed() {
  useEffect(() => {
    console.log(style.line, style.linetop);
  });

  return (
    <div class={style.sitewrapper}>
      <div class={style.title}>
        <h2>
          Alwaz Shahid
          <span>Alwaz Shahid</span>
          <span>Alwaz Shahid</span>
          <span>Front-End Web Developer</span>
        </h2>
      </div>

      <div class={style.itemwrapper}>
        <div class={`${style.line} ${style.linetop}`}>
          <span />
        </div>
        <div class={`${style.line} ${style.lineright}`}>
          <span />
        </div>
        <div class={`${style.line} ${style.linebottom}`}>
          <span />
        </div>
        <div class={`${style.line} ${style.lineleft}`}>
          <span />
        </div>

        <div class={style.item}>
          <h2>
            New
            <br />
            Ideas
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </div>
      </div>
    </div>
  );
}
