import React from 'react';
import { Button, Col, Row, Modal, List, Tag } from 'antd/es';

const PublicationModal = ({setPreviewPublicationModal, id, description, img, hashtags, mentions, previewPublicationModal}) => {
    const updatePic = () => {
        alert("J'update la publcation avec l'id : " + id);
      }
    
      const deletePic = () => {
        alert("Je supprime la publcation avec l'id : " + id);
      }

    return (
        <Modal width={520} visible={previewPublicationModal} onCancel={() => setPreviewPublicationModal()}
                footer={<Row type="flex">
                    <Col span={12} className="text-center">
                        <Button type="ghost" icon="edit" onClick={() => updatePic()}>Edit</Button>
                    </Col>
                    <Col span={12} className="text-center">
                        <Button type="danger" icon="delete" onClick={() => deletePic()}>Delete</Button>
                    </Col>
                </Row>}
            >
                <Row type="flex" align="middle">
                    <Col xs={24} md={12} className="text-center">
                        <img src={img} width={200} height={200} alt={description} />
                    </Col>
                    <Col xs={24} md={12}>
                        <div>
                        <b>Description: </b>
                        <p>{description}</p>
                        </div>
                        <div>
                        <b>Hashtag:</b>
                        <List
                            grid={{ gutter: 16, column: 2 }}
                            dataSource={hashtags}
                            renderItem={(tag) => (
                            <List.Item>
                                <Tag>{`${tag}`}</Tag>
                            </List.Item>
                            )}
                        />
                        </div>
                        <div>
                        <b>Mention:</b>
                        <List
                            grid={{ gutter: 16, column: 2 }}
                            dataSource={mentions}
                            renderItem={(user) => (
                            <List.Item>
                                <Tag>{`@${user}`}</Tag>
                            </List.Item>
                            )}
                        />
                        </div>
                    </Col>
                </Row>
            </Modal>

    )
}

export default PublicationModal;