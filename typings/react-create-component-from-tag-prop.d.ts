declare module 'react-create-component-from-tag-prop' {
  export default function(options: {
    tag: string;
    prop: string;
    propsToOmit?: string[];
  }): React.ComponentType<any>;
}
