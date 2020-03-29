import { inject, injectable } from "inversify";
import { Deck } from "../../model/ygo/Deck";
import { TYPES } from "../../../types";
import { Card } from "../../model/ygo/Card";
import { DeckService } from "./DeckService";
import { DEFAULT_DECK_PART_ARR } from "../../model/ygo/DeckPart";
import { CardService } from "./CardService";

@injectable()
class DeckExportService {
    private readonly deckService: DeckService;
    private readonly cardService: CardService;

    constructor(
        @inject(TYPES.DeckService)
        deckService: DeckService,
        @inject(TYPES.CardService)
        cardService: CardService
    ) {
        this.deckService = deckService;
        this.cardService = cardService;
    }

    /**
     * Creates a shareable text in the following format for a deck:
     * <pre>
     * Main:
     * Foo x1
     * Bar x3
     *
     * Side:
     * Foo x1
     * </pre>
     * @param deck Deck to create the text for.
     * @return Text form of the deck.
     */
    public toShareableText(deck: Deck): string {
        const result = [];
        for (const deckPart of DEFAULT_DECK_PART_ARR) {
            result.push(`${deckPart.name}:`);

            const deckPartCards = deck.parts.get(deckPart)!;
            const counted: Map<Card, number> = this.cardService.countCards(
                deckPartCards
            );
            for (const [card, count] of counted.entries()) {
                result.push(`${card.name} x${count}`);
            }
            result.push("");
        }
        return result.join("\n");
    }

    /**
     * Creates a buy link of a deck for tcgplayer.com.
     *
     * @param deck Deck to create a link for.
     * @return Buy link.
     */
    public toBuyLink(deck: Deck): string {
        const counted: Map<Card, number> = this.cardService.countCards(
            this.deckService.getAllCards(deck)
        );
        const cardList = Array.from(counted.entries()).map(
            ([card, count]) => `${count} ${card.name}`
        );
        return (
            "https://store.tcgplayer.com/massentry?partner=YGOPRODeck&productline=Yugioh&c=" +
            encodeURIComponent(["", ...cardList, ""].join("||"))
        );
    }
}

export { DeckExportService };
