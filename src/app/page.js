import MainAbout from "@/Components/MainAbout";
import MainHero from "@/Components/MainHero";
import MainService from "@/Components/MainService";
import MainTagline from "@/Components/MainTagline";
import MainTeam from "@/Components/MainTeam";
import MainTestimoni from "@/Components/MainTestimoni";

export default function Home() {
  return (
    <>
      <MainHero></MainHero>
      <MainService></MainService>
      <MainAbout></MainAbout>
      <MainTeam></MainTeam>
      <MainTagline></MainTagline>
      <MainTestimoni></MainTestimoni>
    </>
  );
}
