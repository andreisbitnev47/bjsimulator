import React, { Component } from 'react';

export class Table extends Component {

    constructor(props) {
        super(props);
        const decksAmount = 7;
        const deckCards = this.addDecksAndShuffle(decksAmount);
        this.state = {
            decksAmount,
            deckCards,
            dealerCards: [],
            playersCards: [
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
            ],
            playerTurn: undefined,
            decksAmount: 7,
            stopperCard: 3.5,
            cardsOut: [],
        };
    }

    shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    addDecksAndShuffle(deckCount) {
        const fullDeck = [];
        const cards = [
            { value: 2, name: '2', suit: undefined},
            { value: 3, name: '3', suit: undefined},
            { value: 4, name: '4', suit: undefined},
            { value: 5, name: '5', suit: undefined},
            { value: 6, name: '6', suit: undefined},
            { value: 7, name: '7', suit: undefined},
            { value: 8, name: '8', suit: undefined},
            { value: 9, name: '9', suit: undefined},
            { value: 10, name: 'T', suit: undefined},
            { value: 10, name: 'J', suit: undefined},
            { value: 10, name: 'Q', suit: undefined},
            { value: 10, name: 'K', suit: undefined},
            { value: 11, name: 'A', suit: undefined},
        ];
        const suits = ['h', 's', 'd', 'c'];
        for(let i = 0; i < deckCount; i++) {
            suits.forEach(suit => {
                cards.forEach(card => {
                    const suitedCard = { ...card, suit };
                    fullDeck.push(suitedCard);
                });
            });
        }
        return this.shuffleDeck(fullDeck);
    }

    render() {
        const style = {
            width: '900px',
            height: '600px',
            border: '1px solid black',
        };
        return (
        <div style={style}>
            
        </div>
        );
    }
};

