import { Modal } from 'react-bootstrap';
import Schedule from '@/src/app/components/sidepanel/schedule';


const SidePanelPopup = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            className="SideBar"
        >
            <Schedule />
        </Modal>
    );
};

export default SidePanelPopup;
