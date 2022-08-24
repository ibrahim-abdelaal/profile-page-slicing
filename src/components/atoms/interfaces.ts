export interface IconButtonProps {
  name: string;
  href: string;
  textColor: string;
  bgColor: string;
  children: JSX.Element;
  iconToRight?: boolean;
}

export interface GradientIconButtonProps {
  name: string;
  href: string;
  textColor: string;
  fromColor: string;
  toColor: string;
  children: JSX.Element;
  iconToRight?: boolean;
}

export interface BasicButtonProps {
  name: string;
  href: string;
  textColor: string;
  fromColor: string;
  toColor: string;
}

export interface BasicImageProps {
  src: string;
  width?: string;
  height?: string;
  topRounded?: boolean;
}

export interface ClickableImageProps {
  src: string;
  href: string;
  width?: string;
  height?: string;
  topRounded?: boolean;
}

export interface BasicInputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
}

export interface Product {
  id: string;
  productName: string;
  colorRange: string[];
  sizeRange: string[];
  src: string;
  href: string;
}
