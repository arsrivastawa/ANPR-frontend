import React from 'react';
import './Sidebar.css';

function toggleSidebar() {
    alert("Hello There")
}

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='search-filter-container'>
                <div className='searchbox-container'>
                    <input name='vehicleNumber' placeholder='Enter vehicle number' type="text" /><button className='searchbox-button'>Search</button>
                </div>
                <div className='filter-btn'>
                    <button>Filter</button>
                </div>
            </div>
            <div>
                <div className='num'>JH-10-0029</div>
                <div className='num'>MP-05-2345</div>
                <div className='num'>HR-24-789R</div>
                <div className='num'>TN-09-2R4Y</div>
                <div className='num'>JH-07-0P46</div>
                <div className='num'>MP-01-45SX</div>
            </div>
        </div>
    )
}

export default Sidebar