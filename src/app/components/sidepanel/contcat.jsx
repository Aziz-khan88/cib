import styles from "@/styles/components/sidepanel/contact.module.scss"

const Contcat = () => {
    return (
        <div className={styles.contactWapper}>
            <h4 className={styles.serviceTitle}>Contact From</h4>
            <form className={styles.calendarForm}>
                <input type="text" name="subject" value="Contact request" readOnly />

                <input type="text" placeholder="First Name" name="fname" required />
                <input type="text" placeholder="Last Name" name="lname" required />
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
                <input type="text" placeholder="Special Requests" name="specialrequests" required />

                <input type="text" placeholder="Alt Email" name="altemail" required />
                <input type="text" placeholder="Secondary Email" name="secondaryemail" required />
                <textarea name="msg" placeholder="Message"></textarea>
                <p><strong>Booking Policy:</strong> Go here for privacy policy: https://www.testing.com/client-privacy-policy/</p>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Contcat