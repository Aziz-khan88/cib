import { useState } from "react";
import styles from "@/styles/components/sidepanel/payment.module.scss"

const Payment = () => {
    // State to store the amount
    const [amount, setAmount] = useState(0);

    // Handler for input change
    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Ensure only numbers and default to 0 if empty
        setAmount(value ? parseFloat(value) : 0);
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.paymentFrom}>
                <h4 className={styles.serviceTitle}>Make a payment</h4>
                <form className={styles.calendarForm}>
                    <input type="text" placeholder="What are you paying for?" name="paying" required />
                    <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        required
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <textarea name="about" placeholder="Add details about this payment"></textarea>
                    <h5>Client Info</h5>
                    <input type="text" placeholder="First Name" name="fname" required />
                    <input type="text" placeholder="Last Name" name="lname" required />
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="tel" placeholder="Phone" name="phone" required />
                    <input type="text" placeholder="Address" name="address" required />
                    <select name="facilitytype">
                        <option value="">Facility Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Rental">Rental</option>
                    </select>
                    <select name="pesttype">
                        <option value="">Pest Type</option>
                        <option value="Ants">Ants</option>
                        <option value="Bees">Bees</option>
                        <option value="Crickets">Crickets</option>
                        <option value="Cockroaches">Cockroaches</option>
                        <option value="Flies">Flies</option>
                        <option value="Mice">Mice</option>
                        <option value="Snakes">Snakes</option>
                        <option value="Spiders">Spiders</option>
                    </select>
                    <input type="text" placeholder="Secondary Email" name="secondaryemail" required />
                </form>
            </div>

            <div className={styles.paymentOut}>
                <h4 className={styles.serviceTitle}>Checkout Summary</h4>
                <div className={styles.totalAmount}>
                    <div className={styles.tit}>Total amount</div>
                    <div className={styles.price}>${amount}</div>
                </div>
                <button type="submit" className={styles.checkoutBtn}>
                    CheckOut
                </button>
            </div>
        </div>
    )
}

export default Payment;
