"use client";
import { useState } from "react";
import styles from "@/styles/layout/topbar.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { CalendarIcon, EmailIcon, FbIcon, PhoneIcon, PinIcon } from "@/src/app/app-constants";
import Link from "next/link";
import { PaymentIcon } from "../app-constants";
import SidePanelPopup from "@/src/app/components/sidepanel/sidepanelpopup";

const TopBar = () => {
    const [show, setShow] = useState(false);
    const [activePanel, setActivePanel] = useState("");

    const handleShow = (panel) => {
        setActivePanel(panel);
        setShow(true);
    };
    const handleClose = () => setShow(false);

    return (
        <section className={styles.topbarSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} className="my-auto">
                        <ul className={styles.contactInfo}>
                            <li>
                                <span><PinIcon /></span>
                                <Link href="#" rel="noopener noreferrer">8440 Brentwood Blvd, Ste H Brentwood, CA 94513</Link>
                            </li>
                            <li>
                                <span>Call:</span>
                                <a href="tel:925-417-8500" rel="noopener noreferrer">925-417-8500</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="my-auto">
                        <ul className={styles.socailInfo}>
                            <li>
                                <a
                                    href="https://www.facebook.com/circadianinsurance/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FbIcon />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className={styles.sidePanel}>
                <div className={styles.panelItem}>
                    <a href="tel:925-417-8500" rel="noopener noreferrer">
                        <div className={styles.panelIcon}><PhoneIcon /></div>
                        <span>Call for Emergency Services 219-779-9815</span>
                    </a>
                </div>
                <div className={styles.panelItem} onClick={() => handleShow("schedule")} >
                    <div>
                        <div className={styles.panelIcon}><CalendarIcon /></div>
                        <span>Schedule now</span>
                    </div>
                </div>
                <div className={styles.panelItem} onClick={() => handleShow("payment")}>
                    <div>
                        <div className={styles.panelIcon}><PaymentIcon /></div>
                        <span>Make a payment</span>
                    </div>
                </div>
                <div className={styles.panelItem} onClick={() => handleShow("contact")}>
                    <div>
                        <div className={styles.panelIcon}><EmailIcon /></div>
                        <span>We’d love to hear from you</span>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <SidePanelPopup show={show} onHide={handleClose} activePanel={activePanel} />
        </section>
    );
}

export default TopBar;
