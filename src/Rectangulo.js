import React, { Component } from "react";

export default class Rectangulo extends Component {
  constructor(props) {
    super(props);
    this.state = { base: "", altura: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert("El area es de: " + this.state.base * this.state.altura);
    event.preventDefault();
  }
  render() {
    return (
      <div class="d-flex justify-content-around w-50">
        <div className=" p-5 text-center border border-solid w-50 m-5">
          <label>Area de un Rectángulo</label>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Base:</label>
              <div class=" ml-2 col-sm-9">
                <input
                  name="base"
                  type="number"
                  value={this.state.base}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Altura:</label>
              <div class=" ml-2 col-sm-9">
                <input
                  name="altura"
                  type="number"
                  value={this.state.altura}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <input type="submit" value="Calcular" className="btn btn-success" />
          </form>
        </div>
      </div>
    );
  }
}
