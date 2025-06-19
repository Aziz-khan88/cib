import styles from "@/styles/components/common/flexbtn.module.scss"

const FlexBtn = ({ LiveChat, txt }) => {
    return (
        <div className={styles.flexbtnSection}>
            <div className={styles.btnCommon}>
                {txt ? txt : "Get Started"}
            </div>
            <div className={styles.btnCommon}>
                Call Now
            </div>
        </div>
    )
}

export default FlexBtn