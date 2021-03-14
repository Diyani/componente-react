
class TituloSeccion extends React.Component {
    render() {
        return (
            <div>
                <h2>Componentes de react.</h2>
            </div>
        );
    }
}

class TablaOpciones extends React.Component {
    renderTableData() {
        const countries = ['Colombia', 'Peru', 'Argentina', 'Costa Rica', 'Uruguay'];
        return countries.map((index) => {
            const country = index
            return (
                <tr >
                    <td>{country}</td>
                </tr>
            )
        })
    }
    render() {
        const estilofila = { border: "1px solid", padding: 4 };


        return (
            <table style={
                { color: "fuchsia" , background:"black"  }
                
                }  >
               
                <thead>
                    <tr>
                        <th estilofila={estilofila}>
                            ♥Continentes♥
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <RegistroFila estilofila={estilofila}
                        opcountries={this.renderTableData()}
                    />

                </tbody>
            </table>
        );
    }
}

class RegistroFila extends React.Component {
    render() {
        const style = this.props.estilofila;
        return (
            <tr>
                <td style={style}>{this.props.opcountries}</td>
            </tr>
        );
    }
}

class ListarOpciones extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TituloSeccion />
                <hr />
                <TablaOpciones></TablaOpciones>
            </React.Fragment>
        );
    }
}

const elemento = <ListarOpciones />;

ReactDOM.render(elemento, document.getElementById('contenido'));


