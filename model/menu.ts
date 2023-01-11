import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Menu = {
  id: number;
  category: string;
  title: string;
  path: string;
  icon: IconDefinition;
  desc: string;
};

export default Menu;
