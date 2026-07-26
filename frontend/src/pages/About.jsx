import PageHeader from "../components/PageHeader.jsx";
import Leadership from "../components/Leadership.jsx";
import GuestsHonorRoll from "../components/GuestsHonorRoll.jsx";
import LegacyLedger from "../components/LegacyLedger.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Founded in 1998, built for the world ahead."
        copy="Pavna School (formerly known as  DPS Aligarh) began as a dream held by Shri Pawan Jain — to build innovative, world-class education that shapes young minds in a supportive environment."
      />
      <LegacyLedger />
      <Leadership />
      <GuestsHonorRoll />
    </>
  );
}
