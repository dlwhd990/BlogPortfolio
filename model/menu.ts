import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Menu = {
  id: number;
  categoryId: number;
  category: string;
  title: string;
  path: string;
  icon: IconDefinition;
  desc: string;
};

export default Menu;
