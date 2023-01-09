let timer = null;

const debounce = (call, wait = 1000) => {
  clearTimeout(timer);
  timer = setTimeout(function () {
    call();
  }, wait);
};

export default debounce;
