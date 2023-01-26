import React from "react";
import Layout from "@/components/Layout";
import Router from "next/router";

interface MyState {
  title: string;
  description: string;
  timeToFinish: number;
  priority: number;
  status: string;
}

interface MyProps {}

class New extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      timeToFinish: 0,
      priority: 1,
      status: "Active",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/resources", {
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" },
      method: "Post",
    });
    Router.push("/");
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render(): React.ReactNode {
    return (
      <Layout>
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <h1 className="title">Add New Resource</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      value={this.state.title}
                      onChange={this.handleChange}
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
                      value={this.state.description}
                      onChange={this.handleChange}
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
                      value={this.state.timeToFinish}
                      onChange={this.handleChange}
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
                          value={this.state.priority}
                          name="priority"
                          onChange={this.handleChange}
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
                          value={this.state.status}
                          name="status"
                          onChange={this.handleChange}
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
                      value="Submit"
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
  }
}

export default New;
