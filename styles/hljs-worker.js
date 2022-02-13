importScripts('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js');
onmessage = (ev) => {
  const {id, innerText, language} = ev.data;
  postMessage({
    id,
    innerText: self.hljs.highlight(innerText, {language})?.value,
  });
};
