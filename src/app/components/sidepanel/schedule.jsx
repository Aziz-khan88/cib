"use client";
import { useState } from "react";
import styles from "@/styles/components/sidepanel/schedule.module.scss";
import ServiceImg from "media/popup/servicesImg.webp";
import Image from "next/image";
import Calendar from "react-calendar";

const Schedule = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [slots, setSlots] = useState([]);

    const services = {
        "Personal Insurance": [
            { name: "Auto Insurance", time: "1 Hour", fee: "For a Fee" },
            { name: "Homeowner Insurance", time: "1.5 Hours", fee: "$150" },
            { name: "Renters Insurance", time: "45 Min", fee: "$80" },
            { name: "Condo Insurance", time: "1 Hour", fee: "$120" },
            { name: "Life Insurance", time: "2 Hours", fee: "$200" },
            { name: "Umbrella Insurance", time: "1 Hour", fee: "$130" },
            { name: "Motorcycle Insurance", time: "45 Min", fee: "$90" },
            { name: "Boat & Watercraft Insurance", time: "1.5 Hours", fee: "$180" },
        ],
        "Property & Disaster Insurance": [
            { name: "Wildfire Home Insurance", time: "2 Hours", fee: "$250" },
            { name: "Earthquake Insurance", time: "1.5 Hours", fee: "$220" },
            { name: "Flood Insurance", time: "1 Hour", fee: "$200" },
        ],
        "Business & Commercial Insurance": [
            { name: "Business Insurance", time: "2 Hours", fee: "$300" },
            { name: "Commercial Auto Insurance", time: "1.5 Hours", fee: "$180" },
            { name: "Contractor Insurance", time: "2 Hours", fee: "$250" },
            { name: "Medical Malpractice Insurance", time: "3 Hours", fee: "$400" },
        ],
    };

    const generateSlotsForDate = (date) => {
        const day = date.getDay();
        if (day === 0 || day === 6) return []; // Sunday & Saturday off

        const slots = [];
        for (let hour = 9; hour < 21; hour++) {
            const start = new Date(date);
            start.setHours(hour, 0, 0, 0);

            const end = new Date(date);
            end.setHours(hour + 1, 0, 0, 0);

            const format = (d) =>
                d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

            slots.push(`${format(start)} - ${format(end)}`);
        }
        return slots;
    };
    const isWeekend = ({ date, view }) => {
        if (view === "month") {
            const day = date.getDay();
            return day === 0 || day === 6; // Sunday (0) or Saturday (6)
        }
        return false;
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSlots(generateSlotsForDate(date));
        setSelectedSlot("");
    };
    const formattedDate = selectedDate
        ? selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "";


    return (
        <div className={styles.scheduleWappert}>
            <div className={styles.serviceBox}>
                {step === 1 && (
                    <div>
                        {Object.entries(services).map(([category, items]) => (
                            <div key={category} className={styles.serviceCategory}>
                                <h4 className={styles.serviceTitle}>{category}</h4>
                                <div className={styles.serviceWapper}>
                                    {items.map((service) => (
                                        <div
                                            key={service.name}
                                            className={styles.serviceItem}
                                            onClick={() => {
                                                setSelectedService(service);
                                                setStep(2);
                                            }}
                                        >
                                            <div className={styles.serviceContent}>
                                                <div className={styles.serviceImg}>
                                                    <Image src={ServiceImg.src} alt={service.name} fill />
                                                </div>
                                                <div className={styles.serviceTit}>
                                                    <h5>{service.name}</h5>
                                                    <h6>Inspection</h6>
                                                    <ul>
                                                        <li>{service.time}</li>
                                                        <li>{service.fee}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.sideWapper}>
                        <div className={styles.calendarBox}>
                            <h4 className={styles.serviceTitle}>Select a Date</h4>
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                minDate={new Date()}
                                maxDetail="month"
                                showNavigation={true}
                                tileDisabled={isWeekend}
                            />
                        </div>

                        <div className={styles.sideValue}>
                            {/* Slots / Messages */}
                            {selectedDate ? (
                                slots.length > 0 ? (
                                    <div className={styles.slotBox}>
                                        <h4 className={styles.serviceTitle}>Book a Time Slot</h4>
                                        {slots.map((slot, idx) => {
                                            const isSelected = selectedSlot === slot;
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`${styles.slotItem} ${isSelected ? styles.selected : ""}`}
                                                >
                                                    <button
                                                        onClick={() => setSelectedSlot(slot)}
                                                        className={styles.slotButton}
                                                    >
                                                        {slot}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className={styles.nodataFound}>
                                        No available slots for this date. Please choose another date.
                                    </p>
                                )
                            ) : (
                                <p className={styles.nodataFound}>
                                    Please select a date to see available time slots.
                                </p>
                            )}

                            {/* Appointment Summary */}
                            <h4 className={styles.serviceTitle}>Appointment Summary</h4>
                            {selectedService && (
                                <div className={styles.summaryItem}>
                                    <div className={styles.summaryImg}>
                                        <Image src={ServiceImg.src} alt={selectedService.name} fill />
                                    </div>
                                    <div className={styles.summaryText}>
                                        <h5>{selectedService.name}</h5>
                                        <ul>
                                            <li>{selectedService.time}</li>
                                            <li>{selectedService.fee}</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {formattedDate && (
                                <div className={styles.summaryRow}>
                                    <strong>Date:</strong> {formattedDate}
                                </div>
                            )}

                            {selectedSlot && (
                                <div className={styles.summaryRow}>
                                    <strong>Time:</strong> {selectedSlot}
                                </div>
                            )}

                            {selectedSlot && (
                                <div className={styles.navigationButtons}>
                                    <button onClick={() => setStep(1)} className={styles.backButton}>Back</button>
                                    <button className={styles.nextButton} onClick={() => setStep(3)}>Next</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className={styles.calendarWapper}>
                        <h4 className={styles.serviceTitle}>Please fill out the details below</h4>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Form submitted!");
                                setStep(1);
                            }}
                        >
                            <div className={styles.calendarForm}>
                                <input type="text" placeholder="Full Address" name="fulladdress" required />
                                <input type="text" placeholder="Full Name" name="name" required />
                                <input type="email" placeholder="Email" name="email" required />
                                <input type="tel" placeholder="Phone" name="phone" required />
                                <input type="text" placeholder="Address" name="address" required />
                                <input type="text" placeholder="Special Requests" name="specialrequests" required />
                                <select name="facilitytype" required defaultValue="">
                                    <option value="" disabled>
                                        Facility Type
                                    </option>
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Rental">Rental</option>
                                </select>

                                <select name="pesttype" required defaultValue="">
                                    <option value="" disabled>
                                        Pest Type
                                    </option>
                                    <option value="Ants">Ants</option>
                                    <option value="Bees">Bees</option>
                                    <option value="Crickets">Crickets</option>
                                    <option value="Cockroaches">Cockroaches</option>
                                    <option value="Flies">Flies</option>
                                    <option value="Mice">Mice</option>
                                    <option value="Snakes">Snakes</option>
                                    <option value="Spiders">Spiders</option>
                                </select>
                                <input type="text" placeholder="Alt Email" name="altemail" required />
                                <input type="text" placeholder="Secondary Email" name="secondaryemail" required />
                                <textarea name="notes" placeholder="Notes"></textarea>
                                <p><strong>Booking Policy:</strong> Go here for privacy policy: https://www.testing.com/client-privacy-policy/</p>
                                <button onClick={() => setStep(2)}>Back</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Schedule;
