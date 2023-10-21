import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import Transition from "@/components/transition";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Component {...pageProps} />
            <Transition />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
