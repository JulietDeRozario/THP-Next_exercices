import React from 'react';
import { Card } from 'antd/es';


const PublicationCard = ({openPreview, img}) => {
    return (
        <Card bordered className="card-pubs" onClick={() => openPreview()}>
            <img src={img} width={200} height={200} alt={img} />
        </Card>
    )
}

export default PublicationCard;