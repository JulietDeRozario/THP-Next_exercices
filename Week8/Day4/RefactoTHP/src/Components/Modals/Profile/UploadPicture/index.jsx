import React from 'react';
import MentionsTagsComponent from '../../../../MentionsTagsComponent';
import { Col, Row, Modal, Input} from 'antd/es';

const UploadPicture = (setMentions, setHashtags, setDescription, visibility, setUploadModal, description, hashtags, mentions) => {

    const uploadPicture = () => {
        alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
    }
    console.log(visibility);

    return (
        <Modal title="Upload a picture" okText="Upload" visible={visibility} onOk={() => uploadPicture()} onCancel={() => setUploadModal()}>
            <Row type="flex" justify="center" className="input-container">
                <Col span={20}>
                    <b>Description:</b>
                    <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Col>
            </Row>
            <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={() => setMentions()} />
            <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={() => setHashtags()} />
        </Modal>
    )
}

export default UploadPicture;