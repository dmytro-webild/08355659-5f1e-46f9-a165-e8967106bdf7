"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, Heart, MessageCircle, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="noiseDiagonalGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" },
            { name: "Donate", id: "donate" }
          ]}
          brandName="Nanjil Oasis"
          bottomLeftText="Est. 2009"
          bottomRightText="nanjiloasismrc@gmail.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Empowering Abilities, Building Futures Beyond Limits"
          description="At Nanjil Oasis, we transform challenges into achievements through structured learning, holistic support, and unconditional care. Every child has potential waiting to flourish."
          tag="Est. 2009"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            { text: "Donate Now", href: "#donate" },
            { text: "Our Journey", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "1",              imageSrc: "http://img.b2bpic.net/free-photo/serious-primary-school-teacher-helping-girl-cope-with-her-task_74855-16455.jpg",              imageAlt: "Children engaged in learning activities"
            },
            {
              id: "2",              imageSrc: "http://img.b2bpic.net/free-photo/multiracial-family-home-doing-high-five_53876-127060.jpg",              imageAlt: "Children receiving therapeutic support"
            },
            {
              id: "3",              imageSrc: "http://img.b2bpic.net/free-photo/mother-daughter-playing-together_329181-9434.jpg",              imageAlt: "Music therapy session with children"
            },
            {
              id: "4",              imageSrc: "http://img.b2bpic.net/free-photo/young-trainer-helping-trainees-practicing-gymnastics_23-2149401033.jpg",              imageAlt: "Dance therapy activity"
            },
            {
              id: "5",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-girl-painting-her-palm_23-2148464635.jpg",              imageAlt: "Creative art therapy session"
            },
            {
              id: "6",              imageSrc: "http://img.b2bpic.net/free-photo/girl-sits-yoga-mat-with-hands-folded-prayer_1258-296497.jpg",              imageAlt: "Yoga and wellness activity"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          background={{ variant: "plain" }}
          ariaLabel="Hero section with carousel of therapeutic activities"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <AboutMetric
          title="Our Commitment to Every Child's Growth and Well-being"
          useInvertedBackground={false}
          metrics={[
            { icon: Users, label: "Children Supported", value: "40+" },
            { icon: Award, label: "Qualified Educators", value: "15+" },
            { icon: Zap, label: "Therapy Types", value: "12+" },
            { icon: Heart, label: "Years Serving", value: "15+" }
          ]}
          metricsAnimation="slide-up"
          ariaLabel="Impact metrics section"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          title="Comprehensive Support Services"
          description="We offer holistic, multi-disciplinary therapies and educational programs tailored to each child's unique needs and abilities."
          features={[
            {
              id: "early-intervention",              label: "Early Intervention",              title: "Foundational Development Programs",              items: ["Developmental screening", "Family-centered support", "Skill-building activities", "Progress monitoring"]
            },
            {
              id: "therapies",              label: "Therapies",              title: "Specialized Therapeutic Services",              items: ["Speech therapy", "Physiotherapy", "Occupational therapy", "Music & dance therapy", "Art therapy", "Hydrotherapy"]
            },
            {
              id: "vocational",              label: "Life Skills",              title: "Empowering Independence",              items: ["Vocational training", "Sand therapy", "Skating", "Silambam (martial arts)", "Yoga & wellness", "Daily living skills"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Services and support programs section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Nanjil Oasis gave our daughter hope when we had none. The compassionate team, structured therapies, and genuine care transformed not just her abilities, but our entire family's future. She's thriving now."
          rating={5}
          author="Ramya S., Parent"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/happy-loving-family-mother-her-daughter-child-girl-playing-hugging_89887-1158.jpg", alt: "Parent testimonial" },
            { src: "http://img.b2bpic.net/free-photo/family-enjoying-leisure-time_1098-1175.jpg", alt: "Family member" },
            { src: "http://img.b2bpic.net/free-photo/portrait-smiling-loving-woman-doing-heart-symbol-shape-gesture_482257-111490.jpg", alt: "Parent testimonial" },
            { src: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12690.jpg", alt: "Team member" },
            { src: "http://img.b2bpic.net/free-photo/caucasian-mother-holding-her-african-american-daughter-her-back_1157-50601.jpg", alt: "Parent testimonial" },
            { src: "http://img.b2bpic.net/free-photo/lesbian-couple-kissing-with-copy-space_23-2149123924.jpg", alt: "Caregiver testimonial" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Testimonial from parents and families"
        />
      </div>

      <div id="donate" data-section="donate">
        <PricingCardEight
          title="Together, Let's Build Their Tomorrow"
          description="We are building a new school with hostel facility for children with special needs—especially from poor and single-parent families. Every contribution brings hope closer. 🔒 100% of your donation goes directly to the children."
          tag="Make a Difference"
          tagIcon={Heart}
          tagAnimation="slide-up"
          plans={[
            {
              id: "500",              badge: "Support",              price: "₹500",              subtitle: "Provides one session of therapy",              buttons: [{ text: "Donate ₹500", href: "#" }],
              features: ["One therapy session", "Direct impact on a child", "Monthly impact report"]
            },
            {
              id: "1000",              badge: "Care",              price: "₹1,000",              subtitle: "Supports a week of meals and therapy",              buttons: [{ text: "Donate ₹1,000", href: "#" }],
              features: ["Weekly nutrition support", "Ongoing therapy sessions", "Progress updates"]
            },
            {
              id: "2500",              badge: "Build",              price: "₹2,500",              subtitle: "Provides monthly educational supplies",              buttons: [{ text: "Donate ₹2,500", href: "#" }],
              features: ["Monthly school supplies", "Personalized learning materials", "Quarterly impact newsletter"]
            },
            {
              id: "5000",              badge: "Transform",              badgeIcon: Zap,
              price: "₹5,000",              subtitle: "Transforms a child's entire month",              buttons: [{ text: "Donate ₹5,000", href: "#" }],
              features: ["Complete monthly support", "All therapies & education", "Named sponsorship option"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Custom Donation", href: "#" }]}
          buttonAnimation="slide-up"
          ariaLabel="Donation options and contribution tiers"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Questions? We're Here to Help"
          ctaDescription="Reach out to learn more about our programs, discuss your child's needs, or explore partnership opportunities. Our compassionate team is ready to support you."
          ctaButton={{ text: "Ask About Programs", href: "mailto:nanjiloasismrc@gmail.com" }}
          ctaIcon={MessageCircle}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "1",              title: "What age children do you support?",              content: "We support children from infancy through adolescence (0-18 years) with various special needs including autism, ADHD, cerebral palsy, Down syndrome, learning difficulties, and other developmental challenges."
            },
            {
              id: "2",              title: "Are there fees for the programs?",              content: "We operate on a sliding scale and believe no child should be turned away due to financial constraints. We work with each family individually and offer scholarships for underprivileged children."
            },
            {
              id: "3",              title: "How do you personalize each child's program?",              content: "Every child receives a comprehensive assessment by our multidisciplinary team. We create individualized education and therapy plans based on each child's unique strengths, abilities, and goals."
            },
            {
              id: "4",              title: "Can parents be involved in therapy sessions?",              content: "Absolutely! Parent involvement is central to our approach. We train and involve parents in therapy and home-based activities to ensure continuous support and better outcomes."
            },
            {
              id: "5",              title: "Do you provide hostel facilities?",              content: "We are currently building a new school with hostel facility to support children from poor and single-parent families. This expansion will provide 24/7 care, education, and therapy in a safe, nurturing environment."
            }
          ]}
          accordionAnimationType="smooth"
          ariaLabel="Contact and frequently asked questions section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Donate",              items: [
                { label: "Make a Donation", href: "#donate" },
                { label: "Become a Partner", href: "mailto:nanjiloasismrc@gmail.com" },
                { label: "Bank Transfer Details", href: "#" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Email Us", href: "mailto:nanjiloasismrc@gmail.com" },
                { label: "Call Us", href: "tel:+919944330809" },
                { label: "Location", href: "#" }
              ]
            },
            {
              title: "Bank Details",              items: [
                { label: "PNB - Account: 3868000100376620", href: "#" },
                { label: "UPI: 9597070301", href: "#" },
                { label: "Registered Trust", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Nanjil Oasis Happy Centre. All rights reserved."
          bottomRightText="You Are Happy and Safe in Our Hands"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
