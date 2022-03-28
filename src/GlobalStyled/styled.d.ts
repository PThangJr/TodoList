import "styled-components";

interface IColors {
  white: string;
  black: string;
  yellow: string;
}
interface IBackgroundColors {
  green: string;
  btnSort?: string;
  btnAllCompleted?: string;
  btnAllPending?: string;
  btnRemoveAll?: string;
}

interface IResponsives {
  mobile: "768px";
}
interface IHeight {
  header: string | number;
  body: string | number;
  footer: string | number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: IColors;
    background: IBackgroundColors;
    responsive: IResponsives;
    height: IHeight;
  }
}
