export interface AttributeValue {
  id: string;
  name: string;
  struct: null;
  source?: number;
}

export interface Attribute {
  id: string;
  name: string;
  valueId: string;
  valueName: string;
  values: AttributeValue[];
  source?: number;
  valueType: string;
}
