import React, { useEffect, useState } from 'react';
import { Box, Drawer } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./index.css"

import Loading from "./Loading";
import { useContext } from 'react';
import { AppPrvoider } from './ContentApi/Api';

const Navbar = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isOpen, setIsOpen } = useContext(AppPrvoider);

    const getPages = async () => {
        try {
            const page = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/pages`);
            console.log(page.data);
            setData(page.data);
            setLoading(true);
        } catch (error) {
            console.log(`error message `, error.message);
        }
    };

    useEffect(() => {
        getPages();
    }, []);

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Drawer
            id="drawer"
                anchor="right"
                open={isOpen}
                onClose={handleDrawerClose}
                hideBackdrop={false}
               sx={{
                display:"flex",
                alignItems:"center",
                
               }}
            >
                <Box
                    sx={{
                        width: '300px',
                        zIndex: 1, 
                        
                        
                    }}
                >
                    {loading ? (
                        <>
                            {Array.isArray(data) &&
                                data.map((pages, p) => (
                                    <div className='d-flex alignItems-center demo' key={p}>
                                        <ul>
                                            <Link style={{ justifyContent: 'center', textDecoration: 'none', color: '#000' }}>
                                                {pages.title.rendered}
                                            </Link>
                                        </ul>
                                    </div>
                                ))}
                        </>
                    ) : (
                        <Loading />
                    )}
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
