import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <Form className="d-flex col-sm-5 col-md-2 mr-0 align-items-center">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        )
    }
}

