function formatPrice(amount: string | undefined): string {
   const numAmout = Number(amount)
   return Intl.NumberFormat("BRL", {
      style: "currency",
      currency: 'BRL'
   }).format(numAmout);
}

export default formatPrice;
