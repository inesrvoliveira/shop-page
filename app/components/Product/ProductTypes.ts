  
// Define the Product interface with id, name, quantity, price, image(optional)
export interface Product {
    id: string;       
    name: string;     
    price: number;    
    productPackagingUrl?: string;  //Image to display product
  }

export interface BasketItem{
  product: Product;
  quantity: number;
}
  
  // the free bottle to add to basket
export const freeBottle: BasketItem = {
    product: {
      id: '378tkYgDUBncraADorGS3k',
      name: 'universal shaker bottle',
      price: 0, //Free the first time
    },
    quantity: 1,
  };

export const bottlePrice=11.9;


