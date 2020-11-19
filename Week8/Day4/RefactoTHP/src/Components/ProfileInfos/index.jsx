import React, {useState} from 'react';
import { Avatar, Button, Card, Col, Icon, Row, message } from 'antd/es';
import EditProfileModal from '../Modals/Profile/EditAccount';
import UploadPictureModal from '../Modals/Profile/UploadPicture';

const ProfileInfos = ({data}) => {
    const [description, setDescription] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [mentions, setMentions] = useState('');
    const [email, setEmail] = useState('myprofile@thp.fr');
    const [phoneNumber, setPhoneNumber] = useState('0601020304');
    const [firstname, setFirstname] = useState('TheHacking');
    const [lastname, setLastname] = useState('Project');
    const [profileData, setProfileData] = useState(data);
    const [editProfilModal, setEditProfilModal] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);



    const formatDate = (date) => {
        const newDate = new Date(date);
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }
    
    const updateProfile = () => {
        let tmp = profileData;
        tmp.email = email;
        tmp.firstname = firstname;
        tmp.lastname = lastname;
        tmp.phoneNumber = phoneNumber;
        setProfileData(tmp);
        setEditProfilModal(false);
        message.success('Profile well updated', 3);
    }

    const editEmail = (newEmail) => {
        setEmail(newEmail);
    }

    const editPhoneNumber = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber);
    }

    const editFirstName = (newFirstName) => {
        setFirstname(newFirstName);
    }

    const editLastname = (newLastName) => {
        setLastname(newLastName);
    }

    const updateMentions = (value) => {
        setMentions(value);
    }

    const updateHashtags = (value) => {
        setHashtags(value);
    }

    const editDescription = (newDescription) => {
        setDescription(newDescription);
    }

    return (
        <div id='profile-informations'>
            < EditProfileModal 
                updateProfile = {updateProfile}
                setEmail = {editEmail}
                setPhoneNumber = {editPhoneNumber}
                setFirstname = {editFirstName}
                setLastname = {editLastname}
                email = {email}
                firstname = {firstname}
                lastname = {lastname}
                phoneNumber = {phoneNumber}
                editProfilModal = {editProfilModal}
                setEditProfilModal = {() => setEditProfilModal(false)}
            />

            < UploadPictureModal 
                setMentions = {updateMentions}
                setHashtags = {updateHashtags}
                setDescription = {editDescription}
                visibility = {uploadModal}
                setUploadModal = {() => setUploadModal(false)}
                description = {description}
                hashtags = {hashtags}
                mentions = {mentions}
            />
            
            <Row type="flex" align="middle" justify="center">
                <Col sm={16} xs={24}>
                    <Card bordered>
                        <Row type="flex" align="middle" justify="center">
                            <Col md={14} sm={16} xs={24}>
                                <Row type="flex" justify="space-between">
                                    <Col span={10} className="text-center">
                                        <Avatar size={100} icon="user" className="profil-pic" src={profileData.profilePicture} />
                                        <h3>{`${profileData.firstname} ${profileData.lastname}`}</h3>
                                    </Col>
                                    <Col span={10}>
                                        <p>
                                            <Icon type="user" className="p-icon" />
                                            {profileData.username}
                                        </p>
                                        <p>
                                            <Icon type="mail" className="p-icon" />
                                            {profileData.email}
                                        </p>
                                        <p>
                                            <Icon type="phone" className="p-icon" />
                                            {profileData.phoneNumber}
                                        </p>
                                        <p>
                                            <Icon type="calendar" className="p-icon" />
                                            {formatDate(profileData.createdAt)}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={10} sm={16} xs={24} className="text-center">
                                <Button type="ghost" icon="setting" onClick={() => setEditProfilModal(true)}>Edit account</Button>
                                <br />
                                <br />
                                <Button type="ghost" icon="upload" onClick={() => setUploadModal(true)}>Upload a picture</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileInfos;