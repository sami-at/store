import './TrackOrderPage.css'; 

function TrackOrderPage() {
    return (
        <div className='wrapper'>
            <h1 className="track-order-title">Track Your Order</h1>
            <div className="track-order-container">
                <div className="track-methods">
                    <div className="track-method">
                        <form>
                            <label>
                                Order Number
                                <input type="text" name="orderNumber" className="input"/>
                            </label>
                            <label>
                                Email or Phone Number
                                <input type="text" name="contactInfo" className="input"/>
                            </label>
                            <button type="submit" className="Track">Track</button>
                        </form>
                    </div>
                    
                    <div className="divider"></div>

                    <div className="track-method">
                        <form>
                            <label>
                                Tracking Number
                                <input type="text" name="trackingNumber" className="input"/>
                            </label>
                            <button type="submit" className="Track">Track</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackOrderPage;
