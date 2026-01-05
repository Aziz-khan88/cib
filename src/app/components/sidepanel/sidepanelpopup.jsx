import { Modal } from 'react-bootstrap';
import Schedule from '@/src/app/components/sidepanel/schedule';
import Payment from '@/src/app/components/sidepanel/payment';
import Contcat from '@/src/app/components/sidepanel/contcat';


const SidePanelPopup = ({ show, onHide, activePanel }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            className="SideBar"
        >
            {activePanel === "schedule" && <Schedule />}
            {activePanel === "payment" && <Payment />}
            {activePanel === "contact" && <Contcat />}
        </Modal>
    );
};

export default SidePanelPopup;
