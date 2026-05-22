declare namespace JSX {
  interface IntrinsicElements {
    'cb-immersive-experience': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      mode?: string;
      'property-code'?: string;
    }, HTMLElement>;
  }
}