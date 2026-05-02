import HeroV2 from "@/components/HeroV2";
import AudienceCards from "@/components/AudienceCards";
import TrustStrip from "@/components/TrustStrip";
import MoatBlock from "@/components/MoatBlock";

export default function Home() {
  return (
    <>
      <HeroV2 />

      <section className="max-w-6xl mx-auto px-6" style={{ paddingBottom: 24 }}>
        <div className="bignum-row">
          <div className="bignum">
            <div className="v"><em>250k</em></div>
            <div className="l">independent shops in the U.S. — most family-run, most on a decade-old stack.</div>
          </div>
          <div className="bignum">
            <div className="v"><em>1.51%</em></div>
            <div className="l">FAPS Interchange-Plus benchmark. The number we measure ourselves against.</div>
          </div>
          <div className="bignum">
            <div className="v"><em>0</em></div>
            <div className="l">reader-rental fees. No per-station tablet pairing. No dedicated hardware.</div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <AudienceCards />
      <MoatBlock />
    </>
  );
}
