import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div style={{ padding: '3em 2em 10em 2em' }}>
                    <Grid>
                        <Cell col={6}>
                            <Card shadow={3} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Restaurant</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                                <CardActions border>
                                    <Button colored>Know More</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>

                        <Cell col={6}>
                            <Card shadow={3} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>XXXXXXXXXXXXXXX</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                           </CardText>
                                <CardActions border>
                                    <Button colored>Know More</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div style={{ padding: '3em 0 0 0' }}>
                    <Grid>
                        <Cell col={12}>
                            <Card shadow={3} style={{ width: '60%', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Restaurant Homepage</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                                <CardActions border>
                                    <Button colored>Know More</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>
                </div>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div  style={{ padding: '3em 2em 10em 2em' }} >
                    <Grid>
                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                                 </CardText>
                                <CardActions border>
                                    <Button colored>View Updates</Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                                 </CardText>
                                <CardActions border>
                                    <Button colored>View Updates</Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenan convallis.
                                </CardText>
                                <CardActions border>
                                    <Button colored>View Updates</Button>
                                </CardActions>
                            </Card>
                        </Cell>

                    </Grid>

                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div style={{ padding: '3em 2em 10em 2em' }}>
                <Grid>
                    <Cell col={6}>
                        <Card shadow={3} style={{ width: '90%', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Restaurant Homepage</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
                            <CardActions border>
                                <Button colored>Know More</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    <Cell col={6}>
                        <Card shadow={3} style={{ width: '90%', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Hospitality Shift Management</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                       </CardText>
                            <CardActions border>
                                <Button colored>Know More</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>

            </div>
            )
        }
    }

    render() {
        return (
            <div className="tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Restaurant</Tab>
                    <Tab>Online Store</Tab>
                    <Tab>Product Launch</Tab>
                    <Tab>Uni Assignments</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}

export default Project;