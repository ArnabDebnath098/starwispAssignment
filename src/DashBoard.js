import React from 'react';
import "./DashBoard.css";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchIcon from '@material-ui/icons/Search';
import {Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabCard from "./TabCard";
import {Link} from "react-router-dom";
import NotePad from './NotePad';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  
  
function DashBoard() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

  
    return (
        <div className="dashBoard">

            {/* ---------------Dashboard Left----------------- */}

            <div className="dashBoard-left">
                <Link to="/">
                   <a> <DashboardIcon className="left-Icon"/> Dashboard</a>
                </Link>
                
                <a> <SchoolIcon className="left-Icon"/> Lorem</a>
                <a> <SettingsIcon className="left-Icon"/> Ipsum</a>
                <Link to="/posts">
                    <a> <PostAddIcon className="left-Icon"/> Posts</a>
                </Link>
               
            </div>
             
             {/* ------------------Main Body-------------------- */}

            <div className="main-body">
            
                <div className="searchBox">
                   <SearchIcon className="searchicon" />
                   <input type="text" placeholder="Search"/>
                </div>
               <div className="chartsTab">
                
                <div className="chartsTab-left">
                  
                  <div className="salesReport">
                   
                   <div className="salesReport-graph">
                      <h4>Sales Report <span>September 2020</span></h4>

                      <Line
                       data={{
                           labels: ['', '','','','','','','','','','',''],
                           datasets: [
                               {
                                   
                                   data: [1,5,2,7,6,6.5,4,5,6,10,12,19],
                                   borderColor:['rgba(255, 108, 64, 1)'],
                                   backgroundColor: ['rgba(255, 108, 64, 0)']
                               },
                               
                              {
                                  
                                  data: [1,4,7,9,4,5.6,9,7,10,12,8,9.9],
                                  borderColor:['rgba(130, 106, 249, 1)'],
                                  backgroundColor: ['rgba(255, 108, 64, 0)']
                              },
                              {
                                  
                                data: [1,3,2,1,2,2.5,3,4,1,1,5,6],
                                borderColor:['rgba(255, 231, 0, 1)'],
                                backgroundColor: ['rgba(255, 108, 64, 0)']
                            }
                           ],
                       }}
                       height={400}
                       width={50}
                       options={{
                           legend:{display:false},
                           maintainAspectRatio:false,
                           scales: { yAxes: [{ticks: { display: false }}] 
                       },
                       }}
                      />
                   </div>
                   
                   <div className="salesReport-orange">
                      <h4>17 Sep</h4>

                      <div className="yellow">
                          <h5>$1204.33</h5>
                          <p>Revenue</p>
                      </div>

                      <div className="green">
                          <h5>33</h5>
                          <p>Quotations</p>
                      </div>

                   </div>

                   </div>
                
                   <div className="main-body-notepad">
                    
                      <NotePad/>
                    
                    
                        
                    <div className="middle">
                        
                        <div className="middleGraph">
                            <Line 
                             data={{
                                 
                                labels: ['27','28','1','2','3'],
                                datasets: [
                                    {   
                                        label: false,
                                        data: [100,300,200,180,250],
                                        borderColor:[' rgb(0, 63, 0)'],
                                        backgroundColor: ['rgba(0, 255, 17, 0.23)']
                                    },
                                ],
                            }}
                            
                            options={{
                                legend:{display:false},
                                maintainAspectRatio:false,
                                scales: { xAxes: [{gridLines: {display: false}}] },
                                
                            }}
                            />
                        </div>
                        <div className="inbox">
                            <p>Inbox</p>
                            <h4>23</h4>
                        </div>
                    </div>
                    
                    <div className="last">
                        <div className="thisMonth">
                            <p>This Month</p>
                            <hr/>
                            <div className="thisMonthinfo">
                                <h4>+7.8%</h4>
                                <Line 
                             data={{
                                 
                                labels: ['', '','','','','','','','','','',''],
                                datasets: [
                                    {   
                                        label: false,
                                        data: [1,5,2,7,6,6.5,4,5,6,10,12,19],
                                        borderColor:[' rgba(0, 0, 255, 1)'],
                                        backgroundColor: ['rgba(0, 255, 17, 0)']
                                    },
                                ],
                            }}
                            
                            options={{
                                legend:{display:false},
                                maintainAspectRatio:false,
                                scales: {xAxes: [{gridLines: {display: false}}],
                                         yAxes: [{gridLines: {display: false},
                                            ticks: { display: false }}] 
                                }
                            }}
                            />
                            </div>
                        </div>
                        <div className="lastMonth">
                            <p>Last Month</p>
                            <hr/>
                            <div className="thisMonthinfo">
                                <h4>+64.7%</h4>
                                <Line 
                             data={{
                                 
                                labels: ['','','','','',],
                                datasets: [
                                    {   
                                        label: false,
                                        data: [3,2,5,6],
                                        borderColor:['rgba(2, 200, 142, 1)'],
                                        backgroundColor: ['rgba(0, 255, 17, 0)']
                                    },
                                ],
                            }}
                            
                            options={{
                                data:{display:false},
                                legend:{display:false},
                                maintainAspectRatio:false,
                                scales: {xAxes: [{gridLines: {display: false}}],
                                yAxes: [{gridLines: {display: false},
                                   ticks: { display: false }}] 
                       },
                                
                            }}
                            />
                            </div>
                        </div>
                   
                    </div>
                </div>
                  </div>
                
                 {/* -----------------extreme right tabbed content------------------- */}

            <div className="chartsTab-right">
                <div className="tabs">
                <AppBar position="static">
                     <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                          <Tab label="Notifications" {...a11yProps(0)} />
                          <Tab label="Events" {...a11yProps(1)} />
          
                     </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div className="tab-Content">
                       <TabCard color="#F5E764" heading="Teacher" time="3 minutes ago"/>
                       <TabCard color="#BA99FF" heading="Admin" time="3 minutes ago"/>
                       <TabCard color="#D9FFE1" heading="Student" time="3 minutes ago"/>
                       <TabCard color="#BA99FF" heading="Admin" time="3 minutes ago"/>
                    </div>
                    <button className="tab-Contentbutton">View All</button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="tab-Content">
                       <TabCard color="#BA99FF" heading="Admin" time="3 minutes ago"/>
                       <TabCard color="#D9FFE1" heading="Student" time="3 minutes ago"/>
                       <TabCard color="#F5E764" heading="Teacher" time="3 minutes ago"/>
                       <TabCard color="#F5E764" heading="Teacher" time="3 minutes ago"/>
                    </div>
                    <button className="tab-Contentbutton">View All</button>
                </TabPanel>
      
                </div>
            </div>
               </div>
                
            </div>
            
           
        </div>
    )
}

export default DashBoard;
