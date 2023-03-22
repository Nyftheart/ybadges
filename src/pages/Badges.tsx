import type { NextPage } from 'next'
import CardBadge from "../component/BadgeCard";

const cardsData = [
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 1',
        category: 'Category A',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 2',
        category: 'Category B',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 3',
        category: 'Category C',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 4',
        category: 'Category A',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 5',
        category: 'Category B',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 6',
        category: 'Category C',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 7',
        category: 'Category A',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 8',
        category: 'Category B',
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'Card 9',
        category: 'Category C',
    },
];

const Badges: NextPage = () => {
    return (
        <div className="container p-4">
            <div className="flex flex-wrap -mx-4">
                {cardsData.map((cardData, index) => (
                    <CardBadge key={index} {...cardData} />
                ))}
            </div>
        </div>
    );
}

export default Badges;
