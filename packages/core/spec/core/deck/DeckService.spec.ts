import "reflect-metadata";

import { createCard, createCardType } from "../../helper/dataFactories";
import { Container } from "inversify";
import { TYPES } from "../../../src/types";
import { baseModule, deckModule } from "../../../src/inversify.modules";
import type { DeckService } from "../../../src/core/deck/DeckService";
import { DeckPart } from "../../../src/core/deck/DeckPart";
import { Format } from "../../../src/core/card/format/Format";
import { CardTypeCategory } from "../../../src/core/card/type/CardTypeCategory";
import { DefaultBanState } from "../../../src/core/card/banlist/BanState";
import type { Deck } from "../../../src/core/deck/Deck";
import type { CardDataLoaderService } from "../../../src/core/card/CardDataLoaderService";
import { MockDataLoaderService } from "../../helper/MockDataLoaderService";

describe("DeckService", () => {
    let deckService: DeckService;

    beforeEach(() => {
        const container = new Container();
        container.load(baseModule, deckModule);
        container
            .bind<CardDataLoaderService>(TYPES.CardDataLoaderService)
            .to(MockDataLoaderService);

        deckService = container.get<DeckService>(TYPES.DeckService);
    });

    describe("createEmptyDeck", () => {
        it("creates empty deck", () => {
            expect(deckService.createEmptyDeck()).toEqual({
                name: null,
                parts: {
                    [DeckPart.MAIN]: [],
                    [DeckPart.EXTRA]: [],
                    [DeckPart.SIDE]: [],
                },
            });
        });
    });

    describe("getAllCards", () => {
        it("gets all cards", () => {
            const card1 = createCard({ passcode: "123" });
            const card2 = createCard({ passcode: "456" });
            const card3 = createCard({ passcode: "789" });
            expect(
                deckService.getAllCards({
                    name: null,
                    parts: {
                        [DeckPart.MAIN]: [card1],
                        [DeckPart.EXTRA]: [card2, card2],
                        [DeckPart.SIDE]: [card3],
                    },
                })
            ).toEqual([card1, card2, card2, card3]);
        });
    });

    describe("canAdd", () => {
        it("checks deck part card types", () => {
            expect(
                deckService.canAdd(
                    {
                        name: null,
                        parts: {
                            [DeckPart.MAIN]: [],
                            [DeckPart.EXTRA]: [],
                            [DeckPart.SIDE]: [],
                        },
                    },
                    createCard({
                        passcode: "456",
                        type: createCardType({
                            deckPart: new Set([DeckPart.EXTRA]),
                        }),
                    }),
                    DeckPart.MAIN,
                    Format.TCG
                )
            ).toBeFalse();
        });

        it("checks deck part limit", () => {
            expect(
                deckService.canAdd(
                    {
                        name: null,
                        parts: {
                            [DeckPart.MAIN]: [],
                            [DeckPart.EXTRA]: [],
                            [DeckPart.SIDE]: new Array(15).fill(
                                createCard({ passcode: "123" })
                            ),
                        },
                    },
                    createCard({ passcode: "456" }),
                    DeckPart.SIDE,
                    Format.TCG
                )
            ).toBeFalse();
        });

        it("checks total link card count", () => {
            const card = createCard({
                passcode: "456",
                type: createCardType({ group: CardTypeCategory.SKILL }),
            });
            expect(
                deckService.canAdd(
                    {
                        name: null,
                        parts: {
                            [DeckPart.MAIN]: [],
                            [DeckPart.EXTRA]: [],
                            [DeckPart.SIDE]: [card],
                        },
                    },
                    card,
                    DeckPart.SIDE,
                    Format.OCG
                )
            ).toBeFalse();
        });

        it("checks against ban list", () => {
            const card = createCard({
                passcode: "456",
                banlist: {
                    [Format.OCG]: DefaultBanState.LIMITED,
                    [Format.TCG]: DefaultBanState.UNLIMITED,
                    [Format.GOAT]: DefaultBanState.UNLIMITED,
                },
            });
            expect(
                deckService.canAdd(
                    {
                        name: null,
                        parts: {
                            [DeckPart.MAIN]: [],
                            [DeckPart.EXTRA]: [],
                            [DeckPart.SIDE]: [card],
                        },
                    },
                    card,
                    DeckPart.SIDE,
                    Format.OCG
                )
            ).toBeFalse();
        });

        it("returns true if a card can be added", () => {
            const card = createCard({
                passcode: "456",
            });
            expect(
                deckService.canAdd(
                    {
                        name: null,
                        parts: {
                            [DeckPart.MAIN]: [],
                            [DeckPart.EXTRA]: [],
                            [DeckPart.SIDE]: [],
                        },
                    },
                    card,
                    DeckPart.SIDE,
                    Format.OCG
                )
            ).toBeTrue();
        });
    });

    describe("addCard", () => {
        it("adds card", () => {
            const card = createCard({
                passcode: "456",
            });
            const deck: Deck = {
                name: null,
                parts: {
                    [DeckPart.MAIN]: [],
                    [DeckPart.EXTRA]: [],
                    [DeckPart.SIDE]: [],
                },
            };

            deckService.addCard(deck, card, DeckPart.SIDE);
            expect(deck).toEqual({
                name: null,
                parts: {
                    [DeckPart.MAIN]: [],
                    [DeckPart.EXTRA]: [],
                    [DeckPart.SIDE]: [card],
                },
            });
        });
    });

    describe("removeCard", () => {
        it("removes card", () => {
            const card = createCard({
                passcode: "456",
            });
            const deck = {
                name: null,
                parts: {
                    [DeckPart.MAIN]: [],
                    [DeckPart.EXTRA]: [],
                    [DeckPart.SIDE]: [card],
                },
            };

            deckService.removeCard(deck, card, DeckPart.SIDE);
            expect(deck).toEqual({
                name: null,
                parts: {
                    [DeckPart.MAIN]: [],
                    [DeckPart.EXTRA]: [],
                    [DeckPart.SIDE]: [],
                },
            });
        });
    });
});
