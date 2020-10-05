import React from "react";
import { Button, Icon, Form } from 'semantic-ui-react'
const SearchForm = React.forwardRef((props, ref) => {
    return (
        <Form style={{ backgroundColor: "#2185d0", color: "white", margin: "20px 20px 25px 20px", padding: "20px" }}>
            <h5 style={{ textAlign:"left" }}> Search Book: </h5>
            <Form.Group inline>                
                <Form.Field width={12}>
                    <input label="Book" placeholder='type here...' ref={ref} type="text"></input>
                </Form.Field>
                <Form.Field>
                    <Button animated {...props} type="submit" floated="right">
                        <Button.Content visible>Search</Button.Content>
                        <Button.Content hidden>
                            <Icon name='search' />
                        </Button.Content>
                    </Button>
                </Form.Field>
            </Form.Group>
        </Form>
    );
});

export default SearchForm;