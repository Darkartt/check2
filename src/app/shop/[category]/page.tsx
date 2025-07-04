import ShopCategoryClient from "./ShopCategoryClient";

// This is needed for static export to work with dynamic routes
export function generateStaticParams() {
  return [
    { category: 'tables' },
    { category: 'chairs' },
    { category: 'cabinets' },
    { category: 'accessories' },
    { category: 'all' },
    { category: 'decorative' },
    { category: 'kitchenware' },
    { category: 'furniture' },
    { category: 'sculptures' },
    { category: 'gifts' },
    { category: 'memorial' }
  ];
}

export default function ShopCategory() {
  return <ShopCategoryClient />;
}
