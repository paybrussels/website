import { CashboxProvider } from "@/components/cashbox-provider";
import { About } from "@/components/home/about";
import { Cashbox } from "@/components/home/cashbox";
import { Donate } from "@/components/home/donate";
import { GetInvolved } from "@/components/home/get-involved";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Places } from "@/components/home/places";

export default function HomePage() {
  return (
    <CashboxProvider>
      <Hero />
      <HowItWorks />
      <Cashbox />
      <Donate />
      <Places />
      <GetInvolved />
      <About />
    </CashboxProvider>
  );
}
