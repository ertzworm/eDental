import React, {Component} from 'react';
import {Accordion, Icon} from 'semantic-ui-react';

class PatientCollection extends Component{

    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render(){

        const {activeIndex} = this.state;
        
        return(
            <Accordion fluid styled>

            
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Prescription History
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 0}>
                    <p>All consultations with prescribed medicines are recorded here! Consultations include the date it was incurred, who gave the diagnosis, and some minor details with plausible actions such as edit or delete</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Dental Images
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 1}>
                    <p>All consultations with prescribed medicines are recorded here! Consultations include the date it was incurred, who gave the diagnosis, and some minor details with plausible actions such as edit or delete</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Charts
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 2}>
                    <p>All consultations with prescribed medicines are recorded here! Consultations include the date it was incurred, who gave the diagnosis, and some minor details with plausible actions such as edit or delete</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Interactions
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 3}>
                    <p>All consultations with prescribed medicines are recorded here! Consultations include the date it was incurred, who gave the diagnosis, and some minor details with plausible actions such as edit or delete</p>
                </Accordion.Content>

                
                
            </Accordion>
        );
    }
}

export default PatientCollection;