import { injectable } from "inversify";
import { Card } from "../../model/ygo/Card";
import { Vendor } from "../../model/price/Vendor";
import { Currency } from "../../model/price/Currency";
import { sum } from "lodash";

interface PriceLookupResult {
    price: number;
    missing: Card[];
}

/**
 * @public
 */
@injectable()
class PriceService {
    /**
     * Gets the price of the card(s) for the given vendor and currency, using the sum of all existing prices.
     *
     * @param cards Cards to check.
     * @param vendor Vendor to get the price for.
     * @param currency Currency to calculate for. May be null to use the default vendor currency.
     * @return Object containing total sum for this currency, as well as a list of cards for which no price could be found.
     */
    public getPrice(
        cards: Card[],
        vendor: Vendor,
        currency: Currency | null
    ): PriceLookupResult {
        const missing: Card[] = cards.filter(
            (card) => !this.hasPrice(card, vendor)
        );
        const prices = cards
            .filter((card) => this.hasPrice(card, vendor))
            .map((card) => this.getCardPrice(card, vendor, currency));
        return { price: sum(prices), missing };
    }

    private hasPrice(card: Card, vendor: Vendor): boolean {
        return card.prices.has(vendor);
    }

    private getCardPrice(
        card: Card,
        vendor: Vendor,
        currency: Currency | null
    ): number {
        if (!this.hasPrice(card, vendor)) {
            throw new TypeError(
                `No price exists for this vendor: ${vendor.id}`
            );
        }
        const price = card.prices.get(vendor)!;
        // No conversion requested, return raw price as vendor provides
        if (currency == null) {
            return price;
        }
        // Currency calculations with floats is evil, but in this case a few cents more or less are OK.
        const priceInUsd = price / vendor.currency.conversionRate;
        return priceInUsd * currency.conversionRate;
    }
}

export { PriceService };
