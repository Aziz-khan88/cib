//Banner
import BannerPoster from "media/product/bannerImage.webp"
import { AutoIcon, BoatIcon, BusinessIcon, CommercialIcon, CondoIcon, ContractorIcon, EarthquakeIcon, FloodIcon, HomeIcon, LifeIcon, MedicalIcon, MotorcycleIcon, RentersIcon, UmbrellaIcon, WildfireIcon } from "../../app-constants"

export const BannerData = {
    title: (<>
        Top-Tier <span>Insurance Services</span> in California
    </>),
    desc: "At Circadian Insurance, we don’t just sell products but provide tailored insurance services that fit your needs. From home to auto and beyond, we focus on finding the perfect match for your needs. Let us help you protect what matters most.",
    BannerPoster: BannerPoster.src
}
export const ProductListingData = {
    productlisting: [
        {
            icon: <AutoIcon />,
            title: "Auto Insurance",
            txt: "Hit the road with confidence. Our auto insurance provides comprehensive coverage for your vehicle, protecting you from accidents and theft. Enjoy peace of mind with affordable options.",
            link: "/auto-insurance"
        },
        {
            icon: <HomeIcon />,
            title: "Homeowner Insurance",
            txt: "Your home is more than a house; it's where memories are made. Protect it with our homeowner insurance, which covers property damage and liability for your safety, both inside and outside.",
            link: "/homeowner-insurance"
        },
        {
            icon: <WildfireIcon />,
            title: "Wildfire Home Insurance",
            txt: "In California, wildfires pose a significant threat. Our wildfire home insurance protects your home and belongings in case of disaster. Secure your property with the right coverage.",
            link: "/wildfire-home-insurance"
        },
        {
            icon: <RentersIcon />,
            title: "Renters Insurance",
            txt: "Renting doesn’t mean sacrificing protection. Renters insurance protects your personal property from theft, fire, and other damage at an affordable price. Get the coverage you deserve for your belongings.",
            link: "/renters-insurance"
        },
        {
            icon: <BusinessIcon />,
            title: "Business Insurance",
            txt: "Protect your business with tailored insurance covering liability, property, workers’ compensation, and more. Secure your company’s future with reliable coverage tailored to your needs.",
            link: "/business-insurance"
        },
        {
            icon: <CommercialIcon />,
            title: "Commercial Auto Insurance",
            txt: "Protect your fleet and employees with our commercial auto insurance. Get the coverage to keep your vehicles running smoothly and your business safe.",
            link: "/commercial-auto-insurance"
        },
        {
            icon: <MedicalIcon />,
            title: "Medical Malpractice Insurance",
            txt: "Your practice relies on trust. Medical malpractice insurance safeguards your , allowing  focus on patient care with confidence.",
            link: "/medical-malpractice-insurance"
        },
        {
            icon: <EarthquakeIcon />,
            title: "Earthquake Insurance",
            txt: "Earthquakes are unpredictable, but your protection shouldn’t be. Earthquake insurance safeguards your home and property from unexpected damage.",
            link: "/earthquake-insurance"
        }
        ,
        {
            icon: <FloodIcon />,
            title: "Flood Insurance",
            txt: "Floods can occur anywhere, even in low-risk areas. Our flood insurance protects your property from flooding caused by rising waters. Be proactive and secure your home against unexpected floods.",
            link: "/flood-insurance"
        },
        {
            icon: <LifeIcon />,
            title: "Life Insurance",
            txt: "Life is unpredictable, but your family's future can be secure. Our tailored life insurance options, from term to whole life, help protect your loved ones and fit your budget.",
            link: "/life-insurance"
        },
        {
            icon: <UmbrellaIcon />,
            title: "Umbrella Insurance",
            txt: "This coverage safeguards you from major claims and lawsuits that exceed your regular policy limits. Be prepared for life’s uncertainties and protect everything you’ve worked for.",
            link: "/umbrella-insurance"
        },
        {
            icon: <BoatIcon />,
            title: "Boat & Watercraft Insurance",
            txt: "Stay protected on the water with our boat and watercraft insurance. We cover your vessel, gear, and liability to ensure your adventures are safe and enjoyable, whether on a lake or the ocean.",
            link: "/boat-insurance"
        },
        {
            icon: <CondoIcon />,
            title: "Condo Insurance",
            txt: "Your condo is unique, and so are your insurance needs. Our condo insurance provides coverage for personal property, liability, and additional benefits. Protect your unit from unexpected events.",
            link: "/condo-insurance"
        },
        {
            icon: <ContractorIcon />,
            title: "Contractor Insurance",
            txt: "As a contractor, you encounter unique risks daily. Our insurance protects against property damage, worker injuries, and liability, allowing you to focus on your work with confidence.",
            link: "/contractor-insurance"
        }
        ,
        {
            icon: <MotorcycleIcon />,
            title: "Motorcycle Insurance",
            txt: "Feel the freedom of the road with motorcycle insurance that keeps you safe. Our coverage protects against accidents, theft, and injury, so you’re covered wherever you ride.",
            link: "/motorcycle-insurance"
        }
    ]
}

export const TestimonialData = [
    {
        title: "Mark R.",
        txt: "I was in need of new motorcycle insurance, and Circadian Insurance Brokers made the whole process so easy. From the initial quote to the finalization of the policy, their team was quick, friendly, and professional. I’m now covered and feeling confident on the road!",
        star: "5",
    },
    {
        title: "Emily Larson",
        txt: "I needed renter’s insurance quickly, and Circadian Insurance Brokers exceeded my expectations. They found me an affordable policy that covered everything I needed. Their knowledgeable and friendly team cares about getting you the right coverage.",
        star: "5",
    },
    {
        title: "Jason P.",
        txt: "As a small business owner, insurance has always been on my mind. Circadian Insurance Brokers helped me navigate the options and secure the perfect policy tailored to my needs. Their team made the process stress-free, and I know I’m in great hands. I’ll be a customer for life!",
        star: "5",
    },
    {
        title: "Sarah Thompson",
        txt: "I dreaded finding new home and auto insurance, but Circadian Insurance Brokers made it a breeze. They took the time to understand my needs and quickly found me the best options. I highly recommend them to anyone in California looking for reliable and efficient service!",
        star: "5",
    },
]

import BgImage from "media/product/ProductContentImg.webp"
export const ProductContentData = {
    title: (<>
        Get Insured in <span>Minutes!</span>
    </>),
    desc: (<>
        <p>Stop waiting and start protecting. Get your custom insurance quote today, designed just for you. Whether it's your car, home, or business, we make securing your future simple and fast.</p>
        <p>With just a few steps, you'll access the best coverage options from top insurers. Our team is here to ensure you receive the protection you deserve.</p>
        <p>Act now and lock in your coverage today! Don’t leave your future unprotected. Get your quote in minutes!</p>
    </>),
    img: BgImage.src
}