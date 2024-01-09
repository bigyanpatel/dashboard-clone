import { atom } from "recoil";

type SideBarOpenType = boolean;

const SideBarOpen = atom<SideBarOpenType>({
  key: "SideBarOpen",
  default: false,
});

export { SideBarOpen };
