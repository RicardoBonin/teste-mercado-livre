import { Tags } from './generics';

export interface ShippingProps {
  mode: string;
  methods: [];
  tags: Tags;
  dimensions: null;
  localPickUp: boolean;
  freeShipping: boolean;
  logisticType: string;
  storePickUp: boolean;
}
