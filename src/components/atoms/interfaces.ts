export interface IconButtonProps {
  href: string;
  children: JSX.Element;
}

export interface PrimaryButtonProps {
  name: string;
  onClick: Function;
  isSquare?: boolean;
}

export interface SecondaryButtonProps {
  name: string;
  onClick: Function;
}

export interface CircleImageProps {
  src: string;
  borderColor?: string;
}

export interface InputFieldProps {
  name: string;
  type: string;
  value: string;
  onChange: Function;
  placeholder?: string;
  bottomBorder?: boolean;
}

export interface SelectFieldProps { 
  onChange: Function;   value: string;
  options: {id: string, value: string}[];
  name?: string;
  bottomBorder?: boolean;
}