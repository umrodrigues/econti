
import { ILink } from "../link/LinkType";
export interface IAccordion {
  title: string;
  links: ILink[];
  type: 'footer' | 'menu' ;
}
