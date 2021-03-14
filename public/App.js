"use strict";

class TituloSeccion extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Componentes de react."));
  }

}

class TablaOpciones extends React.Component {
  renderTableData() {
    const countries = ['Colombia', 'Peru', 'Argentina', 'Costa Rica', 'Uruguay'];
    return countries.map(index => {
      const country = index;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, country));
    });
  }

  render() {
    const estilofila = {
      border: "1px solid",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        color: "fuchsia",
        background: "black"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      estilofila: estilofila
    }, "\u2665Continentes\u2665"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(RegistroFila, {
      estilofila: estilofila,
      opcountries: this.renderTableData()
    })));
  }

}

class RegistroFila extends React.Component {
  render() {
    const style = this.props.estilofila;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.opcountries));
  }

}

class ListarOpciones extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TituloSeccion, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(TablaOpciones, null));
  }

}

const elemento = /*#__PURE__*/React.createElement(ListarOpciones, null);
ReactDOM.render(elemento, document.getElementById('contenido'));