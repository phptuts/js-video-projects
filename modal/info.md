## Modal Lesson

In this lesson we'll be modal with HTML, CSS, and javascript.

00:00 Demo
00:14 Base HTML For Non Modal

```html
<main>
  <h1>Modal Demo</h1>
  <p><button>Show Modal</button></p>
</main>
<div id="background-cover"></div>
```

01:36 Base CSS for Non Modal

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

body {
  font-family: 'Noto Sans JP', sans-serif;
}

main {
  width: 80%;
  height: 95%;
  position: absolute;
  top: 5%;
  left: 10%;
}

h1 {
  text-align: center;
  font-size: 3em;
}

button {
  width: 100%;
  outline: none;
  font-size: 2em;
  cursor: pointer;
}
```

02:58 Background Blur CSS

```css
main.blur {
  filter: blur(4px);
}

#background-cover {
  background-color: rgb(145, 145, 145);
  opacity: 0.7;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  cursor: pointer;
}
```

03:52 Modal HTML

```html
<div class="modal">
  <span class="close">x</span>
  <div class="modal-head">
    <h2>Title</h2>
  </div>
  <div class="modal-content">
    <p>This is example text</p>
  </div>
</div>
```

04:09 CSS Modal
11:36 Javascript

```js
const buttonEl = document.querySelector('button');
const mainEl = document.querySelector('main');
const modalEl = document.querySelector('.modal');
const closeEl = document.querySelector('.close');
const backgroundCoverEl = document.querySelector('#background-cover');
```

17:57 Finish Modal
