export interface SellerAddressItem {
  id: string;
  name: string;
}

export interface SellerAddressProps {
  city: SellerAddressItem;
  state: SellerAddressItem;
  country: SellerAddressItem;
  searchLocation: {
    neighborhood: SellerAddressItem;
    city: SellerAddressItem;
    state: SellerAddressItem;
  };
  id: number;
}
