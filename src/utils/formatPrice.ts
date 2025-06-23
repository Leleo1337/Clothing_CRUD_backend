function formatPrice(amount: number): string {
	return Intl.NumberFormat('BRL', {
		style: 'currency',
		currency: 'BRL',
	}).format(amount);
}

export default formatPrice;
