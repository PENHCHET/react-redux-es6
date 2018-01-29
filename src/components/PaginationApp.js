import React from 'react';
import Pagination from './common/Pagination';

function range(start, edge, step) {
    // If only one number was passed in make it the edge and 0 the start.
    if (arguments.length == 1) {
      edge = start;
      start = 0;
    }
   
    // Validate the edge and step numbers.
    edge = edge || 0;
    step = step || 1;
   
    // Create the array of numbers, stopping befor the edge.
    for (var ret = []; (edge - start) * step > 0; start += step) {
      ret.push(start);
    }
    return ret;
}

class PaginationApp extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = range(1, 100).map(i => { return { id: i, name: 'Item ' + i }; });

        console.log(exampleItems);

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>React - Pagination Example with logic like Google</h1>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default PaginationApp;