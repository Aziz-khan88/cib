"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/header.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import MainLogo from "media/layout/mainLogo.webp"
import Image from "next/image";
import { ClosedIcon, NavIcon } from "../app-constants";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add("active");
        } else {
            document.body.classList.remove("active");
        }
    };
    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} sm={2} md={2} className="my-auto">
                        <Link href="/" className={styles.mainLogo}>
                            <Image src={MainLogo.src} alt="WebSite Logo" width={132} height={107} />
                        </Link>
                    </Col>
                    <Col xs={6} sm={10} md={10} className="ml-xs-auto my-auto">
                        <div
                            onClick={handleClick}
                            className={`${isActive ? "navIcon active" : "navIcon"}`}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <ul
                            className={`${styles.mainNavigation}  ${isActive ? `${styles.active}` : ""
                                }`}
                        >
                            <li><Link href="/" onClick={handleClick}>Home</Link></li>
                            <li><Link href="/products" onClick={handleClick}>Products</Link></li>
                            <li><Link href="/quotes" onClick={handleClick}>Quotes</Link></li>
                            <li><Link href="/about-us" onClick={handleClick}>About</Link></li>
                            <li><Link href="/contact-us" onClick={handleClick}>Contact Us</Link></li>
                            <li><Link href="/contact-us" onClick={handleClick}>Get Started</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header