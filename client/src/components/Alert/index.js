import React from "react";
import { Button, Modal } from "semantic-ui-react";

const Alert = ({bookTitle, action, status, openModal, handleModalClose}) => {
    return (
        <Modal
            centered={false}
            open={openModal}
            onClose={() => handleModalClose()}
        >
            <Modal.Header style={status==="Success!" ? {backgroundColor:"green"} : {backgroundColor:"red"}}>{status}</Modal.Header>
            <Modal.Content>
                <Modal.Description as="Strong">{getModalDescription({bookTitle,action,status})}</Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => handleModalClose()}>OK</Button>
            </Modal.Actions>
        </Modal>
    );
}
function getModalDescription({status, bookTitle, action}) {
    if(status ==="Success!") {
        return `${bookTitle} has been ${action==="save" ? "saved" : "deleted" } successfully.`
    }
    else {
        return `Failed to ${action} ${bookTitle}. Please try again.`
    }
}

export default Alert;