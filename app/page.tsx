

import DashboardPreview from "@/components/Dashboard/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow/InsightFlow";
import SignatureInteraction from "@/components/SignatureInteraction/SignatureInteraction";

export default function Home() {
  return (
    <div className="">
      <section id="hero">
        <Hero />
      </section>
      <section id="flow">
        <InsightFlow />
      </section>

      <section id="workspace">
        <DashboardPreview />
      </section>

      <section id="signal">
        <SignatureInteraction />
      </section>
    </div>
  );
}
