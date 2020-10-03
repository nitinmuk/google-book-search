import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
const SearchForm = React.forwardRef((props, ref) => {
    return (
        <div>
            <Grid style={{ backgroundColor: "#2185d0", color: "white", margin: "20px 20px 25px 20px" }}>
                <Grid.Row >
                    <Grid.Column as="h5" textAlign="left">
                        Book Search
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>                    
                <input type="text" ref={ref} label="Book" placeholder="type here..." style={{ margin: "0px 10px 0px 10px", padding: "10px 81% 10px 10px", border: "none"}}/>                    
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated="right" width={2}>
                        <Button animated {...props}>
                            <Button.Content visible>Search</Button.Content>
                            <Button.Content hidden>
                                <Icon name='search' />
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
});

export default SearchForm;