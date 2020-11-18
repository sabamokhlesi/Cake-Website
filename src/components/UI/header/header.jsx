import React from 'react'
import styles from './header.module.scss'
import Nav from '../../nav/nav'
import headerPhoto from '../../../photos/header2.png'

const header = (props) => (
    <div className={styles.header} >
        <div className={styles.headerTop}>
            <Nav/>
        </div>
        <div className={styles.headerMain}>
            <div className={styles.headerText}>
                 <h1 className='heading-1'>Birthdays Have Never Been This Fun!</h1>  
                 <h3 className='heading-3'>Build and design the cake you love and we'll take care of the rest...</h3> 
                 <div>
                    <button className='btn btn-primary'>I Want a Cake</button>
                    <button className='btn btn-secondary'>Learn More</button>
                 </div>
            </div>
            <img src={headerPhoto} alt="MyBurger" />
        </div>
    </div>
);

export default header;