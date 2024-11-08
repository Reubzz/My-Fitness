import React from 'react';
import './footer.css'
// import longLogo from '../../public/My-Fitness-Long-Logo.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="left-conatainer">
                    <div className="logo-container">
                        <img src='/My-Fitness-Long-Logo.png' alt='logo'></img>
                    </div>
                    <div className="extra-data">
                        Mini Project 1
                        <br />
                        Reuben J George - 1272240058
                        <br />
                        Siddhesh Bhor - 1272240148 
                        <br />
                        Aniket Dhakane - 1272240137
                        <br />
                        Suhani Kawade - 1272240298
                    </div>
                </div>
                <div className="right-conatainer">
                    <h3 className='quicklinks-data header'>Quick Links</h3>
                    <div className='quick-links-data'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/exercuse'>Exercise</a></li>
                            <li><a href='/whealth'>Women Health</a></li>
                            <li><a href='/yoga'>Yoga</a></li>
                            <li><a href='/#'>To-Do List</a></li>
                            <li><a href='/bmi'>Calculate BMI</a></li>
                            <li><a href='/calorie'>Calorie Tracker</a></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer