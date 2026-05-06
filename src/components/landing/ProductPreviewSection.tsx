import { motion } from "framer-motion";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import mobileMockup from "@/assets/mobile-mockup.jpg";

const ProductPreviewSection = () => {
  return (
    <section id="product" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Beautiful tools, <span className="text-gradient">powerful results</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A modern interface your patients will love and you'll enjoy using every day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-border/50"
          >
            <img
              src={dashboardMockup}
              alt="NuDiet desktop dashboard with patient analytics"
              className="w-full"
              loading="lazy"
              width={1440}
              height={900}
            />
          </motion.div>

          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="w-64 md:w-72 animate-float">
              <img
                src={mobileMockup}
                alt="NuDiet mobile app showing meal plans and patient progress"
                className="w-full rounded-3xl shadow-xl"
                loading="lazy"
                width={600}
                height={900}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;




