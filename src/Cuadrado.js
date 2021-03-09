import React, { Component } from "react";

export default class Cuadrado extends Component {
  constructor(props) {
    super(props);
    this.state = { lado: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ lado: event.target.value });
  }

  handleSubmit(event) {
    alert("El area es de: " + this.state.lado * this.state.lado);
    event.preventDefault();
  }
  render() {
    return (
      <div class="d-flex justify-content-around w-50">
        <div className=" p-5 text-center border border-solid w-50 m-5">
          <label>Area de un Cuadrado</label>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Lado:</label>
              <div class="col-sm-10">
                <input
                  type="number"
                  value={this.state.lado}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <input type="submit" value="Calcular" className="btn btn-info" />
          </form>
        </div>
      </div>
    );
  }
}
