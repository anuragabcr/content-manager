import Layout from "@/components/Layout";
import Highlight from "@/components/Highlight";
import Newsletter from "@/components/Newsletter";
import Resources from "@/components/Resources";

const Home = ({ resources }: any) => {
  return (
    <Layout>
      <Highlight resource={resources[0]} />
      <Newsletter />
      <Resources resources={resources} />
    </Layout>
  );
};

export async function getStaticProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
