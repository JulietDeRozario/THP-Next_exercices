import React, { useState } from 'react';
import { Col, Icon, Row } from 'antd/es';
import PublicationModal from '../Modals/Publications';
import PublicationCard from '../PublicationCard';

const PublicationsArea = ({data}) => {
    const [editPublicationModal, setEditPublicationModal] = useState(false);
    const [previewPublicationModal, setPreviewPublicationModal] = useState(false);
    const [previewItem, setPreviewItem] = useState(0);
    const [profileData, setProfileData] = useState(data);

    const openPreview = (postNumber) => {
      setPreviewItem(postNumber);
      setPreviewPublicationModal(true);
    }

    return (
        <div id='publications-area'>
            < PublicationModal 
                setPreviewPublicationModal = {() => setPreviewPublicationModal(false)}
                id = {data.posts[previewItem].id}
                previewPublicationModal = {previewPublicationModal}
                img = {data.posts[previewItem].imageUrl}
                description = {data.posts[previewItem].description}
                hashtags = {data.posts[previewItem].hashtags}
                mentions = {data.posts[previewItem].mentions}
                img = {data.posts[previewItem].imageUrl}
            />
            <Row type="flex" justify="center">
                <Col sm={18} xs={24}>
                    <Col span={24} className="container text-center">
                        <h2>
                        <Icon type="save" />
                            <span className="span-icon">Publications</span>
                            </h2>
                        {
                            profileData.posts.map(post =>(
                                < PublicationCard
                                    openPreview = {() => openPreview(profileData.posts.indexOf(post))}
                                    img = {post.imageUrl}
                                />
                            ))
                        }
                        
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default PublicationsArea;