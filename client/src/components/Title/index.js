import React from "react";
import { Grid } from "semantic-ui-react";

const Title = () => {
    return (
        <Grid style={{ backgroundColor:"#2185d0", color: "white", margin: "20px 20px 25px 20px" }}>
            <Grid.Row>
                <Grid.Column>
                <h2>Google Book Search</h2>
                <p>Search And Save Books of Interest</p>
                </Grid.Column>                
            </Grid.Row>
        </Grid>

    );

}

export default Title;