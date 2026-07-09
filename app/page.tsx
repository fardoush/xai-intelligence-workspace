

import DashboardPreview from "@/components/Dashboard/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow/InsightFlow";
import SignatureInteraction from "@/components/SignatureInteraction/SignatureInteraction";




export default function Home() {
  return (
    <div className="">
      <Hero/>
      <InsightFlow/>
      <DashboardPreview/>
      <SignatureInteraction/>
    </div>
  );
}
