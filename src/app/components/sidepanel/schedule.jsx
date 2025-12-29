"use client";
import { useState } from "react";
import styles from "@/styles/components/sidepanel/schedule.module.scss";

const Schedule = () => {
    const [step, setStep] = useState(1); // Track current step
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const services = [
        "Auto Insurance",
        "Homeowner Insurance",
        "Wildfire Home Insurance",
        "Renters Insurance",
        "Business Insurance",
        "Commercial Auto Insurance",
        "Medical Malpractice Insurance",
        "Earthquake Insurance",
        "Flood Insurance",
        "Life Insurance",
        "Umbrella Insurance",
        "Boat & Watercraft Insurance",
        "Condo Insurance",
        "Contractor Insurance",
        "Motorcycle Insurance",
    ];

    return (
        <div className={styles.scheduleWappert}>
            <div className={styles.serviceBox}>
                {step === 1 && (
                    <div>
                        <h3>Select a Service</h3>
                        <div className={styles.serviceWapper}>
                            {services.map((service) => (
                                <div
                                    key={service}
                                    className={styles.serviceItem}
                                    onClick={() => {
                                        setSelectedService(service);
                                        setStep(2);
                                    }}
                                >
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.calendarBox}>
                        <h3>Pick a Date and Time</h3>
                        <input
                            type="date"
                            onChange={(e) => {
                                setSelectedDate(e.target.value);
                                setStep(3); // Move to form step
                            }}
                        />
                        <button onClick={() => setStep(1)}>Back</button>
                    </div>
                )}

                {step === 3 && (
                    <div className={styles.calendarWapper}>
                        <h3>Please fill out the details below</h3>
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
                                <select name="facilitytype" id="">
                                    <option value="Facility Type">Facility Type</option>
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Rental">Rental</option>
                                </select>
                                <select name="pesttype" id="">
                                    <option value="Pest Type">Pest Type</option>
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
                                <button type="submit">Submit</button>
                                <button onClick={() => setStep(2)}>Back</button>
                            </div>
                        </form>

                    </div>
                )}
            </div>
        </div >
    );
};

export default Schedule;
