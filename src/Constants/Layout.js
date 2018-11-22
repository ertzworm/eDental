import React, {Component} from 'react';
import {Grid, Divider, GridColumn, Container, Header, Placeholder} from 'semantic-ui-react';
import PatientProfile from '../Patient/PatientProfile';
import Leftwing from './Leftwing';
import Nav from './Nav';

class Layout extends Component{
    render(){
        return(
            <div>

                <Nav>

                </Nav>

               
                <PatientProfile>

                </PatientProfile>
                

                



                {/* <Grid relaxed columns={2}>
                    
                    <Grid.Column width={4}>
                        <Leftwing></Leftwing>
                    </Grid.Column>

                    

                    <GridColumn width={8}>
                        <PatientProfile></PatientProfile>
                    </GridColumn>

                </Grid> */}
            </div>
        );
    }
}

export default Layout;