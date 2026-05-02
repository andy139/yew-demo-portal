import HeroV2 from "@/components/HeroV2";
import AudienceCards from "@/components/AudienceCards";
import TrustStrip from "@/components/TrustStrip";
import MoatBlock from "@/components/MoatBlock";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <>
      <HeroV2 />

      <section className="max-w-6xl mx-auto px-6" style={{ paddingBottom: 24 }}>
        <div className="bignum-row">
          <div className="bignum">
            <div className="v">
              <em>
                <CountUp target={250} duration={1300} suffix="k" />
              </em>
            </div>
            <div className="l">independent shops in the U.S. — most family-run, most on a decade-old stack.</div>
          </div>
          <div className="bignum">
            <div className="v">
              <em>
                <CountUp target={1.68} decimals={2} duration={1300} suffix="%" />
              </em>
            </div>
            <div className="l">A&amp;C&apos;s actual all-in rate on First American Interchange-Plus. The benchmark we quote against.</div>
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
