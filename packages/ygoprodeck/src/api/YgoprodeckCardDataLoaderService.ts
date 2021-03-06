import { inject, injectable } from "inversify";
import { YgoprodeckApiService } from "./YgoprodeckApiService";
import { YGOPRODECK_INTERNAL_TYPES } from "../types";
import type {
    CardDataLoaderService,
    UnlinkedCard,
    CardSet,
    CardValues,
} from "@yugioh-deck-tool/core";
import { FindCardBy } from "@yugioh-deck-tool/core";

/**
 * Implementation of {@link CardDataLoaderService} using {@link YgoprodeckApiService}.
 * Can be used outside of ygoprodeck.com.
 */
@injectable()
export class YgoprodeckCardDataLoaderService implements CardDataLoaderService {
    readonly #ygoprodeckApiService: YgoprodeckApiService;

    constructor(
        @inject(YGOPRODECK_INTERNAL_TYPES.YgoprodeckApiService)
        ygoprodeckApiService: YgoprodeckApiService
    ) {
        this.#ygoprodeckApiService = ygoprodeckApiService;
    }

    public async getCard(
        cardKey: string,
        findCardBy: FindCardBy
    ): Promise<UnlinkedCard | null> {
        if (findCardBy == FindCardBy.PASSCODE) {
            return this.#ygoprodeckApiService.getSingleCard({
                passcode: cardKey,
                format: null,
                includeAliased: true, // Include alternate artworks IDs as well.
            });
        } else {
            return this.#ygoprodeckApiService.getSingleCard({
                fuzzyName: cardKey, // fuzzy name matching so we get the most similar match instead of an exact match.
                sorting: "relevance",
                format: null,
                includeAliased: false,
            });
        }
    }

    public async getAllCards(): Promise<UnlinkedCard[]> {
        return this.#ygoprodeckApiService.getCards({
            format: null,
            includeAliased: true,
        });
    }

    public async getAllCardSets(): Promise<CardSet[]> {
        return this.#ygoprodeckApiService.getCardSets();
    }

    public async getCardValues(): Promise<CardValues> {
        return this.#ygoprodeckApiService.getCardValues();
    }

    public async getArchetypes(): Promise<string[]> {
        return this.#ygoprodeckApiService.getArchetypes();
    }
}
