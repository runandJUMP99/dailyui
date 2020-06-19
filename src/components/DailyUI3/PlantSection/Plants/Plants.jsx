import React from "react";

import Plant from "./Plant/Plant";

import classes from "./Plants.module.css";

const Plants = () => {
    return (
        <div className={classes.Plants}>
            <Plant
                name="Spider Plant"
                img="https://secure.img1-fg.wfcdn.com/im/58105339/resize-h800%5Ecompr-r85/3832/38321399/Larpsilk+Realistic+60-Frond+Spider+Foliage+Plant.jpg" 
                rating="🌵🌵🌵🌵🌵"
                techName="Chlorophytum Comosum"
                description="Considered one of the most adaptable of houseplants. Easy to grow!"
                similarPlants="Lily Turf, Mondo Grass" />
            <Plant
                name="Chrysanthemum"
                img="https://www.flower.style/assets/images/NoCrop_536/9538880294234e62b05b6636893d27a5.jpg" 
                rating="🌵🌵🌵"
                techName="Chrysanthemum Indicum"
                description="One of the most popular fall garden flowers, these plants are easy to grow with basic needs!"
                similarPlants="Dahlias, Marigolds" />
            <Plant
                name="Snake Plant"
                img="https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw4299e75a/Images/Product%20Images/prod500591/prod500591.jpg?sw=322&sh=380&sm=fit" 
                rating="🌵🌵🌵🌵"
                techName="Sansevieria Laurentii"
                description="EXTREMLY tolerant plant. Care is straightforward and perfect for first time plant lovers!"
                similarPlants="Rubber Fig, Spider Plant" />
            <Plant
                name="English Ivy"
                img="https://secure.img1-ag.wfcdn.com/im/73724666/compr-r85/4420/44209018/33-english-ivy-plant-in-basket.jpg"
                rating="🌵🌵🌵🌵"
                techName="Hedera Helix"
                description="These plants spread quickly and are great as ground covers. Beautiful indoors our out!"
                similarPlants="Irish Ivy, Persian Ivy" />
            <Plant
                name="Aloe Vera"
                img="https://assets.eflorist.com/site/EF-2287/assets/products/PHR_/sku6701208.jpg"
                rating="🌵🌵🌵🌵🌵"
                techName="Aloe Barbadensis Mill"
                description="Well known to relive sunburn and heal wounds, but can also be used as an alternative to mouthwash!"
                similarPlants="Aloe Ferox, Stapelia" />
        </div>
    );
}

export default Plants;