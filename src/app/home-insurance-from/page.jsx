"use client";
import { useRouter } from "next/navigation";
import styles from "@/styles/components/common/home-insurance-from.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import toast from "react-hot-toast";

const questions = [
  "Names and date of birth of all persons on the title",
  "Property address",
  "Mailing address, if different",
  "Is this a primary home, seasonal, or rental property",
  "Year built",
  "Square footage of living area",
  "Type of plumbing, i.e., copper, PVC, etc.",
  "Does the electrical system have circuit breakers",
  "Type of roof, and when was it last replaced",
  "Type of flooring and percentage, i.e., carpet 50%, hardwood 50%, etc.",
  "Have you had any property claims in the past 5 years? If so, the year of claim and type",
  "Do you own any dogs? If so, breed and bite history",
  "Is there a swimming pool on premises? If so, does it have a diving board or slide",
  "Current or latest insurance carrier and Current Insurance expiration date or cancellation date",
  "Reason for cancellation",
  "Purchase date",
  "Any business on the premises, i.e., daycare/beautician",
  "Contact phone number",
  "How did you hear about us",
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (answers[currentStep].trim() === "") {
      toast.error("Please fill out this field.");
      return;
    }
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answers.some((ans) => ans.trim() === "")) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/home-insurance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Form submitted successfully!");
        router.push("/thank-you");
      } else {
        toast.error(`Submission failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className={styles.homeSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} className="my-auto">
            <h2>Home Insurance Form</h2>
            <p>Please answer the questions below one by one to receive your quote.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.questionSec}>
                <div className={styles.questionTitle}>
                  <span>{currentStep + 1}</span>: {questions[currentStep]}
                </div>

                <div className={styles.questionBox}>
                  <textarea
                    name={`q${currentStep + 1}`}
                    placeholder="Write here..."
                    value={answers[currentStep]}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.questionBtn}>
                  <button type="button" onClick={handlePrev} disabled={currentStep === 0}>
                    Prev
                  </button>
                  {currentStep === questions.length - 1 ? (
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  ) : (
                    <button type="button" onClick={handleNext}>
                      Next
                    </button>
                  )}
                </div>
              </div>


            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Page;
