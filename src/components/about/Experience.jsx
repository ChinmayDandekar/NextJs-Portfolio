import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
    position,
    company,
    companyLink,
    time,
    address,
    work,
}) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <LiIcon />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
                viewport={{ once: true }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}
                    &nbsp;-&nbsp;

                    {companyLink ? (
                        <a
                            href={companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary dark:text-primaryDark capitalize"
                        >
                            {company}
                        </a>
                    ) : (
                        <span className="text-primary dark:text-primaryDark capitalize">
                            {company}
                        </span>
                    )}
                </h3>

                <span className="capitalize font-medium text-dark/70 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>

                <ul className="list-disc mt-4 space-y-2 pl-5">
                    {work.map((line, index) => (
                        <li
                            key={index}
                            className="font-medium w-full xs:text-sm"
                        >
                            {line}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div id="experience" className="my-64 scroll-mt-24">
            {/* Section Heading */}

            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>

            {/* Timeline */}

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                {/* Timeline Line */}

                <motion.div
                    ref={ref}
                    style={{
                        scaleY: scrollYProgress,
                    }}
                    className="
                        absolute
                        left-9
                        top-0
                        w-[4px]
                        h-full
                        bg-dark
                        dark:bg-light
                        origin-top
                        md:w-[2px]
                        md:left-[30px]
                        xs:left-[20px]
                    "
                />

                {/* Experience Items */}

                <ul className="w-full flex flex-col items-start justify-between xs:ml-2">

                    {/* ========================================= */}
                    {/* CyberNX Technologies */}
                    {/* ========================================= */}

                    <Details
                        position="Software Developer"
                        company="@CyberNX Technologies"
                        companyLink=""
                        time="Mar 2026 - Present"
                        address="Mumbai, Maharashtra"
                        work={[
                            "Own and maintain the SBOM (Software Bill of Materials) module within a microservices-based cybersecurity product, covering ingestion, vulnerability management, compliance, and enterprise integrations.",

                            "Developed CI/CD integrations for Azure DevOps, Jenkins, GitHub Actions, and Bitbucket Pipelines to automate SBOM ingestion across software delivery workflows.",

                            "Enhanced SBOM ingestion through direct file uploads, code scanning, CLI-based generation, and repository integrations with GitHub, GitLab, and Bitbucket.",

                            "Resolved a critical PDF reporting issue for large SBOMs containing 7,000+ components, optimizing report generation to complete in under 10 seconds.",

                            "Implemented granular group-based and user-level RBAC for SBOM access and management, added SAML authentication, and enhanced existing LDAP authentication and user management.",

                            "Improved SPDX and CycloneDX parsing to preserve component and metadata information and revamped VEX functionality for more comprehensive vulnerability results.",

                            "Introduced a dedicated license enrichment service, compliance field mapping, and automated email notifications for critical vulnerability detections.",

                            "Integrated Jira and SIEM support, enabling application logs to be forwarded directly to customer-configured SIEM servers for centralized monitoring.",

                            "Collaborate closely with QA and DevOps teams on feature validation, troubleshooting, releases, and production deployments.",

                            "Participate in direct client discussions to understand requirements, clarify technical expectations, and translate business needs into product enhancements.",

                            "Help onboard and mentor junior developers on the codebase, development workflows, and engineering practices.",
                        ]}
                    />

                    {/* ========================================= */}
                    {/* Techknit Industries */}
                    {/* ========================================= */}

                    <Details
                        position="Full Stack Developer"
                        company="@Techknit Industries"
                        companyLink=""
                        time="Dec 2023 - Mar 2026"
                        address="Mumbai, Maharashtra"
                        work={[
                            "Promoted from Next.js Developer to Full Stack Developer, taking ownership of end-to-end feature development across frontend, backend, and deployment.",

                            "Developed and maintained production applications using Next.js, React.js, Node.js, MongoDB, Tailwind CSS, AWS, and GCP.",

                            "Built and optimized an e-commerce platform supporting 300-500 daily active users with server-side rendering, advanced product filtering, admin-configurable content, and Razorpay payment integration.",

                            "Developed advanced product search, filtering, sorting, autocomplete, infinite scrolling, and reusable UI components to improve product discovery.",

                            "Developed a hotel booking platform with role-based dashboards, one-time and split payment workflows, automated WhatsApp notifications, and GST-compliant PDF invoice generation.",

                            "Implemented serverless scheduled jobs and administrative dashboards for a stock market simulation platform, reducing computation time by approximately 40% and infrastructure costs by 25%.",

                            "Collaborated directly with stakeholders to translate business requirements into technical solutions and mentored junior developers on code quality and frontend best practices.",
                        ]}
                    />

                </ul>
            </div>
        </div>
    );
};

export default Experience;