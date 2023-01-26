import Link from "next/link";

interface Props {
  resources: {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    priority: number;
    timeToFinish: number;
    active: boolean;
  }[];
}

const Resources = ({ resources }: Props) => {
  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <div className="section">
              <div className="columns is-multiline is-variable is-8">
                {resources.map((resource) => {
                  return (
                    <div key={resource.id} className="column is-5 is-offset-1 ">
                      <div className="content is-medium">
                        <h2 className="subtitle is-5 has-text-grey">
                          {resource.timeToFinish}
                        </h2>
                        <h1 className="title has-text-black is-3">
                          {resource.title}
                        </h1>
                        <p className="has-text-dark">{resource.description}</p>
                        <div className="buttons">
                          <button className="button is-primary">
                            <Link href={`/resource/${resource.id}`}>
                              Detail
                            </Link>
                          </button>
                          <button className="button is-link">
                            <Link href={`/resource/update/${resource.id}`}>
                              Update
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
