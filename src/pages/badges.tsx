import type { NextPage } from 'next'
import CardBadge from "../component/BadgeCard";
import { useRouter } from 'next/router'
import cardsData from "../LocalBdd/badges.json"

const Badges: NextPage = () => {
    const router = useRouter()
    const goCard = (id : string) => {
        console.log('clickedCard');
       router.push(`/badge?id=${id}`).then(res => console.log('valid : ',res)).catch(err => console.log('erreur : ',err));
    };

    return (
        <div className="container p-4">
            <div className="flex flex-wrap -mx-4">
                {cardsData.map((cardData, index) => (
                    <CardBadge handleClick={() => goCard(cardData.id)} key={index} badge={cardData} />
                ))}
            </div>
        </div>
    );
}

export default Badges;
