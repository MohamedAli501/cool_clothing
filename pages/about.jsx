import Head from "next/head";
import Image from "next/image";
import OurBackground from "../Components/About/OurBackground";
import OurTeam from "../Components/About/OurTeam";
import Relation from "../Components/About/Relation";

//Import team data
import team from "../public/dbs/team.json";

//Fetch team data
export const getStaticProps = async () => {
  return {
    props: { workTeam: team },
  };
};

const About = ({ workTeam }) => {
  return (
    <div className="about-bg">
      <Head>
        <title>About Us</title>
      </Head>
      <div className="w-full h-96 relative">
        <Image
          src="/images/about-heading.jpg"
          layout="fill"
          alt="about-heading"
        />
        <div className="uppercase absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10 text-center">
          <h3 className="text-red-500 text-2xl font-bold p-6">about us</h3>
          <h1 className="text-white text-6xl font-medium">our company</h1>
        </div>
      </div>
      <div className="bg-white">
        {/* Our background component */}
        <OurBackground />
        <div className="container mx-auto">
          <div className="w-full flex justify-between items-center py-10 px-6 mt-12 mb-6 border-b">
            <h3 className="text-3xl capitalize">our Team</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-6 ">
            {workTeam.map((team) => (
              <OurTeam key={team.id} team={team} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Relation />
      </div>
    </div>
  );
};

export default About;
