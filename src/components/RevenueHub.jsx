import './RevenueHub.css'; 

const RevenueHub = ()=>{
    return(
        <>
        <div className='revenue-hub'> 
        <div className='container'>
            <div className='block'>
                    <div>
                        <h1>Revenue Hub</h1>
                        <p className='p1'>Empowering Sales and Finance organizations with an end-to-end Quote-to-Revenue automation solution that drives sales processes forward at speed.</p>
                    </div>

                    <div>
                        <p className='p-2'>Top 50 Best Sales Product for 2023</p>
                    </div>
            </div>
            <div className='flex'>
                    <div className='inner-flex'>
                        <div className='CPL' >
                            <img src="../images/CPL.svg" alt="CPL" />
                            <h1>
                                CPL
                            </h1>
                        </div>
                        <div>
                            <p className='inner-flex-p'>Configure price quotes easily, even for the most complex products</p>
                        </div>

                    </div>
                    <div className='inner-flex' >
                        <div className='CML' >
                            <img src="../images/Vector.svg" alt="CML" />
                            <h1>
                                CML
                            </h1>
                        </div>
                        <div>
                            <p className='inner-flex-p'>Streamline contract management and accelerate negotiations</p>
                        </div>

                    </div>
                    <div className='inner-flex '>
                        <div className='Billing'>
                            <img src="../images/Billing.svg" alt="Billing" />
                            <h1>
                                Billing
                            </h1>
                        </div>
                        <div>
                            <p className='inner-flex-p'>Manage subscriptions, billing, and invoicing for all pricing models</p>
                        </div>

                    </div>
                    <div className='inner-flex'>
                        <div className='DealRoom'>
                            <img src="../images/DealRoom.svg" alt="DealRoom" />
                            <h1>
                                DealRoom
                            </h1>
                        </div>
                        <div>
                            <p className='inner-flex-p'>Bring buyers and sellers together to collaborate and close deals</p>
                        </div>

                    </div>
                    
            </div>

        </div>
        </div>
        </>
    )
}
export default RevenueHub; 