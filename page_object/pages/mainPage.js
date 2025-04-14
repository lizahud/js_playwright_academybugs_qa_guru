export class MainPage {
	constructor(page) {
		this.page = page;
        this.paginationButton = page.getByRole('link', { name: '50' });
        this.imageProductItem = page.locator('#ec_product_image_effect_4281370').getByRole('link');
        this.selectOptionsButton = page.locator('#ec_product_image_3981370').getByRole('link', { name: 'Select Options' });
        this.loginForPricingButton = page.getByRole('link', { name: 'Login for Pricing' });
	}
    async open(url) {
		await this.page.goto(url);
	}
    async clickNextPaginationPage() {
		await this.paginationButton.click();
	}
	async clickImageProduct() {
		await this.imageProductItem.click();
	}
    async gotoSelectOptions() {
		await this.selectOptionsButton.click();
	}
    async gotoLoginForPricing() {
		await this.loginForPricingButton.click();
	}
}
