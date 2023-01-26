import React, { useState } from "react";
import Layout from "@/components/Layout";
import Router from "next/router";

const Update = ({ resource, id }: any) => {
  const [state, setState] = useState(resource);

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/resource/${id}`, {
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    });
    Router.push("/");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title">Add New Resource</h1>
            <form onSubmit={handleUpdate}>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    value={state.title}
                    onChange={handleChange}
                    name="title"
                    className="input"
                    type="text"
                    placeholder="Enter title"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    value={state.description}
                    onChange={handleChange}
                    className="input"
                    name="description"
                    type="text"
                    placeholder="Enter Description"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Time to Finish</label>
                <div className="control">
                  <input
                    value={state.timeToFinish}
                    onChange={handleChange}
                    className="input"
                    name="timeToFinish"
                    type="number"
                    placeholder="Enter Time"
                  />
                </div>
              </div>

              <div className="field is-grouped columns">
                <div className="column">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={state.priority}
                        name="priority"
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <label className="label">Status</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={state.status}
                        name="status"
                        onChange={handleChange}
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>In progress</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <input
                    type="submit"
                    className="button is-link"
                    value="Update"
                  />
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
            </form>
          </div>
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
      id: params.id,
    },
  };
}

export default Update;
