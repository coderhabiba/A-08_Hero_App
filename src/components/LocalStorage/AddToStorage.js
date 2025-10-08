import { toast } from "react-toastify";

const setData = id => {
  const stored = getData();

  if (!stored.includes(id)) {
    localStorage.setItem('downloaded', JSON.stringify([...stored, id]));
  } else {
    toast.warning('This app is already downloaded');
  }
};

const getData = () => JSON.parse(localStorage.getItem('downloaded') || '[]');

export { setData, getData };
