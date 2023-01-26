import Link from "next/link";

interface Props {
  resource: {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    priority: number;
    timeToFinish: number;
    active: boolean;
  };
}

const Highlight = ({ resource }: Props) => {
  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.timeToFinish}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <div className="buttons">
                      <button className="button is-primary">
                        <Link href={`/resource/${resource.id}`}>Detail</Link>
                      </button>
                      <button className="button is-link">
                        <Link href={`/resource/update/${resource.id}`}>
                          Update
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlight;
