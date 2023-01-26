import Image from "next/image";

import Layout from "@/components/Layout";

const detail = ({ resource }: any) => {
  return (
    <Layout>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
              width={200}
              height={100}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{resource?.title}</p>
              <p className="subtitle is-6">{resource?.timeToFinish}</p>
            </div>
          </div>

          <div className="content">{resource?.description}</div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const resData = await fetch(
    `http://localhost:3000/api/resource/${params.id}`
  );
  const data = await resData.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default detail;
