import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const WaveShape = ({
  width = "100%",
  height = "150px",
  fill = "#08f",
  className,
  style,
}) => (
  <div style={{ height, overflow: "hidden", ...style }} className={className}>
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{ height: "100%", width: "100%" }}
    >
      <path
        d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{ stroke: "none", fill }}
      />
    </svg>
  </div>
);
export function Footer() {
  return (
    <footer className="bg-pink-200 mt-28 pt-16 pb-8 relative">
      <WaveShape
        className="absolute -top-36 z-10 w-full"
        height="200px"
        fill="#fbcfe8"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-semibold text-sky-700 mb-4">
            CakeLawa
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a href="tel:9811254424"> 📞 9811254424 </a>
            <a href="tel:9582154242"> 📞 9582154242 </a>
            <a href="mailto:k4rluxehospitality@gmail.com?subject=Hello&body=I would like to discuss something with you.">
              📧 k4rluxehospitality@gmail.com
            </a>
          </div>
          <div className="my-2 text-sm sm:text-base">
            <a href="https://maps.app.goo.gl/dyibFzRabUUVjeC67" target="_blank">
              📍Shop No. 3, Plot No. B-7 and B-8, Ground Floor,
              <br /> Bhandari House Commercial Complex, Dr mukherjee nagar
            </a>
          </div>
          <div className="h-64 bg-gray-200 mb-8 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.8275705775902!2d77.21430649919738!3d28.710271800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc51f1cd30f%3A0x108e56029482c416!2sBakelawa!5e0!3m2!1sen!2sin!4v1749391562362!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="flex gap-2 justify-center align-middle items-center"
              href="https://www.instagram.com/cakelawacafe/"
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
              Follow us on Instagram
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>© 2025 CakeLawa. All rights reserved.</p>
          <p className="text-xs mt-2">
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/parth-dahiya/"
              target="_blank"
              className="underline"
            >
              Parth Dahiya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
