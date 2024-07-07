import { atom } from "recoil";

export const alertState = atom({
  key: "alertState",
  default: {
    title: "",
    btnTitle: "",
    cancelBtn: "",
    show: false,
    navigateTo: "",
  },
});
