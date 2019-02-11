

const storage = (store, data) => {
  const initial = JSON.parse(localStorage.getItem(`'${store}'`));
  if (initial) {
    const update = JSON.stringify(initial.concat(data));
    localStorage.setItem(`'${store}'`, update);
    return initial.concat(data);
  }
  const update = JSON.stringify(data);
  localStorage.setItem(`'${store}'`, update);
  return data;
};

export default storage;
