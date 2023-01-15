import { faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faComputer,
  faDatabase,
  faEarthAmericas,
  faLightbulb,
  faNetworkWired,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../../model/menu";

export const menuList: Menu[] = [
  {
    id: 0,
    categoryId: 0,
    category: "Programming",
    title: "JavaScript",
    path: "/javascript",
    icon: faSquareJs,
    desc: "자바스크립트에 대해 공부합니다.",
  },
  {
    id: 1,
    categoryId: 0,
    category: "Programming",
    title: "TypeScript",
    path: "/typescript",
    icon: faSquareJs,
    desc: "타입스크립트에 대해 공부합니다.",
  },
  {
    id: 2,
    categoryId: 0,
    category: "Programming",
    title: "React",
    path: "/react",
    icon: faReact,
    desc: "리액트에 대해 공부합니다.",
  },
  {
    id: 3,
    categoryId: 0,
    category: "Programming",
    title: "Redux",
    path: "/redux",
    icon: faCode,
    desc: "리덕스에 대해 공부합니다.",
  },
  {
    id: 4,
    categoryId: 0,
    category: "Programming",
    title: "Next.js",
    path: "/next",
    icon: faCode,
    desc: "Next.js에 대해 공부합니다.",
  },
  {
    id: 5,
    categoryId: 1,
    category: "CS",
    title: "자료구조",
    path: "/datastructure",
    icon: faCode,
    desc: "자료구조에 대해 공부합니다.",
  },
  {
    id: 6,
    categoryId: 1,
    category: "CS",
    title: "알고리즘",
    path: "/algorithm",
    icon: faLightbulb,
    desc: "알고리즘에 대해 공부합니다.",
  },
  {
    id: 7,
    categoryId: 1,
    category: "CS",
    title: "네트워크",
    path: "/network",
    icon: faNetworkWired,
    desc: "네트워크에 대해 공부합니다.",
  },
  {
    id: 8,
    categoryId: 1,
    category: "CS",
    title: "운영체제",
    path: "/os",
    icon: faComputer,
    desc: "운영체제에 대해 공부합니다.",
  },
  {
    id: 9,
    categoryId: 1,
    category: "CS",
    title: "데이터베이스",
    path: "/db",
    icon: faDatabase,
    desc: "데이터베이스에 대해 공부합니다.",
  },
  {
    id: 10,
    categoryId: 1,
    category: "CS",
    title: "디자인패턴",
    path: "/designpattern",
    icon: faVectorSquare,
    desc: "디자인 패턴에 대해 공부합니다.",
  },
  {
    id: 11,
    categoryId: 1,
    category: "CS",
    title: "WEB",
    path: "/web",
    icon: faEarthAmericas,
    desc: "웹에 대해 공부합니다.",
  },
  {
    id: 12,
    categoryId: 2,
    category: "코딩테스트",
    title: "BOJ",
    path: "/boj",
    icon: faCode,
    desc: "BOJ 문제 풀이 과정",
  },
  {
    id: 13,
    categoryId: 2,
    category: "코딩테스트",
    title: "프로그래머스",
    path: "/programmers",
    icon: faCode,
    desc: "프로그래머스 문제 풀이 과정",
  },
  {
    id: 14,
    categoryId: 0,
    category: "Programming",
    title: "프로젝트",
    path: "/project",
    icon: faWindowMaximize,
    desc: "제가 진행한 프로젝트입니다.",
  },
];

export const categoryList: string[] = [];

menuList.forEach((menu) => {
  if (!categoryList.includes(menu.category)) {
    categoryList.push(menu.category);
  }
});

export const findMenu = (path: string): Menu => {
  const result = menuList.filter((menu) => menu.path.slice(1) === path);
  return result[0];
};
