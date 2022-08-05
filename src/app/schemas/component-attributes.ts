export interface ComponentAttribute {
  attrs?: { [name: string]: number | string | boolean };
  childs?: { [name: string]: ComponentAttribute };
}
