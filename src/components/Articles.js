import React, { useState } from "react";
// style
import style from './Articles.module.css';

const DUMMY_DATA = [
  {
    id: 1,
    title: "magnam facilis autem",
    body:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi",
    body:
      "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
  },
];

const Articles = (props) => {
  const [data, setData] = useState(DUMMY_DATA);
  const [isDark, setIsDark] = useState(true);

  const darkMode = () => {
    if (isDark === true) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }

    props.toggleMode(isDark)
  }

  return ( 
    <React.Fragment>
      <div className={ style.button }>
        <button className={ isDark ? style.lightBtn : style.darkBtn } onClick={ darkMode } >CAMBIA</button>
      </div>
      <main>
        <ul className={ style.articles }>
          {
            data.map( el => (
              <li key={ el.id } className={ isDark ? style.lightLi : style.darkLi } >
                <h4 className={ isDark ? style.light : style.dark }>{ el.title }</h4>
                <div className={ isDark ? style.lightUnderline : style.darkUnderline }></div>
                <p className={ isDark ? style.light : style.dark }>{ el.body }</p>
              </li>
            ))
          }
        </ul>
      </main>
    </React.Fragment>
  );
}

export default Articles;